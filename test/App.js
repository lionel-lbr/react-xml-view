import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import XmlViewer from "../lib/XmlViewer.js"
import xml_exp from "./xml_exp.js"


class App extends React.Component {
    render() {
        return (
            <div>
                <XmlViewer src={xml_exp}/>
                {/* <h1>Hello world</h1> */}
            </div>
        )
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('root'))
