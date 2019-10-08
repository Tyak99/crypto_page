import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import business from '../../assets/image/business.png';
import { NavLink } from "react-router-dom";
import './sidebar.css';

const Sidebar = () => {
    const sidebarItem = [
        { icon: 'home', item: 'Dashboard', itemLink: '/dashboard' },
        { icon: 'wallet', item: 'Balances', itemLink: '/'},
        { icon: 'money-check', item: 'Payments', itemLink: '/payment' },
        { icon: 'angle-double-right', item: 'Transfers', itemLink: '/transfers'},
        { icon: 'code', item: 'Developers', itemLink: '/developers' },
        { icon: 'cog', item: 'Settings', itemLink: '/settings' }
    ]
    return (
        <aside className='sidebar'>
            <div className="sidebar-header">
                <img src={business} alt="business logo" />
                <h4> Business name <span>  <FontAwesomeIcon icon='angle-down' /> </span></h4>
               
            </div>
            <ul className='list'>
                {sidebarItem.map(data => {
                    return (
                        <NavLink exact to={`${data.itemLink}`} activeClassName='active'>
                            <li className='item'>
                                <FontAwesomeIcon icon={data.icon} color='#42526E' />
                                <span> {data.item} </span>
                            </li>
                        </NavLink>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar