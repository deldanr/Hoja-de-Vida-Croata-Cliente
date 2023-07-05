import React, { useState } from 'react';
import axios from 'axios';
import './FormularioContacto.css';
import '../styles2.css';

import circleCheck from '../img/circle-check.svg';
import contact from '../img/contact.svg';
import face from '../img/face.svg';
import twitter from '../img/twitter.svg';
import insta from '../img/insta.svg';
import linkedin from '../img/linkedin.svg';

const FormularioContacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setEnviando(true);
      // Hacer una solicitud POST a la API para enviar el formulario de contacto
      const response = await axios.post('https://hoja-de-vida-1--danieleldan.repl.co/api/enviar-correo', {
        nombre,
        correo,
        mensaje,
      });
      if (response) {
        setEnviando(false);
        setEnviado(true);
      }
      // Restablecer los valores del formulario
      setNombre('');
      setCorreo('');
      setMensaje('');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError(true);
    }
  };

  return (
    <div className="container2">
    <div className="prefix---section-2">
      <div className="prefix---container-default w-container">
        <div className="prefix---inner-container-490px-center">
          <div
            data-w-id="elemento45d7"
            style={{
              WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              MsTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
              opacity: 1,
            }}
            className="prefix---text-center"
          >
            <div className="prefix---color-neutral-806">
              <h1 className="prefix---heading-h1-size">Conversemos</h1>
            </div>
            <div className="prefix---mg-bottom-64px">
              <div className="prefix---color-neutral-600">
                <p className="prefix---paragraph-default">
                  Tu opinión es importante para nosotros. Queremos conocerte y escuchar tus ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="elemento45df"
          style={{
            WebkitTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            MozTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            MsTransform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            transform: 'translate3d(0, 10%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            opacity: 1,
          }}
          className="w-layout-grid prefix---grid-contact-v11"
        >
          <div>
            <div className="w-form">
              {!enviado && (
                <form onSubmit={handleSubmit}>
                  <div className="w-layout-grid prefix---form-grid-2-columns">
                    <div>
                      <label htmlFor="nombre" className="prefix---input-label">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="prefix---input w-input"
                        maxLength="256"
                        name="nombre"
                        placeholder="Luka Modrić"
                        id="nombre"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="correo" className="prefix---input-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="prefix---input w-input"
                        maxLength="256"
                        name="correo"
                        placeholder="ejemplo@email.com"
                        id="correo"
                        required
                      />
                    </div>
                    <div id="w-node-elemento45f4-fbd0e948">
                      <label htmlFor="mensaje" className="prefix---input-label">
                        Déjanos tu mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        maxLength="5000"
                        placeholder="Por favor, déjanos tu mensaje"
                        className="prefix---text-area w-input"
                        required
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      value={enviando ? "Enviando..." : "Enviar Mensaje"}
                      className="prefix---btn-primary w-button"
                    />
                    <div className="w-layout-grid prefix---social-media-grid-right---mbp-center">
                      <a
                        href="https://facebook.com/"
                        className="prefix---social-icon-square-30px w-inline-block"
                      >
                        <img src={face} alt="Facebook" />
                      </a>
                      <a
                        href="https://twitter.com/"
                        className="prefix---social-icon-square-30px w-inline-block"
                      >
                        <img src={twitter} alt="Twitter" />
                      </a>
                      <a
                        href="https://instagram.com/"
                        className="prefix---social-icon-square-30px w-inline-block"
                      >
                        <img src={insta} alt="Instagram" />
                      </a>
                      <a
                        href="https://linkedin.com/"
                        className="prefix---social-icon-square-30px w-inline-block"
                      >
                        <img src={linkedin} alt="Linkedin" />
                      </a>
                    </div>
                  </div>
                </form>
              )}
              {enviado && (
                <div className="prefix---success-message">
                  <div>
                    <img
                      src={circleCheck}
                      alt="Check"
                      className="prefix---icon-success-message-big"
                    />
                    <h3 className="prefix---color-neutral-805">¡Gracias!</h3>
                    <div>Hemos recibido tu mensaje. Nos contactaremos pronto.</div>
                  </div>
                </div>
              )}
              {error && (
                <div className="prefix---error-message">
                  <div>Algo salió mal.</div>
                </div>
              )}
            </div>
          </div>
                  <div id="w-node-elemento460c-fbd0e948">
          <img src={contact} alt="Contact" />
        </div>
        </div>

      </div>
    </div>
      </div>
  );
};

export default FormularioContacto;
