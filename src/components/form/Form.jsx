import React from 'react';  
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';  
import './Form.css';  

const Form = () => {  
  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Dejo para colocar el codigo para el envio del formulario 
    alert('Mensaje enviado.');  
  };  

  const openWhatsApp = () => {  
    const phoneNumber = '5492241581975'; 
    const message = 'Hola, tengo una consulta.'; 
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');  
  };  

  const openInstagram = () => {  
    window.open(`https://instagram.com/anitach5h`, '_blank');  
  };  

  const openLinkedIn = () => {  
    const linkedinProfileURL = 'https://www.linkedin.com/in/anabela-gallegos';  
    window.open(linkedinProfileURL, '_blank');  
  };  

  return (  
    <div className="container-form">  
      <div id="login-box">  
        <form onSubmit={handleSubmit} className="left-box">  
          <h1>Envíanos un mensaje</h1>  
          <input type="text" name="name" placeholder="Nombre" required />  
          <input type="email" name="email" placeholder="Email" required />  
          <input type="tel" name="phone" placeholder="Teléfono" required />  
          <textarea name="message" placeholder="Déjanos tu mensaje" rows="10" required></textarea>  
          <input type="submit" name="submit" value="Enviar" />  
        </form>  
        <div className="right-box">  
          <span className="signinwith">Contáctanos por:</span>  
          <div className="social-buttons">  
            <button className="social whatsapp" onClick={openWhatsApp}>  
              <FaWhatsapp /> WhatsApp  
            </button>  
            <button className="social instagram" onClick={openInstagram}>  
              <FaInstagram /> Instagram  
            </button>  
            <button className="social linkedin" onClick={openLinkedIn}>  
              <FaLinkedin /> LinkedIn  
            </button>  
          </div>  
        </div>  
      
      </div>  
    </div>  
  );  
};  

export default Form;