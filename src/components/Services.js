import React from 'react'
import Cards from './Cards'
import './Services.css'

const Services = () => {
  return (
    <div className='container services' id='services'>
        <div className="top">
            <h2>Nuestros servicios</h2>
            <p>Te ofrecemos la mejor variedad de servicios para que tu empresa crezca potencialmente.</p>
        </div>
        <div className="down">
            <Cards/>
        </div>
    </div>
  )
}

export default Services
