import React from 'react';
import Styles from "./Styles.js"

const processElt = (eltNode) => {
  var elt = {} 
  elt.name = eltNode.nodeName
  // convert the HTMLCollection to an array.
  elt.attr = [].slice.call(eltNode.attributes)
  elt.children = [].slice.call(eltNode.children)

  elt.value = (eltNode.childElementCount === 0 && eltNode.firstChild && eltNode.firstChild.nodeType === Node.TEXT_NODE) ? eltNode.firstChild.nodeValue : null

  return elt
}

class XmlElt extends React.Component {

  constructor(props) {
    super(props)

    this.state = { open: true }
    this.eltName = props.eltName
    this.eltValue = props.eltValue
    this.eltAtt = props.eltAtt
    this.eltChildren = props.eltChildren

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({open: !this.state.open })
  }

  render() {
    var eltOpenTag = <div style={Styles.xmlopenclosetag}>{"<"+this.eltName}</div>
    var eltOpenTagTrailer = ""
    var eltAtt = ""
    var eltValueOrChild = ""
    var eltCloseTag = ""

    // simple html tag, no attributes or children, display as one row/line
    if (this.eltValue && this.eltChildren.length === 0 && this.eltAtt.length ===0) {
      eltOpenTagTrailer = <div style={Styles.xmlopenclosetag}>{">"}</div>
      eltValueOrChild = <div>{this.eltValue}</div>
      eltCloseTag = <div style={Styles.xmlopenclosetag}>{"</"+this.eltName+">"}</div>

      return (
        <div style={Styles.simplexmlelt}>
          {eltOpenTag}{eltOpenTagTrailer}{eltValueOrChild}{eltCloseTag}
        </div>
      )
    } 

    if (this.eltAtt.length > 0) {
      eltAtt = this.eltAtt.map(att => {return(
        <div style={Styles.headerelt}>
          <div style={Styles.xmlattname}>{att.nodeName}</div>
          <div style={Styles.xmlattvalue}>{'="'+att.nodeValue+'"'}</div>
        </div>)});
    }

    // only attributes, no children, display as one row/line
    if (this.eltValue==null && this.eltChildren.length === 0) {
      eltOpenTagTrailer = <div style={Styles.xmlopenclosetag}>{"/>"}</div>

      return (
        <div style={Styles.simplexmlelt}>
          {eltOpenTag}{eltAtt}{eltOpenTagTrailer}
        </div>
      )
    }

    // process close state, don't display children
    if (!this.state.open) {
      eltOpenTagTrailer = <div style={Styles.xmlopenclosetag}>{">"}</div>
      eltCloseTag = <div style={Styles.xmlopenclosetag}>{"</"+this.eltName+">"}</div>

      return (
        <div style={Styles.xmleltclose}>
          <div style={Styles.arrowBox}>
            <div style={Styles.arrowRight} onClick={this.toggle}/>
          </div>
          {eltOpenTag}{eltAtt}{eltOpenTagTrailer}<div style={Object.assign({}, Styles.headerelt, {background: "lightgreen", color: "purple"})}>{"...  "}</div>{eltCloseTag}
        </div>
      )
    }

    if (this.eltValue || this.eltChildren.length > 0) {
      eltOpenTagTrailer = <div>{">"}</div>
      let allchild = this.eltChildren.map(eltNode => {
        var elt = processElt(eltNode)
        return (<XmlElt eltName={elt.name} eltAtt={elt.attr} eltChildren={elt.children} eltValue={elt.value}/>)
      })
      eltValueOrChild = <div style={Styles.xmleltopen}>{this.eltValue}{allchild}</div>
      eltCloseTag = <div style={Styles.xmlopenclosetag}>{"</"+this.eltName+">"}</div>

    } else {
      // no value and no children
      eltOpenTagTrailer = <div style={Styles.xmlopenclosetag}>{"/>"}</div>
    }
    // }

    return (

        <div style={Styles.xmleltopen}>  
          <div style={Styles.xmleltheader}>
            <div style={Styles.arrowBox}><div style={Styles.arrowDown} onClick={this.toggle}/></div>
            {eltOpenTag}
            {eltAtt}
            {eltOpenTagTrailer}
          </div> 
          <div style={Styles.xmleltbody}>
            {eltValueOrChild}
          </div> 
          <div style={Styles.xmleltfooter}>
            {eltCloseTag}
          </div>
        </div>
    )
  }
}


class XmlViewer extends React.Component {
 
  constructor(props) {
    super(props)

    this.allChildren = []
    this.parseSrc = this.parseSrc.bind(this)

    this.parseSrc(this.props.src)
  }

  // componentWillMount() {
  //   this.parseSrc(this.props.src)
  // }
  render() {
    return (
      <div style={Styles.xmlviewer}>
        {
          this.allChildren.map(eltNode => {
              var elt = processElt(eltNode)
              return (<XmlElt eltName={elt.name} eltAtt={elt.attr} eltChildren={elt.children} eltValue={elt.value}/>)
            })
        }
      </div>
    )
  }

  parseSrc(src) {
    let d = new DOMParser()
    let doc = d.parseFromString(src, 'application/xml')
    // convert the HTMLCollection to an array.
    this.allChildren = [].slice.call(doc.children)
  } 
}


export default XmlViewer;