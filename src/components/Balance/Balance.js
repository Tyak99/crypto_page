import React, { Fragment } from 'react';
import etherum from '../../assets/image/etherum.png';
import bitcoin from '../../assets/image/bitcoin.png';
import naira from '../../assets/image/nigerian-naira.png';
import Header from '../Header/Header'
import './balance.css';

const Balance = () => {
    
    const data = [
        { currency: 'BTC', icon: bitcoin, name: 'Bitcoin', curr1: '10.12345678', curr2: '2,000,000' },
        { currency: 'ETH', icon: etherum, name: 'Ethereum', curr1: '10.12345678', curr2: '2,000,000' },
        { currency: 'NGN', icon: naira, name: 'Naira', curr1: '800,000' }
    ]
    return (
        <Fragment>
            <Header active='Balances'/>
            <div className="balance-header">
                <p className='balance-name'> Name </p>
                <p className='balance-pending'> Pending </p>
                <p className='balance-available'> Available </p>
            </div>
            {data.map(value => {
                return (
                    <div className='data-table'>
                        <div className='balance-name'>
                        <img className="icon" src={value.icon} alt="currency-icon" />
                            <span>{value.name} </span>
                        </div>
                        <div className='balance-pending'>
                            {`${value.curr1} ${value.currency}`}
                            <div className='b'>{value.curr2 && `${value.curr2} NGN`}  </div>
                        </div>
                        <div className='balance-available'>
                            {`${value.curr1} ${value.currency}`}
                            <div className='b'>{value.curr2 && `${value.curr2} NGN`}  </div>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    );
}

export default Balance;