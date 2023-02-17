import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <section className="banner animate__animated animate__fadeInUp" id="homme">
        <div className='container banner-container'>
            <div className='row align-items-center'>
                <div className='col' xs={12} md={6} xl={7}>
                    <span className='tagline'>Bienvenido a Kereti!</span>
                    <h1>Crecimiento de <span>pequeñas empresas</span> a través del <span>marketing digital</span></h1>
                    <p>Bienvenido a <span>Kereti</span> una agencia de marketing digital de primer nivel. Ayudamos a empresas como la tuya a aumentar su presencia en Internet y a llegar a su publico objetivo mediante estrategias eficaces de marketing.</p>
                </div>
                <div className='col two' xs={12} md={6} xl={5}>
                    <img src="./assets/ipad.png" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
