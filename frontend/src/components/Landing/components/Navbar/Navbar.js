import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav__logo'>
            <i class="fa-solid fa-burger"></i>
            <p>Triveni Kitchen</p>
        </div>
        <ul className='nav__bar'>
            <li className='nav__items'><a href='#home'>Home</a></li>
            <li className='nav__items'><a href='#about'>About</a></li>
            <li className='nav__items'><a href='#services'>Services</a></li>
        </ul>
    </div>
  )
}

export default Navbar