import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './header.css';

const Header = ({active}) => {
    return ( 
        <div className="header">
            <div className='grid1'>
                <h1> {active} </h1>
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