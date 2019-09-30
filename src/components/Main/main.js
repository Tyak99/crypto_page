import React from 'react';
import './main.css';
import Header from '../Header/Header'
import Balance from '../Balance/Balance';

const Main = () => {
    return (
        <div className='main'>
            <Header />
            <Balance />
        </div>
    )
}

export default Main