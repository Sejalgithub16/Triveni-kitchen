import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__content'>
            
            
           
        
            <div className='footer__info footer__mar'>
                <p className='footer__head'>REACH US AT</p>
                <p className='footer__address'>
                Triveni Kitchen F-603, akash nidhi chsl,ramdev park road,near svp high school,Mira road,maharashtra 401107
                </p>
                <p className='footer__contact'>
                    <p>Triveni Kitchen</p>
                    <p>9028674058</p>
                </p>
            </div>
        </div>
        <div className="footer_links">
            <div className='footer__social flex-col'>
                <ul className='flex'>
                    <li><a href='https://www.instagram.com/triveninenenadgeri/'><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
                <p>©2022 Triveni Kitchen.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
