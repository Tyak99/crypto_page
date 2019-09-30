import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import etherum from '../../assets/image/etherum.png';
import bitcoin from '../../assets/image/bitcoin.png';
import naira from '../../assets/image/nigerian-naira.png';
import './balance.css';

const Balance = () => {
    const data = [
        { currency: 'BTC', icon: bitcoin, name: 'Bitcoin', a: '10.12345678', b: '2,000,000' },
        { currency: 'ETH', icon: etherum, name: 'Ethereum', a: '10.12345678', b: '2,000,000' },
        { currency: 'NGN', icon: naira, name: 'Naira', a: '800,000' }
    ]
    return (
        <Fragment>
            <div className="balance-header">
                <p className='balance-name'> Name </p>
                <p className='balance-pending'> Pending </p>
                <p className='balance-available'> Available </p>
            </div>
            {data.map(val => {
                return (
                    <div className='data-table'>
                        <div className='balance-name'>
                        <img className="icon" src={val.icon} alt="currency-icon" />
                            <span>{val.name} </span>
                        </div>
                        <div className='balance-pending'>
                            {`${val.a} ${val.currency}`}
                            <div className='b'>{val.b && `${val.b} NGN`}  </div>
                        </div>
                        <div className='balance-available'>
                            {`${val.a} ${val.currency}`}
                            <div className='b'>{val.b && `${val.b} NGN`}  </div>
                        </div>
                    </div>
                )
            })}
        </Fragment>
    );
}

export default Balance;