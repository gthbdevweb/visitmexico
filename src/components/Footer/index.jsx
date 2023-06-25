import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer-ctn">
      <div className="footer-contact-ctn">
        <div className='footer-text-ctn'>
          <h5 className='footer-title'>Marca Registrada</h5>
          <p className="footer-text">México®</p>
          <p className="footer-text">visitmexico.com®</p>
          <p className="footer-text">visitmexico®</p>
          <p className="footer-text">Pueblos Mágicos®</p>
          <p className="footer-text">Atención al Turista 078®</p>
        </div>
        <div className='footer-text-ctn'>
          <h5 className='footer-title'>Legal</h5>
          <Link to='/aviso-de-privacidad'>
            <p className="footer-text">Aviso de privacidad</p>
          </Link>
        </div>
        <div className='footer-text-ctn'>
          <h5 className='footer-title'>Contacto</h5>
          <a className="footer-text" href="tel:078">Atención al turista 078</a>
          <a className="footer-text" href="mailto:contacto@sectur.gob.mx">contacto@sectur.gob.mx</a>
          <a className="footer-text" href="mailto:contacto@sectur.gob.mx">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
            </svg>
          </a>
        </div>
      </div>
      <div className='footer-bottom-ctn'>
        <p>Marcas Registradas a favor de la Secretaría de Turismo del Gobierno de México.</p>
      </div>
    </footer>
  )
};

export default Footer;
