import React, { useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";
import Modal2 from "../components/Modal2";
import Modal from "../components/Modal";
import HojaDeVida from "../components/HojadeVida";
import html2pdf from "html2pdf.js";
import { CKEditor } from "ckeditor4-react";
import { PacmanLoader } from "react-spinners";
import { renderToString } from 'react-dom/server';

import "../styles.css";

const Formulario = () => {
  let [color, setColor] = useState("silver");

  const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado para controlar el envío del formulario

  const [modalVisible, setModalVisible] = useState(false);
  const [acepto, setAcepto] = useState(true); // Para aceptar terminos y condiciones

  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");
  const [date3, setDate3] = useState("");
  const [date4, setDate4] = useState("");
  const [date5, setDate5] = useState("");

  const [formValues, setFormValues] = useState({
    creatividad: 0.4,
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
    sinhijos: false,
    hijos: [{ nombre: "", sexo: "", edad: "" }],
    academicos: [
      {
        institucion: "",
        nombreCarrera: "",
        anoInicio: "",
        anoFin: "",
        enCurso: false,
        logros: "",
      },
    ],
    cesante: false,
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
      nombreConyuge: "",
      anoCasamiento: "",
    },
  });

  const [estaEditando, setEstaEditando] = useState(false);
  const [loedito, setloedito] = useState(false);
  const [resultado, setResultado] = useState(false);
  const [respuesta, setRespuesta] = useState("");
  const [hojadevidaHTML, setHojadeVida] = useState("");
  
  const handleClickModal = () => {
    setModalVisible(true);
  };

const manejarClickEditarGuardar = () => {
  if (!estaEditando) {
    setloedito(true);
  }
  setEstaEditando(!estaEditando);
};


  // Manejo de cambios para formValues
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Manejo de cambios exclusivo para antepasadoCroata
  const handleAntepasadoInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormValues({
      ...formValues,
      antepasadoCroata: {
        ...formValues.antepasadoCroata,
        [name]: type === "checkbox" ? checked : value,
      },
    });
  };

  const handleArrayChange = (event, index, arrayName) => {
    const newArray = [...formValues[arrayName]];
    newArray[index][event.target.name] =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormValues({
      ...formValues,
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
          anoInicio: "",
          anoFin: "",
          enCurso: false,
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
      
      // Intenta establecer los estados después de la llamada API
      try {
        setRespuesta(response.data);
        setHojadeVida(renderToString(<HojaDeVida formValues={formValues} response={response.data} />));
        setResultado(true);
      } catch (error) {
        console.error("Error al establecer los estados:", error);
        // Puedes manejar el error aquí o lanzarlo de nuevo para que sea capturado por el bloque catch externo
        throw error;
      }

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
      const response2 = await axios.post(
        "https://hoja-de-vida-1--danieleldan.repl.co/api/traducir",
    {
      resultado: hojadevidaHTML ? hojadevidaHTML : renderToString(<HojaDeVida formValues={formValues} response={response.data} />),
    }
  );
      console.log(response2);
            try {
      const sanitizedHTML = DOMPurify.sanitize(response2.data.result);
      setHojadeVida(sanitizedHTML);
        setResultado(true);
                   
      console.log(sanitizedHTML);
      } catch (error) {
        console.error("Error al establecer los estados:", error);
        // Puedes manejar el error aquí o lanzarlo de nuevo para que sea capturado por el bloque catch externo
        throw error;
      }

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
    setResultado(false);
  };

  const handleAcepto = () => {
    if (acepto) {
      setAcepto(false);
    } else {
      setAcepto(true);
    }
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
      sinhijos: false,
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
          enCurso: false,
          logros: "Graduado con honores",
        },
      ],
      cesante: false,
      nombreEmpresa: "CapyData",
      lugarTrabajo: "Vitacura",
      cargo: "CEO",
      descTrabajo:
        "Gerente General de empresa de analítica avanzada CapyData, donde desarrollamos modelos de inteligencia artificial para nuestros clientes.",
      logrosLaborales:
        "Creación de aplicación para completación de Hoja de Vida para trámite de ciudadania Croata.",
      aporte:
        "A través de mi trabajo puedo aportar valor a las empresas Croatas mediante la creación de herramientas que les permitan ser más eficientes y productivas, alcanzando de mejor forma sus objetivos. Por otra parte, podría crear nuevos empleos para ciudadanos Croatas y así mejora su calidad de vida y contribuir al desarrollo del país.",
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
          "Ejemplo 1:\n" +
          "Mi antepasado croata decidió emigrar de Croacia a principios del siglo XX debido a las difíciles condiciones económicas que enfrentaba en su país natal. En ese momento, Croacia experimentaba inestabilidad política y económica, lo que dificultaba encontrar empleo y asegurar un futuro próspero. Mi antepasado anhelaba una vida mejor para sí mismo y para su familia, y la idea de buscar nuevas oportunidades en un lugar lejano como Chile parecía una opción prometedora. Fue en busca de una estabilidad económica y la posibilidad de construir un mejor futuro que tomó la valiente decisión de emigrar y establecerse en tierras chilenas." +
          "\n" +
          "Ejemplo 2:\n" +
          "Mi bisabuelo, un orgulloso croata de Dalmacia, tomó la decisión de abandonar su amada tierra natal a finales del siglo XIX debido a la difícil situación causada por la plaga de la filoxera. Esta plaga había devastado los viñedos de la región, que eran una fuente importante de sustento para muchas familias. La filoxera había diezmado las vides y arruinado la industria vitivinícola, dejando a muchas personas en una situación desesperada. Ante la falta de perspectivas económicas y la lucha por sobrevivir, mi bisabuelo tomó la dolorosa decisión de emigrar en busca de nuevas oportunidades en otro lugar, dejando atrás sus raíces y esperando encontrar un futuro mejor para él y su familia.",
        ocupacionDestino:
          "En Tocopilla trabajó en las pulperias que abastecian de carne a las salitreras. Posteriormente, instalo 4 carnicerias en pleno centro de la ciudad, donde trabajo por años junto a su hermano Martin. También fue integrante del Directorio de la Sociedad Yugoslava de Socorros Mutuos de Tocopilla.",
        seCaso: true,
        nombreConyuge: "Demofila Ors",
        anoCasamiento: "1914",
      },
      interesCroatas:
        "Ejemplo 1:\n" +
        "Como descendiente de croatas y criado en una familia que ha mantenido fuertes vínculos con la cultura croata, deseo obtener la ciudadanía para fortalecer mi conexión con mi país de origen. A lo largo de los años, he aprendido sobre la historia, las tradiciones y los valores croatas, y me siento profundamente arraigado en esa identidad. Obtener la ciudadanía croata me permitiría preservar y celebrar mi herencia, así como participar activamente en la vida social y política de Croacia. Además, tener la ciudadanía abriría un abanico de oportunidades tanto a nivel personal como profesional, ya que me brindaría la posibilidad de vivir y trabajar en Croacia, lo que ampliaría mis horizontes." +
        "\n" +
        "Ejemplo 2:\n" +
        "Para mí, obtener la ciudadanía croata va más allá de un simple documento. Es un medio para honrar a mis antepasados y mantener viva la memoria de mi familia. Aunque nací y crecí fuera de Croacia, siempre he sentido un profundo amor por mi país de origen. La ciudadanía croata sería un símbolo tangible de mi identidad y un recordatorio constante de mis raíces. Además, me brindaría la oportunidad de regresar a Croacia con mayor facilidad, conectarme con mi familia extendida y contribuir al desarrollo de la nación que lleva en mi corazón. Estoy emocionado por la posibilidad de experimentar la vida en Croacia de una manera más profunda y significativa, y estoy comprometido en mantener vivas nuestras tradiciones y valores croatas dentro y fuera del país.",
    });
  };
  
  return (
    <div className="container">
      <Modal />
      <h1>Hoja de Vida</h1>
      {resultado && (
        <div>
{estaEditando ? (
  <CKEditor
    initData={hojadevidaHTML}
    onChange={(evt) => {
      setHojadeVida(evt.editor.getData());
    }}
  />
) : (
  loedito ? (
    <div className="result" id="result">
    <div dangerouslySetInnerHTML={{ __html: hojadevidaHTML }} />
      </div>
  ) : (
    !loedito && <HojaDeVida formValues={formValues} response={respuesta} />
  )
)}

          
          <button onClick={manejarClickEditarGuardar}>
            {estaEditando ? "Guardar" : "Editar"}
          </button>
          <button onClick={imprimirPDF2}>Imprimir en PDF</button>
          <button onClick={modificarFormulario}>Volver al Formulario</button>
          <button
            onClick={handleSubmitTraducir}
            type="submit"
            className="button-final"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Traduciendo..." : "Traducir"}
          </button>
          <div align="center">
            <PacmanLoader color={color} loading={isSubmitting} />
          </div>
        </div>
      )}

      {!resultado && (
        <form onSubmit={handleSubmit} className="form">
          {/* Datos Personales */}
          <section>
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
          </section>
          
          {/* Datos de los hijos */}
          <section>
          <h2>Datos de los hijos</h2>
          <div>
            <label>
              Sin hijos
              <input
                type="checkbox"
                name="sinhijos"
                className="custom-checkbox"
                checked={formValues.sinhijos}
                onChange={handleInputChange}
              />
            </label>
          </div>
          {formValues.hijos.map((hijo, index) => (
            <div key={index}>
              <input
                type="text"
                className="input"
                name="nombre"
                value={hijo.nombre}
                onChange={(event) => handleArrayChange(event, index, "hijos")}
                placeholder={`Nombre del hijo(a) ${index + 1}`}
                disabled={formValues.sinhijos}
                required={!formValues.sinhijos}
              />
              <select
                className="input"
                name="sexo"
                value={hijo.sexo}
                onChange={(event) => handleArrayChange(event, index, "hijos")}
                disabled={formValues.sinhijos}
                required={!formValues.sinhijos}
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
                disabled={formValues.sinhijos}
                required={!formValues.sinhijos}
              />
              <button type="button" onClick={() => removeHijo(index)}>
                X
              </button>
            </div>
          ))}
          <button type="button" onClick={addHijo}>
            Agregar otro hijo
          </button>
          </section>
          
          {/* Datos académicos */}
          <section>
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
              <div className="form-container">
                <div className="column">
                  <input
                    type={date3 ? "date" : "text"}
                    name="anoFin"
                    value={academico.anoFin}
                    onClick={(e) => setDate3("01-01-2000")}
                    onInput={(e) => setDate3(e.target.value)}
                    onChange={(event) =>
                      handleArrayChange(event, index, "academicos")
                    }
                    placeholder="Fin Estudios    (Click en calendario) en blanco si esta en curso"
                    disabled={academico.enCurso}
                  />
                </div>
                <div className="column">
                  <label>
                    En curso
                    <input
                      type="checkbox"
                      name="enCurso"
                      className="custom-checkbox"
                      checked={academico.enCurso}
                      onChange={(event) =>
                        handleArrayChange(event, index, "academicos")
                      }
                    />
                  </label>
                </div>
              </div>
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
          </section>
          
          {/* Datos laborales */}
          <section>
          <h2>Datos laborales</h2>
          <label>
              Cesante o desocupado
              <input
                type="checkbox"
                name="cesante"
                className="custom-checkbox"
                checked={formValues.cesante}
                onChange={handleInputChange}
              />
          </label>
          <input
            type="text"
            className="input"
            name="nombreEmpresa"
            value={formValues.nombreEmpresa}
            onChange={handleInputChange}
            placeholder="Nombre de la empresa"
            disabled={formValues.cesante}
            required={!formValues.cesante}
          />
          <input
            type="text"
            className="input"
            name="lugarTrabajo"
            value={formValues.lugarTrabajo}
            onChange={handleInputChange}
            placeholder="Lugar de trabajo"
            disabled={formValues.cesante}
            required={!formValues.cesante}
          />
          <input
            type="text"
            className="input"
            name="cargo"
            value={formValues.cargo}
            onChange={handleInputChange}
            placeholder="Cargo"
            disabled={formValues.cesante}
            required={!formValues.cesante}
          />
          <input
            type="text"
            className="input"
            name="descTrabajo"
            value={formValues.descTrabajo}
            onChange={handleInputChange}
            placeholder="Breve descripcion de funciones"
            disabled={formValues.cesante}
            required={!formValues.cesante}
          />
          <input
            type="text"
            className="input"
            name="logrosLaborales"
            value={formValues.logrosLaborales}
            onChange={handleInputChange}
            placeholder="Logros laborales"
            disabled={formValues.cesante}
            required={!formValues.cesante}
          />
          <textarea
            type="text"
            rows={5}
            className="input"
            maxLength={400}
            name="aporte"
            value={formValues.aporte}
            onChange={handleInputChange}
            placeholder="¿Cómo puedes aportar con tu trabajo a Croacia?"
            disabled={formValues.cesante}
            required={!formValues.cesante}
          />
          </section>
          
          {/* Datos de familiares croatas */}
          <section>
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
          </section>
          
          {/* Datos del antepasado croata */}
          <section>
          <h2>Antepasado Croata</h2>
          <input
            type="text"
            name="nombre"
            value={formValues.antepasadoCroata.nombre}
            onChange={handleAntepasadoInputChange}
            placeholder="Nombre"
            required
          />
          <select
            name="parentesco"
            value={formValues.antepasadoCroata.parentesco}
            onChange={handleAntepasadoInputChange}
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
            onChange={handleAntepasadoInputChange}
            onClick={(e) => setDate4("01-01-2000")}
            onInput={(e) => setDate4(e.target.value)}
            placeholder="Fecha de Nacimiento     (Click en Calendario)"
            required
          />
          <input
            type="text"
            name="lugarNacimientoA"
            value={formValues.antepasadoCroata.lugarNacimientoA}
            onChange={handleAntepasadoInputChange}
            placeholder="Lugar de Nacimiento"
            required
          />
          <input
            type="text"
            name="nombrePadre"
            value={formValues.antepasadoCroata.nombrePadre}
            onChange={handleAntepasadoInputChange}
            placeholder="Nombre del Padre - No obligatorio"
          />
          <input
            type="text"
            name="nombreMadre"
            value={formValues.antepasadoCroata.nombreMadre}
            onChange={handleAntepasadoInputChange}
            placeholder="Nombre de la Madre - No obligatorio"
          />
          <input
            type={date5 ? "date" : "text"}
            name="fechaFallecimiento"
            value={formValues.antepasadoCroata.fechaFallecimiento}
            onChange={handleAntepasadoInputChange}
            onClick={(e) => setDate5("01-01-2000")}
            onInput={(e) => setDate5(e.target.value)}
            placeholder="Fecha de Fallecimiento     (Click en Calendario)"
            required
          />
          <input
            type="text"
            name="lugarFallecimiento"
            value={formValues.antepasadoCroata.lugarFallecimiento}
            onChange={handleAntepasadoInputChange}
            placeholder="Lugar de Fallecimiento"
            required
          />
          <input
            type="number"
            name="anoEmigracion"
            value={formValues.antepasadoCroata.anoEmigracion}
            onChange={handleAntepasadoInputChange}
            placeholder="Año de emigración"
            required
          />
          <input
            type="text"
            name="ciudadEmigro"
            value={formValues.antepasadoCroata.ciudadEmigro}
            onChange={handleAntepasadoInputChange}
            placeholder="Ciudad a la que emigró"
            required
          />
          <input
            type="text"
            name="paisEmigro"
            value={formValues.antepasadoCroata.paisEmigro}
            onChange={handleAntepasadoInputChange}
            placeholder="País al que emigró"
            required
          />
          <textarea
            type="text"
            rows={7}
            name="motivoEmigracion"
            maxLength={700}
            value={formValues.antepasadoCroata.motivoEmigracion}
            onChange={handleAntepasadoInputChange}
            placeholder="Motivo de la emigración
            Ej:
              Huir de la(s) Guerra(s)
              Plaga de la Filoxera
              Búsqueda de Mejores Oportunidades
              Familiares ya habian emigrado
              Persecusión étnica y/o política"
            required
          />
          <textarea
            type="text"
            rows={5}
            name="ocupacionDestino"
            maxLength={400}
            value={formValues.antepasadoCroata.ocupacionDestino}
            onChange={handleAntepasadoInputChange}
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
                onChange={handleAntepasadoInputChange}
              />
            </label>
          </div>
          {formValues.antepasadoCroata.seCaso && (
            <div>
              <input
                type="text"
                name="nombreConyuge"
                value={formValues.antepasadoCroata.nombreConyuge}
                onChange={handleAntepasadoInputChange}
                placeholder="Nombre del cónyuge"
                required
              />
              <input
                type="number"
                name="anoCasamiento"
                value={formValues.antepasadoCroata.anoCasamiento}
                onChange={handleAntepasadoInputChange}
                placeholder="Año Casamiento"
              />
            </div>
          )}
          </section>
          
          {/* Interés en Croacia */}
          <section>
          <h2>Interés en Obtener la Ciudadanía Croata</h2>
          <textarea
            name="interesCroatas"
            rows={12}
            maxLength={800}
            value={formValues.interesCroatas}
            onChange={handleInputChange}
            placeholder="¿Por qué está interesado(a) en la Ciudadania Croata?
            Ej: 
Vínculos culturales y emocionales: Muchos descendientes de croatas mantienen fuertes lazos culturales y emocionales con su país de origen. Obtener la ciudadanía croata permite fortalecer y preservar su identidad y herencia croata, así como mantener una conexión más estrecha con su cultura, tradiciones y lengua.

Derechos y beneficios: Obtener la ciudadanía croata brinda a los miembros de la diáspora croata una serie de derechos y beneficios en Croacia. Esto incluye el derecho a vivir, trabajar y estudiar en Croacia sin restricciones.

Facilitar la relación con Croacia: Al obtener la ciudadanía croata, los miembros de la diáspora croata pueden establecer una relación más sólida con Croacia. Esto les permite participar activamente en la vida política, social y económica del país.

Oportunidades laborales y empresariales: La ciudadanía croata puede abrir puertas a oportunidades laborales y empresariales en Croacia y la Unión Europea en general.

Seguridad y estabilidad: Para algunos miembros de la diáspora croata, obtener la ciudadanía croata puede proporcionar una mayor seguridad y estabilidad.
            "
            required
          />
          </section>

          {/* Botón de envío */}
          <section>
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
              <div align="center">
                <p className="range-label">
                  0: Determinista | 0.4: Recomendado | 0.7: Creativo | 1: Muy
                  Creativo
                </p>
                <p className="description">
                  Desplaza la barra para ajustar la creatividad de la Inteligencia
                  Artificial
                  <br />
                  NOTA: Creatividad al máximo podría generar información
                  imprecisa.
                </p>
                <p className="adjustment">
                  Creatividad:{" "}
                  <span className="creativity-value">
                    {formValues.creatividad}
                  </span>
                </p>
              </div>
              <div align="center">
                <a href="#" onClick={handleClickModal}>
                  Acepto los Términos y Condiciones
                </a>
                <input
                  type="checkbox"
                  name="acepto"
                  onChange={handleAcepto}
                ></input>
                {modalVisible && (
                  <Modal2 onClose={() => setModalVisible(false)} />
                )}
              </div>
            </div>
            <button
              type="submit"
              className="button-final"
              disabled={isSubmitting || acepto}
            >
            {isSubmitting
              ? "Generando con Inteligencia Artificial..."
              : "Crear Hoja de Vida"}
            </button>
            <div align="center">
              <PacmanLoader color={color} loading={isSubmitting} />
            </div>
          </section>
        </form>
      )}
    </div>
  );
};

export default Formulario;