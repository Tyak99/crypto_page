import React from 'react';
import './transfer.css';

const Transfer = () => {
    return (
        <div className="transfer">
            <div className="transfer-header">
                <button> New transfer </button>
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
    );
}

export default Transfer;