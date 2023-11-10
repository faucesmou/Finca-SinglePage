import React, {/*  useEffect, */ useState } from "react";
import axios from "axios";


function Contacto() {


    const [formData2, setFormData2] = useState({
      nombreApellido: "",
      pais: "",
      telefono: "",
      email: "",
      preferencia: "",
      horario: "",
      producto: "",
    });

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
      const validationErrors = {};
      if (formData2.nombreApellido.trim() === "") {
        validationErrors.nombreApellido = "El nombre y Apellido es requerido";
      }
      if (formData2.pais.trim() === "") {
        validationErrors.pais = "El Pais es requerido";
      }
      if (formData2.telefono.trim() === "") {
        validationErrors.telefono = "El Teléfono es requerido";
      }
      if (formData2.email.trim() === "") {
        validationErrors.email = "El email es requerido";
      }
      if (formData2.preferencia.trim() === "") {
        validationErrors.preferencia = "La preferencia es requerida";
      }
      if (formData2.horario.trim() === "") {
        validationErrors.horario = "El horario es requerido";
      }
      if (formData2.producto.trim() === "") {
        validationErrors.producto = "El Producto es requerido";
      }
      setFormSubmitted(false);
      return validationErrors;
    };

    /*  const [selectedMonth, setSelectedMonth] = useState(""); */

    const handleSubmit = async () => {
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length === 0) {
        try {
          const dataFormulario = {
            FormData: formData2,
          };

          setFormData2({
            nombreApellido: "",
            pais: "",
            telefono: "",
            email: "",
            preferencia: "",
            horario: "",
            producto: "",
          });
          setErrors({});

          console.log("este es el dataFormulario--->", dataFormulario);
          setFormSubmitted(true);
          const response = await axios.post(
            "https://gmfp.createch.com.ar/api/submit-contactanos",
          /* "http://localhost:443/api/submit-formulario" */ dataFormulario
          );

          console.log(
            "Datos enviados al servidor: dataFormulario--->",
            dataFormulario
          );
          console.log("Respuesta del servidor:", response.data);
          // Redirección al usuario a la página que corresponda:
          /* 
          const respuestaPeticion = response.data.data.url;
          console.log("este es la respuestaPetición--->", respuestaPeticion);
          window.location.href = respuestaPeticion; */

          setFormSubmitted(true);
        } catch (error) {
          console.error("Error al enviar el Form al backend:---> ", error);
        }
      } else {
        setErrors(validationErrors);
        console.log("errores de validación: " + JSON.stringify(validationErrors));
        setFormSubmitted(true);
      }
    };

    return (

      <form
        onSubmit={(e) => e.preventDefault()}
        className="formContainer"
      >
        <div className="inputContainer">
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Nombre y Apellido"
            value={formData2.nombreApellido}
            onChange={(event) =>
              setFormData2((prevData) => ({
                ...prevData,
                nombreApellido: event.target.value,
              }))
            }
          />
          {errors.nombreApellido && (
            <span className="error-message">{errors.nombreApellido}</span>
          )}
        </div>
        </div>


        <div className="inputContainer">
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="País"
            value={formData2.pais}
            onChange={(event) =>
              setFormData2((prevData) => ({
                ...prevData,
                pais: event.target.value,
              }))
            }
          />
          {errors.pais && (
            <span className="error-message">{errors.pais}</span>
          )}
        </div>
        </div>

        <div className="inputContainer">
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Número de teléfono"
            value={formData2.telefono}
            onChange={(event) =>
              setFormData2((prevData) => ({
                ...prevData,
                telefono: event.target.value,
              }))
            }
          />
          {errors.telefono && (
            <span className="error-message">{errors.telefono}</span>
          )}
        </div>
        </div>

        <div className="inputContainer">
        <div className="inputWrapper">
          <input
            type="email"
            placeholder="Email"
            value={formData2.email}
            onChange={(event) =>
              setFormData2((prevData) => ({
                ...prevData,
                email: event.target.value,
              }))
            }
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        </div>

        <div className="inputContainer">
        <div className="inputWrapper">
          <select
            id="preferencia"
            name="preferencia"
            value={formData2.preferencia}
            onChange={(event) =>
              setFormData2((prevData) => ({
                ...prevData,
                preferencia: event.target.value,
              }))
            }
          >
            <option defaultValue="" hidden>
              Preferencia de contacto
            </option>
            <option value="Llamado">Llamado</option>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Correo electrónico">Correo electrónico</option>
          </select>
          {errors.preferencia && (
            <span className="error-message">{errors.preferencia}</span>
          )}
        </div>
        </div>

        <div className="inputContainer">
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="En qué horario desea que lo contactemos"
            value={formData2.horario}
            onChange={(event) =>
              setFormData2((prevData) => ({
                ...prevData,
                horario: event.target.value,
              }))
            }
          />
          {errors.horario && (
            <span className="error-message">{errors.horario}</span>
          )}
        </div>
        </div>
        <div className="inputContainer">
        <div className="inputWrapper">
          <select
            id="producto"
            name="producto"
            value={formData2.producto}
            onChange={(event) =>
              setFormData2((prevData) => ({
                ...prevData,
                producto: event.target.value,
              }))
            }
          >
            <option defaultValue="" hidden>
              Producto de interés
            </option>
            <option value="24 vides">24 vides</option>
            <option value="Hilera">Hilera</option>
            <option value="Terroir">Terroir</option>
          </select>
          {errors.producto && (
            <span className="error-message">{errors.producto}</span>
          )}
        </div>
        </div>
        <div className="inputWrapper">
        <button onClick={handleSubmit} type="submit" className="buttonSubmit" >
          Enviar
        </button>
                {formSubmitted && (
                  <span className="envioExito">
                    Formulario enviado con éxito! <br></br> A la brevedad nos comunicaremos
                    con usted.
                  </span>
                )}
        </div>
      </form>  )
  }

  export default Contacto;
