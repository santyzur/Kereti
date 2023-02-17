import React from 'react'
import './Banner.css'

const Banner2 = () => {
  return (
    <section className="banner animate__animated animate__fadeInUp" id="homme">
        <div className='container banner-container'>
            <div className='row align-items-center'>
                <div className='col' xs={12} md={6} xl={7}>
                    <span className='tagline'>Nuestros clientes</span>
                    <h1>Relaciones con nuestros clientes</h1>
                    <p>Creemos en la creación de relaciones a largo plazo con nuestros clientes y nos comprometemos a ofrecer el máximo nivel de servicio y resultados. Póngase en contacto con nosotros hoy mismo para obtener más información sobre cómo podemos ayudarle a hacer crecer su negocio y triunfar en el mercado digital actual.</p>
                </div>
                <div className='col two' xs={12} md={6} xl={5}>
                    <img src="./assets/phone.png" style={{width: '400px'}}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner2;
