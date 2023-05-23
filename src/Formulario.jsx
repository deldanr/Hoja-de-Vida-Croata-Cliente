import React, { useState } from "react";
import axios from "axios";
import "./styles.css"; // Importa el archivo CSS

import DOMPurify from "dompurify";
import html2pdf from "html2pdf.js";

//import jsPDF from "jspdf";
//import html2canvas from "html2canvas";

const Formulario = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado para controlar el envío del formulario
  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");
  const [date3, setDate3] = useState("");
  const [date4, setDate4] = useState("");
  const [date5, setDate5] = useState("");
  
  const [formValues, setFormValues] = useState({
    creatividad: "",
    nombreCompleto: "",
    fechaNacimiento: "",
    lugarNacimiento: "",
    edad: "",
    domicilio: "",
    pais: "",
    ocupacion: "",
    estadoCivil: "",
    telefono: "",
    correoElectronico: "",
    hijos: [{ nombre: "", sexo: "", edad: "" }],
    academicos: [
      {
        institucion: "",
        nombreCarrera: "",
        anoInicio: "",
        anoFin: "",
        logros: "",
      },
    ],
    nombreEmpresa: "",
    lugarTrabajo: "",
    cargo: "",
    descTrabajo: "",
    logrosLaborales: "",
    aporte: "",
    familiaresCroatas: [{ nombreCompleto: "", parentesco: "" }],
    interesCroatas: "",
    antepasadoCroata: {
      nombre: "",
      parentesco: "",
      fechaNacimientoA: "",
      lugarNacimientoA: "",
      nombrePadre: "",
      nombreMadre: "",
      fechaFallecimiento: "",
      lugarFallecimiento: "",
      anoEmigracion: "",
      ciudadEmigro: "",
      paisEmigro: "",
      motivoEmigracion: "",
      ocupacionDestino: "",
      seCaso: false,
      pareja: {
        nombreConyuge: "",
        anoCasamiento: "",
      },
    },
  });

  const [resultado, setResultado] = useState("");

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name in formValues.antepasadoCroata) {
      setFormValues({
        ...formValues,
        //fechaNacimiento: event.target.value,
        antepasadoCroata: {
          ...formValues.antepasadoCroata,
      /*    fechaNacimientoA: event.target.value,
          fechaFallecimiento: event.target.value,*/
          [name]: type === "checkbox" ? checked : value,
        },
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleArrayChange = (event, index, arrayName) => {
    const newArray = [...formValues[arrayName]];
    newArray[index][event.target.name] = event.target.value;
    setFormValues({
      ...formValues,
      anoInicio: event.target.value,
      anoFin: event.target.value,
      [arrayName]: newArray,
    });
  };

  const addHijo = () => {
    setFormValues({
      ...formValues,
      hijos: [...formValues.hijos, { nombre: "", sexo: "", edad: "" }],
    });
  };

  const addAcademico = () => {
    setFormValues({
      ...formValues,
      academicos: [
        ...formValues.academicos,
        {
          institucion: "",
          nombreCarrera: "",
          fechaDesde: "",
          fechaHasta: "",
          logros: "",
        },
      ],
    });
  };

  const addFamiliarCroata = () => {
    setFormValues({
      ...formValues,
      familiaresCroatas: [
        ...formValues.familiaresCroatas,
        { nombreCompleto: "", parentesco: "" },
      ],
    });
  };

  const removeHijo = (indexToRemove) => {
    setFormValues({
      ...formValues,
      hijos: formValues.hijos.filter((_, index) => index !== indexToRemove),
    });
  };

  const removeAcademico = (indexToRemove) => {
    setFormValues({
      ...formValues,
      academicos: formValues.academicos.filter(
        (_, index) => index !== indexToRemove
      ),
    });
  };

  const removeFamiliarCroata = (indexToRemove) => {
    setFormValues({
      ...formValues,
      familiaresCroatas: formValues.familiaresCroatas.filter(
        (_, index) => index !== indexToRemove
      ),
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return; // Si ya se está enviando el formulario, no hacer nada
    }

    setIsSubmitting(true); // Establecer el estado de envío a true
    
    try {
      const response = await axios.post(
        "https://hoja-de-vida-1--danieleldan.repl.co/api/hoja_espanol",
        formValues
      );

      const sanitizedHTML = DOMPurify.sanitize(response.data.result);
      setResultado(sanitizedHTML);

      // Después de la llamada a la API
      setIsSubmitting(false); // Establecer el estado de envío a false
    } catch (error) {
      console.error(error);
      setIsSubmitting(false); // Establecer el estado de envío a false en caso de error
    }
  };

  const handleSubmitTraducir = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return; // Si ya se está enviando el formulario, no hacer nada
    }

    setIsSubmitting(true); // Establecer el estado de envío a true

    try {
      const response = await axios.post("https://hoja-de-vida-1--danieleldan.repl.co/api/traducir", {
        resultado: resultado,
      });
      //console.log("enviado desde front: \n" + resultado + "\n");
      const sanitizedHTML = DOMPurify.sanitize(response.data.result);
      setResultado(sanitizedHTML);

      // Después de la llamada a la API
      setIsSubmitting(false); // Establecer el estado de envío a false
    } catch (error) {
      console.error(error);
      setIsSubmitting(false); // Establecer el estado de envío a false en caso de error
    }
  };

  const imprimirPDF2 = () => {
    const element = document.getElementById("result");

    let opt = {
      margin: 0.5, // Margen de la página (unidad por defecto: mm)
      filename: "hoja_vida.pdf", // Nombre del archivo
      image: { type: "jpeg", quality: 0.98 }, // Calidad de la imagen
      html2canvas: { scale: 2 }, // Escala del canvas (2 significa una resolución más alta)
      jsPDF: { unit: "in", format: "legal", orientation: "portrait" }, // Formato y orientación del PDF
    };

    html2pdf().set(opt).from(element).save();
  };
/*
  const imprimirPDF = () => {
    const element = document.getElementById("result");

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      // Agrega la imagen del elemento HTML al PDF
      pdf.addImage(imgData, "PNG", 10, 10);

      // Agrega la marca de agua
      pdf.setTextColor(150);
      pdf.setFontSize(60);
      pdf.text(
        "BORRADOR",
        pdf.internal.pageSize.getWidth() / 2,
        pdf.internal.pageSize.getHeight() / 2,
        {
          angle: 45,
          align: "center",
        }
      );

      // Guarda el PDF
      pdf.save("hoja_vida.pdf");
    });
  };*/

  const modificarFormulario = () => {
    setResultado("");
  };

  const fillFormWithTestData = () => {
    setFormValues({
      creatividad: 0.4,
      nombreCompleto: "Daniel Eldan",
      fechaNacimiento: "1990-10-30",
      lugarNacimiento: "San Fernando, Chile",
      edad: "32",
      domicilio: "Calle Ficticia 123, San Fernando",
      pais: "Chile",
      ocupacion: "Ingeniero Civil Industrial",
      estadoCivil: "Soltero",
      telefono: "123456789",
      correoElectronico: "johndoe@example.com",
      hijos: [
        { nombre: "Ante Eldan", sexo: "Hombre", edad: "3" },
        { nombre: "Joakim Eldan", sexo: "Hombre", edad: "1" },
      ],
      academicos: [
        {
          institucion: "Universidad Andres Bello",
          nombreCarrera: "Ingeniería Civil Industrial",
          anoInicio: "2010-09-01",
          anoFin: "2014-06-30",
          logros: "Graduado con honores",
        },
      ],
      nombreEmpresa: "CapyData",
      lugarTrabajo: "Vitacura",
      cargo: "CEO",
      descTrabajo:
        "Gerente General de empresa de analítica avanzada CapyData, donde desarrollamos modelos de inteligencia artificial para nuestros clientes.",
      logrosLaborales:
        "Creación de aplicación para completación de Hoja de Vida para trámite de ciudadania Croata.",
      aporte:
        "A través de mi trabajo puedo aportar valor a las empresas Croatas mediante la creación de herramientas que les permitan ser más eficientes y así alcanzar sus objetivos, creando nuevos empleos para ciudadanos Croatas y así mejorando su calidad de vida.",
      familiaresCroatas: [
        { nombreCompleto: "Valentin Eldan", parentesco: "Primo" },
        { nombreCompleto: "Petar Eldan", parentesco: "Tío" },
      ],
      antepasadoCroata: {
        nombre: "Vicko Eldan",
        parentesco: "Bisabuelo(a)",
        fechaNacimientoA: "1879-11-21",
        lugarNacimientoA: "Vis, Croacia",
        nombrePadre: "Ante Eldan",
        nombreMadre: "Jerka Vusio",
        fechaFallecimiento: "1955-06-01",
        lugarFallecimiento: "Santiago",
        anoEmigracion: "1904",
        ciudadEmigro: "Tocopilla",
        paisEmigro: "Chile",
        motivoEmigracion:
          "Producto de la plaga de filoxera que azotó a la isla de Vis, mi Bisabuelo decidió emigrar a Chile en busca de nuevas oportunidades.",
        ocupacionDestino:
          "En Tocopilla trabajó en las pulperias que abastecian de carne a las salitreras. Posteriormente, instalo 4 carnicerias en pleno centro de la ciudad, donde trabajo por años junto a su hermano Martin. También fue integrante del Directorio de la Sociedad Yugoslava de Socorros Mutuos de Tocopilla.",
        seCaso: true,
        pareja: {
          nombreConyuge: "Demofila Ors",
          anoCasamiento: "1914",
        },
      },
      interesCroatas:
        "Quiero obtener la ciudadania Croata para poder conectarme con mis raices y poder estar más cerca de lo que vivieron mis antepasados. Tengo una conexión muy fuerte con el Estado Croata que lo vivo a través de su cultura y tradiciones.",
    });
  };

  return (
    <div className="container">
      {resultado && (
        <div>
          <div id="result">
            <div
              className="result"
              dangerouslySetInnerHTML={{ __html: resultado }}
            ></div>
          </div>
          <button onClick={imprimirPDF2}>Imprimir en PDF</button>
          <button onClick={modificarFormulario}>Modificar el Formulario</button>
          <button
            onClick={handleSubmitTraducir}
            type="submit"
            className="button-final"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Traduciendo..." : "Traducir"}
          </button>
        </div>
      )}
      {!resultado && (
        <form onSubmit={handleSubmit} className="form">
          {/* Datos Personales */}
          <h2>Datos Personales</h2>
          <div className="form-container">
            <div className="column">
              <input
                type="text"
                name="nombreCompleto"
                value={formValues.nombreCompleto}
                onChange={handleInputChange}
                placeholder="Nombre Completo"
                required
              />
              <input
                type={date ? "date" : "text"}
                name="fechaNacimiento"
                value={formValues.fechaNacimiento}
                placeholder="Fecha de Nacimiento      (Click en Calendario)"
                onClick={(e) => setDate("01-01-2000")}
                onInput={(e) => setDate(e.target.value)}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="lugarNacimiento"
                value={formValues.lugarNacimiento}
                onChange={handleInputChange}
                placeholder="Lugar de Nacimiento y país"
                required
              />
              <input
                type="number"
                name="edad"
                value={formValues.edad}
                onChange={handleInputChange}
                placeholder="Edad"
                required
              />
              <input
                type="text"
                name="domicilio"
                value={formValues.domicilio}
                onChange={handleInputChange}
                placeholder="Domicilio"
                required
              />
            </div>
            <div className="column">
              <input
                type="text"
                name="pais"
                value={formValues.pais}
                onChange={handleInputChange}
                placeholder="País"
                required
              />
              <input
                type="text"
                name="ocupacion"
                value={formValues.ocupacion}
                onChange={handleInputChange}
                placeholder="Ocupación"
                required
              />
              <input
                type="text"
                name="estadoCivil"
                value={formValues.estadoCivil}
                onChange={handleInputChange}
                placeholder="Estado Civil"
                required
              />
              <input
                type="number"
                name="telefono"
                value={formValues.telefono}
                onChange={handleInputChange}
                placeholder="Teléfono"
                required
              />
              <input
                type="email"
                name="correoElectronico"
                value={formValues.correoElectronico}
                onChange={handleInputChange}
                placeholder="Correo Electrónico"
                required
              />
            </div>
          </div>

          {/* Datos de los hijos */}
          <h2>Datos de los hijos</h2>
          {formValues.hijos.map((hijo, index) => (
            <div key={index}>
              <input
                type="text"
                className="input"
                name="nombre"
                value={hijo.nombre}
                onChange={(event) => handleArrayChange(event, index, "hijos")}
                placeholder={`Nombre del hijo(a) ${index + 1}`}
                required
              />
              <select
                className="input"
                name="sexo"
                value={hijo.sexo}
                onChange={(event) => handleArrayChange(event, index, "hijos")}
                required
              >
                <option value="">Sexo</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>

              <input
                type="number"
                className="input"
                name="edad"
                value={hijo.edad}
                onChange={(event) => handleArrayChange(event, index, "hijos")}
                placeholder={`Edad del hijo(a) ${index + 1}`}
                required
              />
              <button type="button" onClick={() => removeHijo(index)}>
                X
              </button>
            </div>
          ))}
          <button type="button" onClick={addHijo}>
            Agregar otro hijo
          </button>

          {/* Datos académicos */}
          <h2>Datos académicos</h2>
          {formValues.academicos.map((academico, index) => (
            <div key={index}>
              <input
                type="text"
                name="institucion"
                value={academico.institucion}
                onChange={(event) =>
                  handleArrayChange(event, index, "academicos")
                }
                placeholder={`Institución ${index + 1}`}
                required
              />
              <input
                type="text"
                name="nombreCarrera"
                value={academico.nombreCarrera}
                onChange={(event) =>
                  handleArrayChange(event, index, "academicos")
                }
                placeholder={`Nombre de la carrera ${index + 1}`}
                required
              />
              <input
                type={date2 ? "date" : "text"}
                name="anoInicio"
                value={academico.anoInicio}
                placeholder="Inicio Estudios    (Click en calendario)"
                onClick={(e) => setDate2("01-01-2000")}
                onInput={(e) => setDate2(e.target.value)}
                onChange={(event) =>
                  handleArrayChange(event, index, "academicos")
                }
                required
              />
              <input
                type={date3 ? "date" : "text"}
                name="anoFin"
                value={academico.anoFin}
                onClick={(e) => setDate3("01-01-2000")}
                onInput={(e) => setDate3(e.target.value)}
                onChange={(event) =>
                  handleArrayChange(event, index, "academicos")
                }
                placeholder="Fin Estudios    (Click en calendario)"
                required
              />
              <textarea
                type="text"
                rows={4}
                name="logros"
                value={academico.logros}
                onChange={(event) =>
                  handleArrayChange(event, index, "academicos")
                }
                placeholder={`Logros ${index + 1}`}
                required
              />
              <button type="button" onClick={() => removeAcademico(index)}>
                X
              </button>
            </div>
          ))}
          <button type="button" onClick={addAcademico}>
            Agregar otro dato académico
          </button>

          {/* Datos laborales */}
          <h2>Datos laborales</h2>
          <input
            type="text"
            className="input"
            name="nombreEmpresa"
            value={formValues.nombreEmpresa}
            onChange={handleInputChange}
            placeholder="Nombre de la empresa"
            required
          />
          <input
            type="text"
            className="input"
            name="lugarTrabajo"
            value={formValues.lugarTrabajo}
            onChange={handleInputChange}
            placeholder="Lugar de trabajo"
            required
          />
          <input
            type="text"
            className="input"
            name="cargo"
            value={formValues.cargo}
            onChange={handleInputChange}
            placeholder="Cargo"
            required
          />
          <input
            type="text"
            className="input"
            name="descTrabajo"
            value={formValues.descTrabajo}
            onChange={handleInputChange}
            placeholder="Breve descripcion de funciones"
            required
          />

          <input
            type="text"
            className="input"
            name="logrosLaborales"
            value={formValues.logrosLaborales}
            onChange={handleInputChange}
            placeholder="Logros laborales"
            required
          />
          <textarea
            type="text"
            rows={5}
            className="input"
            name="aporte"
            value={formValues.aporte}
            onChange={handleInputChange}
            placeholder="¿Cómo puedes aportar con tu trabajo a Croacia?"
            required
          />
          {/* Datos de familiares croatas */}
          <h2>Datos de familiares con ciudadania Croata</h2>
          {formValues.familiaresCroatas.map((familiar, index) => (
            <div key={index}>
              <input
                type="text"
                name="nombreCompleto"
                value={familiar.nombreCompleto}
                onChange={(event) =>
                  handleArrayChange(event, index, "familiaresCroatas")
                }
                placeholder={`Nombre completo del familiar ${index + 1}`}
                required
              />
              <input
                type="text"
                name="parentesco"
                value={familiar.parentesco}
                onChange={(event) =>
                  handleArrayChange(event, index, "familiaresCroatas")
                }
                placeholder={`Parentesco del familiar ${index + 1}`}
                required
              />
              <button type="button" onClick={() => removeFamiliarCroata(index)}>
                X
              </button>
            </div>
          ))}
          <button type="button" onClick={addFamiliarCroata}>
            Agregar otro familiar croata
          </button>

          {/* Datos del antepasado croata */}
          <h2>Antepasado Croata</h2>
          <input
            type="text"
            name="nombre"
            value={formValues.antepasadoCroata.nombre}
            onChange={handleInputChange}
            placeholder="Nombre"
            required
          />
          <select
            name="parentesco"
            value={formValues.antepasadoCroata.parentesco}
            onChange={handleInputChange}
            required
          >
            <option value="">Seleccionar parentesco</option>
            <option value="Tatarabuelo(a)">Tatarabuelo(a)</option>
            <option value="Bisabuelo(a)">Bisabuelo(a)</option>
            <option value="Abuelo(a)">Abuelo(a)</option>
          </select>

          <input
            type={date4 ? "date" : "text"}
            name="fechaNacimientoA"
            value={formValues.antepasadoCroata.fechaNacimientoA}
            onChange={handleInputChange}
            onClick={(e) => setDate4("01-01-2000")}
            onInput={(e) => setDate4(e.target.value)}
            placeholder="fechaNacimiento     (Click en Calendario)"
            required
          />

          <input
            type="text"
            name="lugarNacimientoA"
            value={formValues.antepasadoCroata.lugarNacimientoA}
            onChange={handleInputChange}
            placeholder="Lugar de Nacimiento"
            required
          />
          <input
            type="text"
            name="nombrePadre"
            value={formValues.antepasadoCroata.nombrePadre}
            onChange={handleInputChange}
            placeholder="Nombre del Padre"
            required
          />
          <input
            type="text"
            name="nombreMadre"
            value={formValues.antepasadoCroata.nombreMadre}
            onChange={handleInputChange}
            placeholder="Nombre de la Madre"
            required
          />
          <input
            type={date5 ? "date" : "text"}
            name="fechaFallecimiento"
            value={formValues.antepasadoCroata.fechaFallecimiento}
            onChange={handleInputChange}
            onClick={(e) => setDate5("01-01-2000")}
            onInput={(e) => setDate5(e.target.value)}
            placeholder="fechaFallecimiento     (Click en Calendario)"
            required
          />
          <input
            type="text"
            name="lugarFallecimiento"
            value={formValues.antepasadoCroata.lugarFallecimiento}
            onChange={handleInputChange}
            placeholder="Lugar de Fallecimiento"
            required
          />
          <input
            type="number"
            name="anoEmigracion"
            value={formValues.antepasadoCroata.anoEmigracion}
            onChange={handleInputChange}
            placeholder="Año de emigración"
            required
          />
          <input
            type="text"
            name="ciudadEmigro"
            value={formValues.antepasadoCroata.ciudadEmigro}
            onChange={handleInputChange}
            placeholder="Ciudad a la que emigró"
            required
          />
          <input
            type="text"
            name="paisEmigro"
            value={formValues.antepasadoCroata.paisEmigro}
            onChange={handleInputChange}
            placeholder="País al que emigró"
            required
          />
          <textarea
            type="text"
            rows={6}
            name="motivoEmigracion"
            value={formValues.antepasadoCroata.motivoEmigracion}
            onChange={handleInputChange}
            placeholder="Motivo de la emigración
            Ej:
              Huir de la Guerra
              Gran Plaga de la Filoxera
              Búsqueda de Mejores Oportunidades"
            required
          />
          <textarea
            type="text"
            rows={5}
            name="ocupacionDestino"
            value={formValues.antepasadoCroata.ocupacionDestino}
            onChange={handleInputChange}
            placeholder="Ocupación en el país de destino
            Principales actividades a las que se dedicó en el pais al que emigró
            Organizaciones Croatas en las que haya participado
            Manifestación del lazo Croata en el país al que emigró"
            required
          />

          <div>
            <label>
              ¿Se casó?
              <input
                type="checkbox"
                name="seCaso"
                className="custom-checkbox"
                checked={formValues.antepasadoCroata.seCaso}
                onChange={handleInputChange}
              />
            </label>
          </div>
          {formValues.antepasadoCroata.seCaso && (
            <div>
              <input
                type="text"
                name="nombreConyuge"
                value={formValues.antepasadoCroata.pareja.nombreConyuge}
                onChange={handleInputChange}
                placeholder="Nombre del cónyuge"
                required
              />
              <input
                type="number"
                name="anoCasamiento"
                value={formValues.antepasadoCroata.pareja.anoCasamiento}
                onChange={handleInputChange}
                placeholder="Año Casamiento"
              />
            </div>
          )}

          {/* Interés en Croacia */}
          <h2>Interés en Croacia</h2>
          <textarea
            name="interesCroatas"
            rows={10}
            value={formValues.interesCroatas}
            onChange={handleInputChange}
            placeholder="¿Por qué está interesado(a) en la Ciudadania Croata?
            Ej: 
               Conexión con mi antepasado
               Vivir en Croacia
               Trabajar en Croacia
               Lazos culturales y sociales
               Compromiso familiar"
            required
          />

          {/* Botón de envío */}
          <button type="button" onClick={fillFormWithTestData}>
            Llenar con datos de prueba
          </button>
          <div>
            <input
              type="range"
              name="creatividad"
              className="slider"
              min="0"
              max="1"
              step="0.1"
              value={formValues.creatividad}
              onChange={handleInputChange}
            />
<p className="description">Desplaza la barra para ajustar la creatividad de la Inteligencia Artificial</p>
<p className="range-label">0: Determinista | 0.4: Recomendado | 0.7: Creativo | 1: Muy Creativo</p>
<p className="adjustment">Creatividad: <span className="creativity-value">{formValues.creatividad}</span></p>

          </div>
          <button
            type="submit"
            className="button-final"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Generando con Inteligencia Artificial..."
              : "Enviar"}
          </button>
        </form>
      )}
    </div>
  );
};

export default Formulario;
