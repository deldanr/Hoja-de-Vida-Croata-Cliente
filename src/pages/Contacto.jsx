import React, { useState } from 'react';
import axios from 'axios';
import './FormularioContacto.css';

const FormularioContacto = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');
const [enviado,setResponse] = useState(false);
  
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Hacer una solicitud POST a la API para enviar el formulario de contacto
    const response = await axios.post('https://hoja-de-vida-1--danieleldan.repl.co/api/enviar-correo', {
      nombre,
      correo,
      mensaje,
    });
if (response){
  setResponse(true);
}
    // Restablecer los valores del formulario
    setNombre('');
    setCorreo('');
    setMensaje('');
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
  }
};

  return (
    <div className="contact-form">
      <h2>Contacto</h2>
      <p className="enviado">Tus comentarios nos ayudan a mejorar</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <textarea
          name="mensaje"
          rows="5"
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form><p className="enviado">
      {enviado ? "Enviado Correctamente" : ""}</p>
    </div>
  );
};

export default FormularioContacto;
