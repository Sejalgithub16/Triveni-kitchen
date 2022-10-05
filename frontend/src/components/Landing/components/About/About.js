import React from 'react'
import './About.css'
import aboutimg from '../../assets/images/about-img.png'
import Button from '../Button/Button'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about__content'>
            <h1>About us</h1>
            <p>Do you miss your home food, the taste that you have grown up on? Your search ends here.

At Triveni's Kitchen, you choose your favourite delicacies from your native cuisine And Enjoy sumptuous homemade food with Triveni's Kitchen, a taste of home.</p>
           
        </div>
        <img src={aboutimg} />
    </div>
  )
}

export default About