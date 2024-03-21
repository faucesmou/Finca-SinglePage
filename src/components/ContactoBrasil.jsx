import React, { useEffect, useState } from "react";
import axios from "axios";



function ContactoBrasil() {


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
    const [formNotSubmitted, setFormNotSubmitted] = useState(false);

    useEffect(() => {
      // Después de que se activa el useEffect por el formulario enviado con éxito, configuramos un temporizador para desactivar el mensaje después de 5 segundos.
      if (formSubmitted) {
        const timer = setTimeout(() => {
          setFormSubmitted(false);
        }, 5000); // 
        return () => clearTimeout(timer);
      }
    }, [formSubmitted]);


    useEffect(() => {
      // Después de que se activa el useEffect por el formulario enviado con éxito, configuramos un temporizador para desactivar el mensaje después de 5 segundos.
      if (formNotSubmitted) {
        const timer = setTimeout(() => {
          setFormNotSubmitted(false);
        }, 5000); // 
        return () => clearTimeout(timer);
      }
    }, [formNotSubmitted]);











    const [errors, setErrors] = useState({});

    const validateForm = () => {
      const validationErrors = {};
      if (formData2.nombreApellido.trim() === "") {
        validationErrors.nombreApellido = "O nome e sobrenome são necessários.";
      }
      if (formData2.pais.trim() === "") {
        validationErrors.pais = "O país é necessário.";
      }
      if (formData2.telefono.trim() === "") {
        validationErrors.telefono = "O telefone é necessário.";
      }
      if (!isValidEmail(formData2.email) && formData2.email.trim() !== "" ) {
        validationErrors.email = "Formato de e-mail inválido";
      }
      if (formData2.email.trim() === "") {
        validationErrors.email = "O e-mail é necessário.";
      }
      if (formData2.preferencia.trim() === "") {
        validationErrors.preferencia = "A preferência é necessária.";
      }
      if (formData2.horario.trim() === "") {
        validationErrors.horario = "O horário é necessário.";
      }
      if (formData2.producto.trim() === "") {
        validationErrors.producto = "O produto é necessário.";
      }
      setFormSubmitted(false);
      return validationErrors;
    };

    const isValidEmail = (email) => {    
     /*  let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      */let re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|"(.+)")@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    };

  // Efecto para desplazar hacia abajo cuando formSubmitted cambia a true
useEffect(() => {
  if (formSubmitted) {
    // Desplazamiento hacia abajo una vez que el formulario se ha enviado con éxito
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "auto",
    });
  }
}, [formSubmitted]);

    const handleSubmit = async (e) => {
      e.preventDefault();
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
         
          const response = await axios.post(
            "https://gmfp.createch.com.ar/api/submit-contactanos",
          /* "http://localhost:443/api/submit-formulario" */ dataFormulario
          );

          console.log(
            "Datos enviados al servidor: dataFormulario--->",
            dataFormulario
          );
          console.log("Respuesta del servidor:", response.data);


         /*  window.location.hash = "#confirmationMessage"; */
         // Redirección al usuario a la página que corresponda:
         /* 
         const respuestaPeticion = response.data.data.url;
         console.log("este es la respuestaPetición--->", respuestaPeticion);
         window.location.href = respuestaPeticion; */
         
         setFormSubmitted(true);
      

        } catch (error) {
          console.error("Error al enviar el Form al backend:---> ", error);
          setFormNotSubmitted(true);
        }
      } else {
        setErrors(validationErrors);
        console.log("errores de validación: " + JSON.stringify(validationErrors));
        setFormSubmitted(false);
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
            id="nombre"
            placeholder="Nome e Sobrenome"
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
            id="pais"
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
            id="teléfono"
            placeholder="Número de telefone"
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
            id="email"
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
            Preferência de contato
            </option>
            <option value="Llamado">Ligação</option>
            <option value="Whatsapp">Whatsapp</option>
            <option value="Correo electrónico">Correo eletrônico</option>
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
            id="horario"
            placeholder="Em que horário você deseja ser contatado"
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
            Produto de interesse
            </option>
            <option value="24 vides">24 Vinhas</option>
            <option value="Hilera">Fila</option>
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
                  <span  className="envioExito" >
                    Formulário enviado com sucesso!  <br></br> Entraremos em contato com você em breve.
                  </span>
                )}
                {formNotSubmitted && (
                  <span className="envioExito" >
                    A informação não pôde ser enviada. <br></br>  Por favor, tente novamente mais tarde.
                  </span>
                )}
        </div>
      </form>  )
  }

  export default ContactoBrasil;
