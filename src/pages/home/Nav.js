import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = props => {
  return (
    <div className='nav'>
      <NavLink to='/City' activeClassName="active">
      <span> 杭州 </span>
      <i className="fas fa-caret-down"></i>
      </NavLink>
      <NavLink to='/home/hot' activeClassName="active">正在热映</NavLink>
      <NavLink to='/home/comming' activeClassName="active">即将上映</NavLink>
      <NavLink to='/Search' activeClassName="active">
      <i className="fas fa-search"></i>
      </NavLink>
    </div>
  )
}

export default Nav