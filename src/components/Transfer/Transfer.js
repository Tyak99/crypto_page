import React, { Fragment } from 'react';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './transfer.css';

const Transfer = () => {
    return (
        <Fragment>
            <Header active='Transfers' />
            <div className="transfer">
                <div className="transfer-header">
                    <button> New transfer <span> <FontAwesomeIcon icon='angle-down' /> </span></button>
                </div>
                <div className="transfer-title">
                    <h4 className='ref'> Reference </h4>
                    <h4 className='status'> Status </h4>
                    <h4 className='amount'> Amount </h4>
                </div>
                <div className="transfer-body">
                    <h3> You haven't made any transfers yet </h3>
                    <p> Your tranfers will be displayed here </p>
                </div>
            </div>
        </Fragment>
    );
}

export default Transfer;