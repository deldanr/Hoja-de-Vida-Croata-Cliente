import React from "react";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "./components/NavBar";

import Formulario from "./pages/Formulario";
import HomePage from "./pages/HomePage";
import Contacto from "./pages/Contacto"
import "./styles.css";

const handleClick = () => {
  // URL a la que se redirigirá al hacer clic en el botón
  const url = "https://www.flow.cl/btn.php?token=udyjpdb";

  // Abrir enlace en una nueva pestaña
  window.open(url, "_blank");
};

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <div className="footer">
        <p align="center">
        <button onClick={handleClick}>DONAR</button>
        <br></br>
        </p>
      </div>
    </Router>
  );
}

export default App;
