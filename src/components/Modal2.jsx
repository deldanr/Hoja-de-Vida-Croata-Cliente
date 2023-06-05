import React, { useState, useEffect, useRef } from "react";

function Modal2() {
  const [modalVisible, setModalVisible] = useState(true);
  const modalRef = useRef(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (modalVisible) {
      scrollPositionRef.current = window.pageYOffset;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [modalVisible]);

  const closeModal = () => setModalVisible(false);

  const stopClickPropagation = (event) => event.stopPropagation();

  if (!modalVisible) {
    return null;
  }

  return (
    <div
      ref={modalRef}
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
          maxHeight: "80vh",
          overflowY: "scroll",
        }}
      >
        <h2>Términos y Condiciones</h2>

        <h2>0. Sobre uso del producto</h2>
        <p>
          <strong>0.1 Exceptativa del producto:</strong> Croat-IA.com ofrece una
          herramienta que permite elaborar la Hoja de Vida para el trámite de
          Ciudadanía Croata, utilizando Inteligencia Artificial. El producto
          final esta elaborado siguiendo lineamientos y experiencia de usuarios
          previos, siguiendo los requisitos publicados por el Ministerio del
          Interior de Croacia. Croat-IA.com no garantiza que las respectivas
          oficinas del Ministerio del Interior de Croacia acepten y validen el
          contenido del formulario, pudiendo cambiar las reglamentaciones que lo
          norman sin previo aviso y quedando nuestro actual modelo obsoleto.
          Como equipo nos comprometemos a seguir los requerimientos de la Ley de
          Ciudadania Croata y otros de forma oportuna.
        </p>
        <h2>1. Privacidad y Protección de Datos</h2>
        <p>
          <strong>1.1 Recopilación y uso de datos personales:</strong>{" "}
          Croat-IA.com reconoce la importancia de la privacidad y se compromete
          a proteger los datos personales proporcionados por los usuarios. Al
          utilizar nuestra aplicación, aceptas que recopilemos y utilicemos tus
          datos personales de acuerdo con nuestras Políticas de Privacidad
          vigentes y altos estandares de seguridad.
        </p>
        <p>
          <strong>
            1.2 Almacenamiento y seguridad de los datos personales:
          </strong>{" "}
          Mantendremos tus datos personales almacenados de manera segura y los
          protegeremos contra el acceso no autorizado, la divulgación o
          cualquier otro uso indebido. Cumpliremos con todas las leyes y
          regulaciones aplicables relacionadas con la protección de datos.
        </p>
        <p>
          <strong>1.3 Uso de los datos personales:</strong> Utilizaremos tus
          datos personales exclusivamente con el propósito de mejorar nuestra
          aplicación y ofrecerte propuestas más adecuadas a tus necesidades como
          cliente de Croat-IA.com. No venderemos ni compartiremos tus datos
          personales con terceros, a menos que obtengamos tu consentimiento
          expreso o estemos legalmente obligados a hacerlo.
        </p>

        <h2>2. Propiedad Intelectual</h2>
        <p>
          <strong>2.1 Derechos de propiedad:</strong> Croat-IA.com y todo su
          contenido, incluyendo pero no limitado a textos, gráficos, logotipos,
          imágenes, videos, software y diseños, están protegidos por derechos de
          propiedad intelectual y son propiedad exclusiva de Croat-IA.com o de
          sus respectivos propietarios. No se concede ningún derecho o licencia
          sobre estos derechos de propiedad.
        </p>
        <p>
          <strong>2.2 Uso de la propiedad intelectual:</strong> No puedes
          copiar, modificar, distribuir, transmitir, mostrar, realizar,
          reproducir, publicar, otorgar licencias, crear trabajos derivados,
          transferir o vender ninguna parte del contenido o los servicios
          proporcionados por Croat-IA.com sin nuestro consentimiento previo por
          escrito.
        </p>

        <h2>3. Responsabilidades del Usuario</h2>
        <p>
          <strong>3.1 Uso adecuado:</strong> Al utilizar Croat-IA.com, te
          comprometes a no participar en actividades que puedan ser dañinas,
          interferir con el funcionamiento adecuado del sitio web o infringir
          los derechos de terceros. Esto incluye, pero no se limita a, el envío
          de contenido ilegal, difamatorio, ofensivo, obsceno o que viole los
          derechos de propiedad intelectual.
        </p>
        <p>
          <strong>3.2 Exactitud de la información:</strong> Al proporcionar
          datos personales u otra información a Croat-IA.com, garantizas que
          dicha información es precisa, actual y completa. Eres responsable de
          mantener y actualizar tus datos personales para que sigan siendo
          precisos y completos.
        </p>

        <h2>4. Modificaciones y Terminación</h2>
        <p>
          <strong>4.1 Modificaciones:</strong> Croat-IA.com se reserva el
          derecho de modificar, suspender o interrumpir, temporal o
          permanentemente, el sitio web o cualquier servicio o contenido
          relacionado, sin previo aviso y en cualquier momento. No seremos
          responsables ante ti ni ante terceros por ninguna modificación,
          suspensión o interrupción del sitio web.
        </p>
        <p>
          <strong>4.2 Terminación:</strong> Nos reservamos el derecho de
          terminar tu acceso al sitio web o a cualquier servicio o contenido
          relacionado en cualquier momento y por cualquier motivo, sin previo
          aviso.
        </p>

        <h2>5. Legislación Aplicable y Jurisdicción</h2>
        <p>
          Estos Términos y Condiciones se regirán e interpretarán de acuerdo con
          las leyes y regulaciones vigentes en el lugar donde Croat-IA.com tenga
          su sede principal. Cualquier disputa que surja en relación con estos
          Términos y Condiciones estará sujeta a la jurisdicción exclusiva de
          los tribunales competentes en dicho lugar.
        </p>

        <p>
          Si tienes alguna pregunta o inquietud sobre estos Términos y
          Condiciones, contáctanos a través de la información de contacto
          proporcionada en el sitio web de Croat-IA.com.
        </p>

        <p>Última actualización: 04 de Junio de 2023</p>

        <p>
          Al utilizar Croat-IA.com, aceptas estos Términos y Condiciones en su
          totalidad.
        </p>
        <button onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
}

export default Modal2;