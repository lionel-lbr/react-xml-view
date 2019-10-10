var styles = {}

styles.xmlviewer = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  // border: "2px solid orange",
  fontSize: "15px",
}

styles.xmleltopen = {
    display: "flex",
    flexDirection: "column",
    // borderLeft: "1px solid orange"
  }

styles.xmleltheader = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  // border: "1px solid pink"
}

styles.xmleltbody = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "5px",
  borderLeft: "1px solid lightgray",
  paddingLeft: "10px",
}

styles.xmleltfooter = {
  marginLeft: "5px",
}

styles.headerelt = {
  paddingLeft: "3px",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  // border: "1px solid lightblue"
}

styles.xmleltclose = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  // border: "1px solid pink"
  // paddingLeft: "5px",
  // marginLeft: "4px",
}

styles.simplexmlelt = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row"  
}

styles.xmlopenclosetag= {
  color: "purple"
}

styles.xmlattvalue= {
  color: "darkblue"
}

styles.xmlattname= {
  color: "darkorange"
}

styles.attributes= {
display: "flex",
flexWrap: "wrap",
flexDirection: "row"
}

styles.attribute= {
  paddingLeft: "3px",
  // border: "1px solid lightblue"
}

styles.children= {
  display: "flex",
  flexDirection: "column",
  // border: "1px solid red" 
}

styles.arrowBox = {
  width: "15px",
  // height: "15px",
  // border: "1px solid lightblue",
  paddingTop: "5px",
  // paddingLeft: "2px"
}

styles.arrowRight = {
  width: "0",
  height: "0",
  borderTop: "5px solid transparent",
  borderLeft: "10px solid gray",
  borderBottom: "5px solid transparent"
} 

styles.arrowDown = {
  width: "0",
  height: "0",
  borderLeft: "5px solid transparent",
  borderRight: "5px solid transparent",
  borderTop: "10px solid gray"
}


export default styles ;
  