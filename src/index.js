import React from 'react';
import ReactDOM from "react-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/main';
import Header from './components/Header/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faBell } from "@fortawesome/free-regular-svg-icons";

library.add(faHome, faBell, faToggleOn)

const App = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            {/* <Header /> */}
            <Main />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("app"));