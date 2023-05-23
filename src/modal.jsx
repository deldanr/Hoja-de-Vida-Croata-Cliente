import React, { useState, useEffect } from 'react';

function InstruccionesModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.pointerEvents = 'auto';
    }
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  const stopClickPropagation = (event) => event.stopPropagation();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      onClick={closeModal}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        pointerEvents: 'auto',
        zIndex: 20
      }}
    >
      <div
        onClick={stopClickPropagation}
        style={{
          backgroundColor: 'white',
          padding: '1em',
          width: '80%',
          maxWidth: '800px',
          textAlign: 'justify'
        }}
      >
        <h2>Bienvenido(a)</h2>
        <p>Esta es una herramienta que te permitira crear de forma sencilla tu Hoja de Vida para el trámite de ciudadania Croata.</p>
        <p>Para empezar debes completa todos los datos del formulario. Si no tienes hijos puedes presionar la "X" y eliminar la casilla. Lo mismo con los datos académicos en caso de no querer incluirlos.</p>
        <p>Si tienes dudas, puedes presionar el botón "Llenar con datos de prueba" para ver un ejemplo.</p>
        <p>Recuerda, no almacenamos ningún tipo de información, por lo que deberás volver a ingresar la información si quieres hacer un cambio.</p>
        <p>Una vez que termines, nuestra inteligencia artificial te presentará la Hoja de Vida en español y si estás de acuerdo, presiona traducir. Actualmente demora de 30 segundos a 1 minuto en generarse, paciencia.</p>
        <p>Esta es una herramienta gratuita, sin embargo, tiene un costo de mantención. Si deseas cooperar con nuestro proyecto, <a href="https://www.flow.cl/btn.php?token=udyjpdb">CLICK AQUÍ.</a></p>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
}

export default InstruccionesModal;
