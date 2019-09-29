import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sidebar.css';

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className="sidebar-header">
                <h4> Business Name </h4>
            </div>
            <ul className='list'>
                <li className='item'> 
                <FontAwesomeIcon icon='home' color='#42526E'/> 
                Dashboard
                </li>
                <li className='item'> 
                <FontAwesomeIcon icon='home' color='#42526E'/> 
                Balances
                </li>
                <li className='item'> 
                <FontAwesomeIcon icon='home' color='#42526E'/> 
                Payment
                </li>
                <li className='item'> 
                <FontAwesomeIcon icon='home' color='#42526E'/> 
                Dashboard
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar