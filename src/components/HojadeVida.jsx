import React from 'react';

const HojaDeVida = ({ formValues, response }) => (
  <>
    <div className="result" id="result">
    <h1>Hoja de Vida</h1>
    <h2>{formValues.nombreCompleto}</h2>
    <p>{response.Presentacion}</p>
    <h2>Antecedentes Personales</h2>
    <ul>
      <li><strong>Fecha de Nacimiento:</strong> {formValues.fechaNacimiento}</li>
      <li><strong>Lugar de Nacimiento:</strong> {formValues.lugarNacimiento}</li>
      <li><strong>Edad:</strong> {formValues.edad}</li>
      <li><strong>Domicilio:</strong> {formValues.domicilio}</li>
      <li><strong>País:</strong> {formValues.pais}</li>
      <li><strong>Ocupación/Profesión:</strong> {formValues.ocupacion}</li>
      <li><strong>Estado Civil:</strong> {formValues.estadoCivil}</li>
      <li><strong>Teléfono:</strong> {formValues.telefono}</li>
      <li><strong>Correo Electrónico:</strong> {formValues.correoElectronico}</li>
    </ul>

    <h2>Antecedentes Académicos</h2>
    {formValues.academicos.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th>Institución</th>
            <th>Nombre Carrera</th>
            <th>Fecha desde</th>
            <th>Fecha hasta</th>
            <th>Logros</th>
          </tr>
        </thead>
        <tbody>
          {formValues.academicos.map((academico, index) => (
            <tr key={index}>
              <td>{academico.institucion}</td>
              <td>{academico.nombreCarrera}</td>
              <td>{academico.anoInicio}</td>
              <td>{academico.anoFin}</td>
              <td>{academico.logros}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No hay antecedentes académicos registrados.</p>
    )}

    <h2>Antecedentes Laborales</h2>
    <p>{response.Laboral}</p>
    <h2>Familiares Croatas</h2>
    {formValues.familiaresCroatas.length > 0 ? (
      <table>
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Parentesco</th>
          </tr>
        </thead>
        <tbody>
          {formValues.familiaresCroatas.map((familiar, index) => (
            <tr key={index}>
              <td>{familiar.nombreCompleto}</td>
              <td>{familiar.parentesco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No hay familiares croatas registrados.</p>
    )}

    <h2>Antepasado Croata</h2>
    <p>{response.Antepasado}</p>
    <h2>Motivación por la Ciudadanía Croata</h2>
    <p>{response.Motivacion}</p>
      </div>
  </>
);

export default HojaDeVida;
