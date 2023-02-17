import React from 'react'
import Form from './Form'
import './Contact.css'

const Contact = () => {
  return (
    <div id='contact'>
      <div className="container contact-container">
        <h2>Contactanos!</h2>
        <p>Contactanos para cualquier duda o consulta que tengas.</p> 
      </div> 
      <Form/>
    </div>
  )
}

export default Contact
