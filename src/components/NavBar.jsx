import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
 
import logo from '../../public/logo.png';
import face from '../img/face.svg';
import twitter from '../img/twitter.svg';
import insta from '../img/insta.svg';
import linkedin from '../img/linkedin.svg';
import mail from '../img/mail.svg';
import youtube from '../img/youtube.svg';
import arrow from '../img/arrow.svg';

import "../styles2.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  return (
    <>
      <section>
        <div className="wf-section">
          <nav>
            <div className="prefix---header-wrapper w-nav">
              <div className="prefix---container-default w-container">
                <div className="prefix---mg-bottom-24px---0-on-tablet">
                  <div className="prefix---header-content-wrapper">
                    <div className="prefix---header-right-col-hidden-on-tablet">
                      <a
                        href="mailto:deldanr@gmail.com"
                        className="prefix---link-wrapper w-inline-block"
                      >
                        <img
                          src={mail}
                          loading="lazy"
                          alt="Email"
                          className="prefix---link-icon-left"
                        />
                        <div className="prefix---link-text">contacto@croat-ia.com</div>
                      </a>
                    </div>
                    <div className="prefix---header-middle-col">
                      <a href="/" aria-current="page" className="prefix---header-logo-link w-nav-brand w--current">
                        <img
                          src={logo}
                          alt="Logo"
                          className="prefix---header-logo"
                        />
                      </a>
                    </div>
                    <div className="prefix---header-left-col-top">
                      <div className="prefix---hamburger-menu-wrapper w-nav-button">
                        <div
                          style={{
                            transform: "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                          }}
                          className="prefix---hamburger-menu-bar-top"
                        ></div>
                        <div
                          style={{
                            transform: "translate3d(0, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                          }}
                          className="prefix---hamburger-menu-bar-bottom"
                        ></div>
                      </div>
                      <div className="prefix---hidden-on-mbl">
                        <div className="prefix---social-media-flex-right">
                          <div className="prefix---mg-left-12px">
                            <a
                              href="https://facebook.com/"
                              className="prefix---social-icon-square-30px w-inline-block"
                            >
                              <img src={face} alt="Facebook" />
                            </a>
                          </div>
                          <div className="prefix---mg-left-12px">
                            <a
                              href="https://twitter.com/"
                              className="prefix---social-icon-square-30px w-inline-block"
                            >
                              <img src={twitter} alt="Twitter" />
                            </a>
                          </div>
                          <div className="prefix---mg-left-12px">
                            <a
                              href="https://instagram.com/"
                              className="prefix---social-icon-square-30px w-inline-block"
                            >
                              <img src={insta} alt="Instagram" />
                            </a>
                          </div>
                          <div className="prefix---mg-left-12px">
                            <a
                              href="https://linkedin.com/"
                              className="prefix---social-icon-square-30px w-inline-block"
                            >
                              <img src={linkedin} alt="Linkedin" />
                            </a>
                          </div>
                          <div className="prefix---mg-left-12px">
                            <a
                              href="https://youtube.com/"
                              className="prefix---social-icon-square-30px w-inline-block"
                            >
                              <img src={youtube} alt="YouTube" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="prefix---flex-center">
                  <div className="prefix---header-right-col">
                    <nav role="navigation" className="prefix---header-menu-wrapper w-nav-menu">
                      <ul role="list" className="prefix---header-nav-menu-list">
                        <li className="prefix---header-nav-list-item-middle">
                          <NavLink
                            exact="true"
                            to="/"
                            activeclassname="active"
                            className="prefix---header-nav-link w-nav-link"
                            onClick={handleLinkClick}
                            role="menuitem"
                          >Inicio</NavLink>
                        </li>
                        <li className="prefix---header-nav-list-item-middle">
                          <NavLink
                            exact="true"
                            to="/nosotros"
                            activeclassname="active"
                            className="prefix---header-nav-link w-nav-link"
                            onClick={handleLinkClick}
                            role="menuitem"
                          >Nosotros</NavLink>                      </li>
                        <li className="prefix---header-nav-list-item-middle">
                          <div
                            data-hover="true"
                            data-delay="0"
                            data-w-id="elemento9"
                            className="prefix---dropdown-wrapper w-dropdown"
                          >
                            <div className="prefix---dropdown-toggle w-dropdown-toggle">
                              <div>Servicios</div>
                              <img
                                src={arrow}
                                style={{
                                  transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0deg) skew(0, 0)",
                                }}
                                alt="Arrow"
                                className="prefix---dropdown-chevron"
                              />
                            </div>
                            <nav className="prefix---dropdown-column-wrapper w-dropdown-list">
                              <div
                                data-w-id="elementof"
                                style={{
                                  display: "none",
                                  height: "0px",
                                  opacity: 0,
                                  transform: "translate3d(null, 10px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                                }}
                                className="prefix---dropdown-card"
                              >
                                <div className="prefix---dropdown-pd">
                                  <div className="w-layout-grid prefix---dropdown-links-grid">
                                    <a
                                      href="#"
                                      className="prefix---dropdown-link w-dropdown-link"
                                    >
                                      Mobile app
                                    </a>
                                    <a
                                      href="#"
                                      className="prefix---dropdown-link w-dropdown-link"
                                    >
                                      Desktop app
                                    </a>
                                    <a
                                      href="#"
                                      className="prefix---dropdown-link w-dropdown-link"
                                    >
                                      Multiple users
                                    </a>
                                    <a
                                      href="#"
                                      className="prefix---dropdown-link w-dropdown-link"
                                    >
                                      Integrations
                                    </a>
                                    <a
                                      href="#"
                                      className="prefix---dropdown-link w-dropdown-link"
                                    >
                                      Monthly reports
                                    </a>
                                    <a
                                      href="#"
                                      className="prefix---dropdown-link w-dropdown-link"
                                    >
                                      Granular permissions
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </nav>
                          </div>
                        </li>
                        <li className="prefix---header-nav-list-item-middle">
                          <NavLink
                            exact="true"
                            to="/formulario"
                            activeclassname="active"
                            className="prefix---header-nav-link w-nav-link"
                            onClick={handleLinkClick}
                            role="menuitem"
                          >Formulario</NavLink>                      </li>
                        <li className="prefix---header-nav-list-item-middle">
                          <a href="#" className="prefix---header-nav-link w-nav-link">Pricing</a>
                        </li>
                        <li className="prefix---header-nav-list-item-middle">
                          <NavLink
                            exact="true"
                            to="/contacto"
                            activeclassname="active"
                            className="prefix---header-nav-link w-nav-link"
                            onClick={handleLinkClick}
                            role="menuitem"
                          >Contacto</NavLink>                         </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/*  <script src="./script1.js" type="text/javascript"></script>*/}
      </section>
    </>

  );
};

export default NavBar;
