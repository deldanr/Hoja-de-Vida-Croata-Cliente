import React from "react";
import Formulario from "./Formulario";
import Modal from "./modal";
import logo from "./logo.png";
import "./styles.css"; // Importa el archivo CSS

const handleClick = () => {
  // URL a la que se redirigirá al hacer clic en el botón
  const url = "https://www.flow.cl/btn.php?token=udyjpdb";

  // Abrir enlace en una nueva pestaña
  window.open(url, "_blank");
};

function App() {
  //const [formData, setFormData] = useState(null);

  /*const handleSubmit = (data) => {
    setFormData(data);
  };*/

  return (

      <><div className="App">
        <Modal />
        <div align="center">
          <img className="logo" src={logo} alt="Logo"/>
          <h1>Formulario Hoja de Vida</h1>
        </div>
        <Formulario />
      </div>

      <div className="footer">
        <p align="center">
        <button onClick={handleClick}>DONAR</button><br></br>
          Disclaimer: No almacenamos ningún tipo de información personal
          utilizada en la siguiente plataforma.
        </p>
      </div></>

  );
}

export default App;
