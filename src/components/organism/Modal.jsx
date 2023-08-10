import React, { useState } from 'react';
import '../styles/Modal.css';


function Modal({ isOpen, onClose }) {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes realizar alguna acción con el valor del input, como enviarlo a una API o procesarlo de alguna manera.
      console.log('Valor del input:', inputValue);
      // Cerrar el modal después de realizar alguna acción.
      onClose();
    };
  
    if (!isOpen) return null;


    return ( 
        <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <form onSubmit={handleFormSubmit}>
            <label>
              Ingresa algo:
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
}

export default Modal;