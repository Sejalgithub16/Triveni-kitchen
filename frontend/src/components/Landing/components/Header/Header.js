import React from 'react'
import header from '../../assets/images/header-food.png'
import Button from '../Button/Button'
import './Header.css'
import {useHistory} from 'react-router-dom'
const Header = () => {
  const history=useHistory();
  const handleClick=()=>{
    history.push("/home");
  }
  
  return (
    <div className='header' id='home'>
        <img className='header__image' src={header} />
        <div className='header__content'>
            <h1>EAT<br/>HEALTHY<br/>BE HEALTHY</h1>
            <p></p>
            <Button text='Order Now' onClick={handleClick} ></Button>
        </div>
    </div>
  )
}

export default Header