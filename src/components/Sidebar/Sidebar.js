import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import business from '../../assets/image/business.png';
import './sidebar.css';

const Sidebar = () => {
    const sidebarItem = [
        { icon: 'home', item: 'Dashboard' },
        { icon: 'wallet', item: 'Balances' },
        { icon: 'money-check', item: 'Payments' },
        { icon: 'angle-double-right', item: 'Transfers' },
        { icon: 'code', item: 'Developers' },
        { icon: 'cog', item: 'Settings' }
    ]
    return (
        <aside className='sidebar'>
            <div className="sidebar-header">
                <img src={business} alt="business logo" />
                <h4> Business name </h4>
            </div>
            <ul className='list'>
                {sidebarItem.map(data => {
                    return <li className='item'>
                        <FontAwesomeIcon icon={data.icon} color='#42526E' />
                        <span> {data.item} </span>

                    </li>
                })}
            </ul>
        </aside>
    )
}

export default Sidebar