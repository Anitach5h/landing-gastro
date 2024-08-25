import React from 'react';  
import './Modal.css';  

const Modal = ({ message, onClose }) => {  
    return (  
        <div className="modal">  
            <div className="modal-content">  
                <span className="close" onClick={onClose}>&times;</span>  
                <p>{message}</p>  
                <button className="button" onClick={onClose}>Aceptar</button>  
            </div>  
        </div>  
    );  
};  

export default Modal;
