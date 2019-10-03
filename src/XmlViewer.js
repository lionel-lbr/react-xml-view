import React, { useState } from 'react';
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

function XmlElt({eltName, eltValue, eltAtt, eltChildren}) {

  const [openState, setOpenState] = useState(true)

  function toggle() {
    setOpenState(!openState)
  }

  var eltOpenTag = <div style={Styles.xmlopenclosetag}>{"<"+eltName}</div>
  var eltOpenTagTrailer = ""
  var eltAttStr = ""
  var eltValueOrChild = ""
  var eltCloseTag = ""

  // simple html tag, no attributes or children, display as one row/line
  if (eltValue && eltChildren.length === 0 && eltAtt.length ===0) {
    eltOpenTagTrailer = <div style={Styles.xmlopenclosetag}>{">"}</div>
    eltValueOrChild = <div>{eltValue}</div>
    eltCloseTag = <div style={Styles.xmlopenclosetag}>{"</"+eltName+">"}</div>

    return (
      <div style={Styles.simplexmlelt}>
        {eltOpenTag}{eltOpenTagTrailer}{eltValueOrChild}{eltCloseTag}
      </div>
    )
  } 

  if (eltAtt.length > 0) {
    eltAttStr = eltAtt.map(att => {
      return (
        <div style={Styles.headerelt}>
          <div style={Styles.xmlattname}>{att.nodeName}</div>
          <div style={Styles.xmlattvalue}>{'="'+att.nodeValue+'"'}</div>
        </div>)
        });
  }

  // only attributes, no children, display as one row/line
  if (eltValue==null && eltChildren.length === 0) {
    eltOpenTagTrailer = <div style={Styles.xmlopenclosetag}>{"/>"}</div>

    return (
      <div style={Styles.simplexmlelt}>
        {eltOpenTag}{eltAttStr}{eltOpenTagTrailer}
      </div>
    )
  }

  // process close state, don't display children
  if (!openState) {
    eltOpenTagTrailer = <div style={Styles.xmlopenclosetag}>{">"}</div>
    eltCloseTag = <div style={Styles.xmlopenclosetag}>{"</"+eltName+">"}</div>

    return (
      <div style={Styles.xmleltclose}>
        <div style={Styles.arrowBox}>
          <div style={Styles.arrowRight} onClick={toggle}/>
        </div>
        {eltOpenTag}{eltAttStr}{eltOpenTagTrailer}<div style={Object.assign({}, Styles.headerelt, {background: "lightgreen", color: "purple"})}>{"...  "}</div>{eltCloseTag}
      </div>
    )
  }

  if (eltValue || eltChildren.length > 0) {
    eltOpenTagTrailer = <div>{">"}</div>
    let allchild = eltChildren.map(eltNode => {
      var elt = processElt(eltNode)
      return (<XmlElt eltName={elt.name} eltAtt={elt.attr} eltChildren={elt.children} eltValue={elt.value}/>)
    })
    eltValueOrChild = <div style={Styles.xmleltopen}>{eltValue}{allchild}</div>
    eltCloseTag = <div style={Styles.xmlopenclosetag}>{"</"+eltName+">"}</div>

  } else {
    // no value and no children
    eltOpenTagTrailer = <div style={Styles.xmlopenclosetag}>{"/>"}</div>
  }
  // }

  return (

    <div style={Styles.xmleltopen}>  
      <div style={Styles.xmleltheader}>
        <div style={Styles.arrowBox}><div style={Styles.arrowDown} onClick={toggle}/></div>
        {eltOpenTag}
        {eltAttStr}
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


function XmlViewer({src}) {

  function parseSrc(src) {
    let d = new DOMParser()
    let doc = d.parseFromString(src, 'application/xml')
    // convert the HTMLCollection to an array.
    return [].slice.call(doc.children)
  } 

  var allChildren = parseSrc(src)

  return (
    <div style={Styles.xmlviewer}>
      {
        allChildren.map(eltNode => {
            var elt = processElt(eltNode)
            return (<XmlElt eltName={elt.name} eltAtt={elt.attr} eltChildren={elt.children} eltValue={elt.value}/>)
          })
      }
    </div>
  )
}

export default XmlViewer;