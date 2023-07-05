import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "./components/NavBar";

import Formulario from "./pages/Formulario";
import HomePage from "./pages/HomePage";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import About from "./pages/About";

import "./styles.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<About />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
