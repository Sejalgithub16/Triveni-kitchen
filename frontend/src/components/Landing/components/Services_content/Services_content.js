import React from 'react'
import './Services_content.css'
const Services_content = (props) => {
  let cl=`services_content ${props.class}`
  return (
    <div className={cl}>
        <img src={props.source}/>
        <p className='services_content__about'>{props.about}</p>
        <p>{props.children}</p>
    </div>
  )
}

export default Services_content