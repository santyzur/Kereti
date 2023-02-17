import React, { useState } from "react"
import "./navbar.css"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar fixed-top'>
        <img src="./assets/logo.png" alt="kereti" className="logo"/>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
            <li><a href="#home" className='home linkk'>Inicio</a></li>
            <li><a href="#about" className='home linkk'>Sobre nosotros</a></li>
            <li><a href="#services" className='home linkk'>Servicios</a></li>
            <li><a href="#contact" className='home linkk'>Contacto</a></li>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar