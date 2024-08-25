import React from 'react';  
import './Footer.css';
import { FaFacebook, FaTwitter, FaGooglePlusG, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {  
    return (  
        <footer>
        <div className="footer-content">
            <h3>Landing Gastro</h3>
            <p>Landing Page de Gastronomia con React creada para proyecto de Boost Soft Studio</p>
            <ul className="socials">
                    <li><a href="https://www.facebook.com/"><FaFacebook /></a></li>  
                    <li><a href="https://www.twitter.com/"><i><FaTwitter /></i></a></li>  
                    <li><a href="https://www.google.com/?hl=es"><FaGooglePlusG /></a></li>  
                    <li><a href="https://www.youtube.com/?app=desktop&hl=es"><FaYoutube /></a></li>  
                    <li><a href="https://www.linkedin.com/in/anabela-gallegos/"><FaLinkedin /></a></li>  
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright Anabela Gallegos &copy; <a href=" #">Landing Gastro</a>  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/carta">Carta</a></li>
                        <li><a href="/contacto">Contact</a></li>
                     
                      </ul>
                    </div>
        </div>

    </footer>
    );  
};  




 

export default Footer;