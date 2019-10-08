import React from 'react';
import './main.css';
import Header from '../Header/Header'
import Balance from '../Balance/Balance';
import { Route, Switch } from "react-router-dom";
import Transfer from '../Transfer/Transfer';

const Main = () => {
    return (
        <div className='main'>
            <Header />
            <Switch>
                <Route path='/' exact component={Balance}/>
                <Route path='/transfers' component={Transfer} />
            </Switch>
        </div>
    )
}

export default Main