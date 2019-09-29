import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return ( 
        <div className="header">
            <div className='grid1'>
                <h1> Balances </h1>
            </div>
            <div className="test-mode">
                <FontAwesomeIcon icon='toggle-on' color='green'/>
                <p> Test Mode </p>
            </div>
            <div className='notification'>
                <FontAwesomeIcon icon={['far', 'bell']} /> 
            </div>
           
            <div className='grid4'>
                <p> Oluwatobi Mayowa </p>
            </div>
        </div>
     );
}
 
export default Header;