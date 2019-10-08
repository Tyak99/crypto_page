import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import business from '../../assets/image/business.png';
import { Link } from "react-router-dom";
import './sidebar.css';

const Sidebar = () => {
    const sidebarItem = [
        { icon: 'home', item: 'Dashboard', itemLink: '/' },
        { icon: 'wallet', item: 'Balances', itemLink: '/'},
        { icon: 'money-check', item: 'Payments', itemLink: '/' },
        { icon: 'angle-double-right', item: 'Transfers', itemLink: '/transfers'},
        { icon: 'code', item: 'Developers', itemLink: '/' },
        { icon: 'cog', item: 'Settings', itemLink: '/' }
    ]
    return (
        <aside className='sidebar'>
            <div className="sidebar-header">
                <img src={business} alt="business logo" />
                <h4> Business name </h4>
            </div>
            <ul className='list'>
                {sidebarItem.map(data => {
                    return (
                        <Link to={`${data.itemLink}`}>
                            <li className='item'>
                                <FontAwesomeIcon icon={data.icon} color='#42526E' />
                                <span> {data.item} </span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar