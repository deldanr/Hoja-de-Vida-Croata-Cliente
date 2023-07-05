//src/components/Footer.jsx
import React from 'react';
import "../styles2.css";

import logo from '../../public/logo.png';
import face from '../img/face.svg';
import twitter from '../img/twitter.svg';
import insta from '../img/insta.svg';
import linkedin from '../img/linkedin.svg';

const Footer = () => {
  const handleClick = () => {
  // URL a la que se redirigirá al hacer clic en el botón
  const url = "https://www.flow.cl/btn.php?token=udyjpdb";

  // Abrir enlace en una nueva pestaña
  window.open(url, "_blank");
};
  return (
        <>
    <footer className="prefix---footer-wrapper">
      <div className="prefix---container-default w-container">
        <div className="prefix---footer-top-small">
          <div className="w-layout-grid prefix---grid-footer-3-cols">
            <a
              id="elemento5"
              href="#"
              className="prefix---footer-logo-wrapper w-inline-block"
              ><img
                src={logo}
                alt="Logo"
                className="prefix---footer-logo"
            /></a>
            <ul role="list" className="prefix---footer-list-wrapper-horizontal">
              <li className="prefix---footer-list-item-horizontal">
                <a href="#" className="prefix---footer-link">Home</a>
              </li>
              <li className="prefix---footer-list-item-horizontal">
                <a href="#" className="prefix---footer-link">About</a>
              </li>
              <li className="prefix---footer-list-item-horizontal">
                <a href="#" className="prefix---footer-link">Pricing</a>
              </li>
              <li className="prefix---footer-list-item-horizontal">
                <a href="#" className="prefix---footer-link">Blog</a>
              </li>
              <li className="prefix---footer-list-item-horizontal">
                <a href="#" className="prefix---footer-link">Contact</a>
              </li>
            </ul>
            <div
              className="w-layout-grid prefix---social-media-grid-right---t-center"
            >
              <a
                href="https://facebook.com/"
                className="prefix---social-icon-square-30px w-inline-block"
                ><img
                  src={face}
                  alt="Facebook" /></a
              ><a
                href="https://twitter.com/"
                className="prefix---social-icon-square-30px w-inline-block"
                ><img
                  src={twitter}
                  alt="Twitter" /></a
              ><a
                href="https://instagram.com/"
                className="prefix---social-icon-square-30px w-inline-block"
                ><img
                  src={insta}
                  alt="Instagram" /></a
              ><a
                href="https://linkedin.com/"
                className="prefix---social-icon-square-30px w-inline-block"
                ><img
                  src={linkedin}
                  alt="Linkedin"
              /></a>
            </div>
          </div>
        </div>
        <div className="prefix---footer-bottom">
          <p className="prefix---paragraph-default">
            Copyright © 2023 <a href="" className="prefix---paragraph-link"
              >Croat-IA.com</a
            > | Todos los Derechos Reservados
          </p>
        </div>
      </div>
            <div className="footer">
        <p align="center">
          <button onClick={handleClick}>DONAR</button>
        </p>
      </div>
    </footer>
          </>
    );
};

export default Footer;