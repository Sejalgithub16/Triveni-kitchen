import React from 'react'
import './Services.css'
import Service1 from '../../assets/images/customer-service.png'
import Service2 from '../../assets/images/fast-delivery.png'
import Service3 from '../../assets/images/food.png'
import Services_content from '../Services_content/Services_content'
const Services = () => {
  return (
    <div className='services' id='services'>
        <h1>OUR SERVICES</h1>
        <div className='services__content'>
            <Services_content source={Service1} about='24/7 Services' class='mar'></Services_content>
            <Services_content source={Service2} about='Fast Delivery' class='maar'></Services_content>
            <Services_content source={Service3} about='Delicious Food'></Services_content>
        </div>
    </div>
  )
}

export default Services