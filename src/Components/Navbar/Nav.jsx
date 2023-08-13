import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div className='header'>
      <Link to="/" style={{textDecoration:"none",color:"#fff"}}>
        <h1 >Just shop</h1>
        </Link>
        <Link to='/logout'>
        <button className='log-btn'>Logout</button>
        </Link>
    </div>
  )
}

export default Nav