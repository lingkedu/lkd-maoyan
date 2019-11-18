import React from 'react'
import './index.scss'


import { NavLink } from 'react-router-dom'

const TabBar = props => {
    const navs = [
        {
            id: 1,
            iconName: 'fa-home',
            path: '/home',
            text: "首页"
        },
        {
            id: 4,
            iconName: 'fa-file-video',
            path: '/cinema',
            text: '影院',
        },
        {
            id: 3,
            iconName: 'fa-user-secret',
            path: '/mine',
            text: '我的'
        }
    ]

    function renderNav() {
        return navs.map(item => {
            return <li key={item.id}>
                <NavLink
                    to={item.path}
                    activeClassName='active'>
                    <i className={'fas ' + item.iconName}></i>
                    <span> {item.text}</span>
                </NavLink>
            </li>
        })
    }

    return (
        <footer>
            <ul>
                {renderNav()}
            </ul>
        </footer>
    )
}


export default TabBar