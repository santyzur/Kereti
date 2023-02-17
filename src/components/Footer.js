import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container-fluid'>

      <div className="row p-5 pb-2 bg-dark text-white d-flex justify-content-around">

        <div className="col-xs-12  col-md-6 col-lg-2">
          <p className='h1 text-light'>Kereti</p>
          <p className='text-secondary'>España, Spain.</p>
        </div>
        <div className="col-xs-12  col-md-6 col-lg-2">
          <p className='h5'>Servicios</p>
          <p className='text-secondary'>Facebook Ads</p>
          <p className='text-secondary'>S.e.m</p>
          <p className='text-secondary'>S.e.o</p>
          <p className='text-secondary'>Comunity Manager</p>
          <p className='text-secondary'>Email Marketing</p>
        </div>
        <div className="col-xs-12  col-md-6 col-lg-2">
          <p className='h5'>Contacto</p>
          <a href="https:www.instagram.com/keeretii" target='_blank' className='text-secondary text-decoration-none'>Instagram</a>
        </div>

        <div className="col-xs-12">
          <p className="text-light text-center pt-4">
            Copyright - All rights reserved © 2023
          </p>
        </div>

      </div>

    </div>
  )
}

export default Footer
