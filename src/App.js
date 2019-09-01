import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import XmlViewer from "./XmlViewer.js"
import manifest from "./manifest_exp.js"
import xml_exp from "./xml_exp.js"


class App extends React.Component {
    render() {
        return (
            <div>
                <XmlViewer src={xml_exp}/>
            </div>
        )
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('root'))
