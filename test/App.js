import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import XmlViewer from "../lib"
import xml_exp1 from "./xml_exp.js"
import xml_exp2 from "./xml_exp2.js"

var xml_exp = [xml_exp1, xml_exp2]

const ButtonBar = ({onClickHandler}) => {
    return (
        <div>
            <button type="button" onClick={() => onClickHandler(0)}>Xml 1</button> 
            <button type="button" onClick={() => onClickHandler(1)}>Xml 2</button> 
        </div>
    )
}

function App() {

    // const [xmlFileId, setXmlFileId] = useState(0);
    const [theSrc, setTheSrc] = useState(xml_exp[0])

    function changeXmlSrc(id) {
        setTheSrc(xml_exp[id])
    }

    return (
        <div>
            <ButtonBar onClickHandler={changeXmlSrc}/>
            <XmlViewer src={theSrc}/>
        </div>
    )    
}

ReactDOM.render(<App/>, document.getElementById('root'))
