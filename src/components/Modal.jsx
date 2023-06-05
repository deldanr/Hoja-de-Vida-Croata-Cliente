import React, { useState, useEffect } from "react";

function InstruccionesModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.pointerEvents = "auto";
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
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        pointerEvents: "auto",
        zIndex: 20,
      }}
    >
      <div
        onClick={stopClickPropagation}
        style={{
          backgroundColor: "white",
          padding: "1em",
          width: "80%",
          maxWidth: "800px",
          textAlign: "justify",
          overflowY: "scroll"
        }}
      >
        <h2>Bienvenido(a) a Croat-IA Umjetna Inteligencija</h2>
        <p>
          Esta es una herramienta que te permitirá crear de forma sencilla tu
          Hoja de Vida para el trámite de ciudadanía Croata.
        </p>
        <p>
          Para empezar, debes completa todos los datos siguiendo las
          indicaciones señaladas en cada campo del formulario. En algunos casos
          podrás observar una “X”, esta te permitirá eliminar un grupo de datos
          erróneos que no quieras incluir.
        </p>
        <p>
          Si tienes dudas sobre el contenido a completar, puedes presionar el
          botón "Llenar con datos de prueba" para ver un ejemplo, recuerda
          ajustarlos a tu realidad personal. No te compliques en ser específico,
          ya que nuestra Inteligencia Artificial se encarga de ordenar la
          redacción de los párrafos.
        </p>
        <p>Importante, no almacenamos ningún tipo de información personal.</p>
        <p>
          Una vez que termines, nuestra inteligencia artificial te presentará la
          Hoja de Vida en español, la cual podrás editar. Una vez estes listo(a)
          presiona “traducir”. Actualmente demora de 30 segundos a 1 minuto en
          generar la hoja de vida, así que ten paciencia.{" "}
        </p>
        <p>
          Esta es una herramienta gratuita, sin embargo, tiene un costo de
          mantención. Si deseas cooperar con nuestro proyecto,{" "}
          <a href="https://www.flow.cl/btn.php?token=udyjpdb">CLICK AQUÍ.</a>
        </p>

        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
}

export default InstruccionesModal;
