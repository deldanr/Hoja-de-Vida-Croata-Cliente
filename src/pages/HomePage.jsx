//src/pages/HomePage.jsx
import React from 'react';
import "./styles3.css";
import "../styles2.css";

import circleCheck from '../img/circle-check.svg';
import contact from '../img/contact.svg';
import nose from '../img/nose.svg';
import fondo1 from '../img/fondo1.svg';
import face from '../img/face.svg';
import twitter from '../img/twitter.svg';
import insta from '../img/insta.svg';
import linkedin from '../img/linkedin.svg';

// Nuevas imágenes
import arrow from '../img/arrow.svg';
import blob from '../img/blob.svg';
import estrella from '../img/estrella.svg';
import flecha from '../img/flecha.svg';
import flecha2 from '../img/flecha2.svg';
import mail from '../img/mail.svg';
import youtube from '../img/youtube.svg';

// Imágenes en formato PNG
import laptop500 from '../img/laptop500.png';
import laptop800 from '../img/laptop800.png';
import laptop1080 from '../img/laptop1080.png';
import laptop1600 from '../img/laptop1600.png';
import laptopplus from '../img/laptopplus.png';

const HomePage = () => {
  return (
    <div className="App">
      <div className="container2">
      <div className="prefix---section-hero-top-small2 wf-section2">
        <div className="prefix---container-default2 w-container2">
          <div
            style={{
              WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MsTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 100,
            }}
            className="prefix---inner-container-574px---center"
            data-w-id="elemento00f"
          >
            <div className="prefix---text-center">
              <div className="prefix---color-neutral-802">
                <h1 className="prefix---heading-h1-size">
                  Lleva la Toma de Decisiones al siguiente nivel
                </h1>
              </div>
              <div className="prefix---mg-bottom-40px">
                <div className="prefix---color-neutral-600">
                  <p className="prefix---paragraph-default">
                    Simplifica la Toma de Decisiones con nuestra plataforma NOMBRE
                    de fácil uso y mejora el éxito de tus proyectos
                  </p>
                </div>
              </div>
              <div className="prefix---buttons-row-center">
                <div className="prefix---button-row-left">
                  <a href="#" className="prefix---btn-primary w-button"
                  >Comienza tu prueba gratuita</a
                  >
                </div>
                <a href="#" className="prefix---btn-secondary w-button"
                >Quiero saber más</a
                >
              </div>
            </div>
          </div>
          <img
            src={laptopplus}
            sizes="100vw"
            style={{
              WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MsTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 100,
            }}
            srcSet={`
        ${laptop500}   500w,
        ${laptop800}   800w,
        ${laptop1080} 1080w,
        ${laptop1600} 1600w,
        ${laptopplus}  2618w
      `}
            alt="Laptop"
            className="prefix---mg-top-80px"
          />
        </div>
        <div
          style={{ opacity: 100 }}
          className="prefix---floating-image-hero-v6---1"
        >
          <img
            src={blob}
            alt=""
            className="prefix---opacity-10"
          />
        </div>
      </div>

      <div className="prefix---section wf-section">
      <div className="prefix---container-default w-container">
        <div className="prefix---mg-bottom-48px">
          <div
            data-w-id="elemento1ba"
            style={{
  WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MsTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  opacity: 1,
}}
            className="prefix---inner-container-640px---center"
          >
            <div className="prefix---text-center">
              <div className="prefix---mg-bottom-16px">
                <div className="prefix---subtitle">NUESTRO PROCESO</div>
              </div>
              <div className="prefix---mg-bottom-12px">
                <div className="prefix---color-neutral-803">
                  <h2 className="prefix---heading-h2-size">
                    Tomar Decisiones es tan fácil como 1, 2, 3
                  </h2>
                </div>
              </div>
              <div className="prefix---color-neutral-600">
                <p className="prefix---paragraph-default">
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                  sit phasellus mollis sit aliquam sit nullam neque ultrices
                  dolor sit amet conset.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="elemento1c6"
          style={{
  WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MsTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  opacity: 1,
}}
          className="w-layout-grid prefix---3-columns-1-col-tablet"
        >
          <div className="prefix---content-center-card">
            <div className="prefix---circle-number">
              <div className="prefix---heading-h1-size---mg-0">1</div>
            </div>
            <div className="prefix---mg-bottom-8px">
              <div className="prefix---color-neutral-803">
                <h3 className="prefix---heading-h3-size">Crear un Proyecto</h3>
              </div>
            </div>
            <div className="prefix---color-neutral-600">
              <p className="prefix---paragraph-default">
                Identifica en relación a qué vas a tomar una decisión.
                <em>Por ejemplo: Contratar a un nuevo empleado.</em>
              </p>
            </div>
          </div>
          <div className="prefix---content-center-card">
            <div className="prefix---circle-number">
              <div className="prefix---heading-h1-size---mg-0">2</div>
            </div>
            <div className="prefix---mg-bottom-8px">
              <div className="prefix---color-neutral-803">
                <h3 className="prefix---heading-h3-size">Establece los criterios</h3>
              </div>
            </div>
            <div className="prefix---color-neutral-600">
              <p className="prefix---paragraph-default">
                Determina que aspectos son relevantes para tomar la decisión.
                <em
                  >Por ejemplo: años de experiencia, formación académica, manejo
                  de idiomas, referencias, etc.</em
                >
              </p>
            </div>
          </div>
          <div className="prefix---content-center-card">
            <div className="prefix---circle-number">
              <div className="prefix---heading-h1-size---mg-0">3</div>
            </div>
            <div className="prefix---mg-bottom-8px">
              <div className="prefix---color-neutral-803">
                <h3 className="prefix---heading-h3-size">Crea tu</h3>
              </div>
            </div>
            <div className="prefix---color-neutral-600">
              <p className="prefix---paragraph-default">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalar consectur elementum tempus hac.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="prefix---section-overflow-hidden wf-section">
      <h2 className="prefix---heading-h2-size">Get started as easy as 1, 2, 3</h2>
      <div className="prefix---container-default w-container">
        <div
          data-delay="4000"
          data-animation="slide"
          className="prefix---slider-wrapper w-slider"
          data-autoplay="false"
          data-easing="ease"
          style={{opacity: 1}}
          data-hide-arrows="true"
          data-disable-swipe="false"
          data-w-id="elemento2"
          data-autoplay-limit="0"
          data-nav-spacing="3"
          data-duration="500"
          data-infinite="true"
        >
          <div className="prefix---slider-mask-width-390px w-slider-mask">
            <div className="prefix---slide-item-mg w-slide">
              <div className="prefix---card-testimonial-v13">
                <img
                  src={estrella}
                  alt="Stars"
                  className="prefix---mg-bottom-24px"
                />
                <div className="prefix---mg-bottom-24px">
                  <div className="prefix---color-neutral-600">
                    <p className="prefix---paragraph-default">
                      “Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas pharetraol quis
                      pharetra arcu pharetra blandit.”
                    </p>
                  </div>
                </div>
                <div className="prefix---flex-horizontal">
                  <div>
                    <div className="prefix---mg-bottom-8px">
                      <div className="prefix---color-neutral-804">
                        <h3 className="prefix---heading-h4-size">John Carter</h3>
                      </div>
                    </div>
                    <div className="prefix---color-accent-1">
                      <div className="prefix---text-200">
                        Designer at BRIX Templates
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prefix---slide-item-mg w-slide">
              <div className="prefix---card-testimonial-v13">
                <img
                  src={estrella}
                  alt="Stars"
                  className="prefix---mg-bottom-24px"
                />
                <div className="prefix---mg-bottom-24px">
                  <div className="prefix---color-neutral-600">
                    <p className="prefix---paragraph-default">
                      “Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas pharetraol quis
                      pharetra arcu pharetra blandit.”
                    </p>
                  </div>
                </div>
                <div className="prefix---flex-horizontal">
                  <div>
                    <div className="prefix---mg-bottom-8px">
                      <div className="prefix---color-neutral-804">
                        <h3 className="prefix---heading-h4-size">Sophie Moore</h3>
                      </div>
                    </div>
                    <div className="prefix---color-accent-1">
                      <div className="prefix---text-200">Head of Marketing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prefix---slide-item-mg w-slide">
              <div className="prefix---card-testimonial-v13">
                <img
                  src={estrella}
                  alt="Stars"
                  className="prefix---mg-bottom-24px"
                />
                <div className="prefix---mg-bottom-24px">
                  <div className="prefix---color-neutral-600">
                    <p className="prefix---paragraph-default">
                      “Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas pharetraol quis
                      pharetra arcu pharetra blandit.”
                    </p>
                  </div>
                </div>
                <div className="prefix---flex-horizontal">
                  <div>
                    <div className="prefix---mg-bottom-8px">
                      <div className="prefix---color-neutral-804">
                        <h3 className="prefix---heading-h4-size">Matt Cannon</h3>
                      </div>
                    </div>
                    <div className="prefix---color-accent-1">
                      <div className="prefix---text-200">Lead Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prefix---slide-item-mg w-slide">
              <div className="prefix---card-testimonial-v13">
                <img
                  src={estrella}
                  alt="Stars"
                  className="prefix---mg-bottom-24px"
                />
                <div className="prefix---mg-bottom-24px">
                  <div className="prefix---color-neutral-600">
                    <p className="prefix---paragraph-default">
                      “Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas pharetraol quis
                      pharetra arcu pharetra blandit.”
                    </p>
                  </div>
                </div>
                <div className="prefix---flex-horizontal">
                  <div>
                    <div className="prefix---mg-bottom-8px">
                      <div className="prefix---color-neutral-804">
                        <h3 className="prefix---heading-h4-size">Andy Smith</h3>
                      </div>
                    </div>
                    <div className="prefix---color-accent-1">
                      <div className="prefix---text-200">Vp of Marketing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prefix---slide-item-mg w-slide">
              <div className="prefix---card-testimonial-v13">
                <img
                  src={estrella}
                  alt="Stars"
                  className="prefix---mg-bottom-24px"
                />
                <div className="prefix---mg-bottom-24px">
                  <div className="prefix---color-neutral-600">
                    <p className="prefix---paragraph-default">
                      “Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas pharetraol quis
                      pharetra arcu pharetra blandit.”
                    </p>
                  </div>
                </div>
                <div className="prefix---flex-horizontal">
                  <div>
                    <div className="prefix---mg-bottom-8px">
                      <div className="prefix---color-neutral-804">
                        <h3 className="prefix---heading-h4-size">John Carter</h3>
                      </div>
                    </div>
                    <div className="prefix---color-accent-1">
                      <div className="prefix---text-200">
                        Designer at BRIX Templates
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prefix---slide-item-mg w-slide">
              <div className="prefix---card-testimonial-v13">
                <img
                  src={estrella}
                  alt="Stars"
                  className="prefix---mg-bottom-24px"
                />
                <div className="prefix---mg-bottom-24px">
                  <div className="prefix---color-neutral-600">
                    <p className="prefix---paragraph-default">
                      “Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas pharetraol quis
                      pharetra arcu pharetra blandit.”
                    </p>
                  </div>
                </div>
                <div className="prefix---flex-horizontal">
                  <div>
                    <div className="prefix---mg-bottom-8px">
                      <div className="prefix---color-neutral-804">
                        <h3 className="prefix---heading-h4-size">Sophie Moore</h3>
                      </div>
                    </div>
                    <div className="prefix---color-accent-1">
                      <div className="prefix---text-200">Head of Marketing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prefix---slide-item-mg w-slide">
              <div className="prefix---card-testimonial-v13">
                <img src={estrella}
                  alt="Stars"
                  className="prefix---mg-bottom-24px"
                />
                <div className="prefix---mg-bottom-24px">
                  <div className="prefix---color-neutral-600">
                    <p className="prefix---paragraph-default">
                      “Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas pharetraol quis
                      pharetra arcu pharetra blandit.”
                    </p>
                  </div>
                </div>
                <div className="prefix---flex-horizontal">
                  <div>
                    <div className="prefix---mg-bottom-8px">
                      <div className="prefix---color-neutral-804">
                        <h3 className="prefix---heading-h4-size">Matt Cannon</h3>
                      </div>
                    </div>
                    <div className="prefix---color-accent-1">
                      <div className="prefix---text-200">Lead Developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="prefix---slide-item-mg w-slide">
              <div className="prefix---card-testimonial-v13">
                <img
                  src={estrella}
                  alt="Stars"
                  className="prefix---mg-bottom-24px"
                />
                <div className="prefix---mg-bottom-24px">
                  <div className="prefix---color-neutral-600">
                    <p className="prefix---paragraph-default">
                      “Lorem ipsum dolor sit amet conse ctetur adipiscing lectus
                      a nunc mauris scelerisque sed egestas pharetraol quis
                      pharetra arcu pharetra blandit.”
                    </p>
                  </div>
                </div>
                <div className="prefix---flex-horizontal">
                  <div>
                    <div className="prefix---mg-bottom-8px">
                      <div className="prefix---color-neutral-804">
                        <h3 className="prefix---heading-h4-size">Andy Smith</h3>
                      </div>
                    </div>
                    <div className="prefix---color-accent-1">
                      <div className="prefix---text-200">Vp of Marketing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="prefix---btn-slider-arrow-left---testimonial-v12 w-slider-arrow-left"
          >
            <img
              src={flecha2}
              loading="lazy"
              alt="Icon"
            />
          </div>
          <div
            className="prefix---btn-slider-arrow-right---testimonial-v12 w-slider-arrow-right"
          >
            <img
              src={flecha}
              loading="lazy"
              alt="Icon"
            />
          </div>
          <div className="prefix---hidden-desktop w-slider-nav w-round"></div>
        </div>
      </div>
    </div>

      <div className="prefix---cta-section wf-section">
      <div className="prefix---z-index-1">
        <div className="prefix---container-default w-container">
          <div className="prefix---inner-container-600px---center">
            <div className="prefix---text-center">
              <div className="prefix---mg-bottom-40px">
                <div className="prefix---color-neutral-100">
                  <h2
                    data-w-id="elemento34"
            style={{
  WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MsTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  opacity: 1,
}}
                    className="prefix---heading-h2-size-2"
                  >
                    ¡No esperes más y comienza a tomar mejores decisiones!
                  </h2>
                </div>
              </div>
              <div
                data-w-id="elemento36"
            style={{
  WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  MsTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
  opacity: 1,
}}
                className="prefix---buttons-row-center"
              >
                <div className="prefix---button-row-left">
                  <a href="#" className="prefix---btn-primary-white w-button"
                    >Comenzar prueba gratuita</a
                  >
                </div>
                <a href="#" className="prefix---btn-secondary-white w-button"
                  >Quiero saber más</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={nose}
        data-w-id="elemento3c"
        style={{opacity: 1}}
        alt=""
        className="prefix---cta-v2-floating-item-01"
      /><img
        src={fondo1}
        data-w-id="elemento3d"
        style={{opacity: 1}}
        alt=""
        className="prefix---cta-v2-floating-item-02"
      />
    </div>
</div>
    </div>
  );
};

export default HomePage;