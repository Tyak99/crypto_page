import React from 'react';
import ReactDOM from "react-dom";
import Sidebar from './components/Sidebar/Sidebar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faToggleOn, faCog, faWallet, faCode, faMoneyCheck, faAngleDoubleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons'
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Balance from './components/Balance/Balance'
import Transfer from './components/Transfer/Transfer'


library.add(
    faHome,
    faBell, 
    faToggleOn, 
    faBitcoin, 
    faEthereum, 
    faAngleDown,
    faCog, 
    faWallet, 
    faCode, 
    faMoneyCheck, 
    faAngleDoubleRight)

const App = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{flex: 3, marginLeft: '4rem'}}>
                <Switch>
                    <Route path='/' exact component={Balance}/>
                    <Route path='/transfers' component={Transfer} />
                    <Route render={() => <h2 style={{textAlign: 'center'}}> Sorry :( This page does not exist </h2>}/>
                </Switch>
            </div>
        </div>
    )
}


ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>, document.getElementById("app"));