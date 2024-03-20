import React, { useEffect } from "react";
import $ from 'jquery';
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";


import FichaLaFinca from "../fichas/FincaPropia2024.pdf"


/* import backgroundImage from './Images/losvinos/Botellas_Finca/fondo-finca-2-01.jpg'; */



const LaFinca = () => {


    let archivoPdf = FichaLaFinca;
    const link = document.createElement('a');

    const handleDownloadPDF = () => {

        let pdfFileName = "LaFinca-Ficha-Técnica";

        console.log('Entrando a handleDownloadPDF');
        const pdfPath = archivoPdf;
        link.href = pdfPath;
        link.download = pdfFileName;
        document.body.appendChild(link);
        if (document.body.contains(link)) {
            setTimeout(() => {
                link.click();
                document.body.removeChild(link);
            }, 0);
        }
    }


    return (
        <div className="laFinca-contenedorMayor" id="scroll-animate-main" >


            <div className="biografia-experience" id="laFincaInicio">
                <p className="laFinca-title">
                    LA FINCA
                </p>
            </div>

            <section className="laFinca-caracteristicas-contenedor">

                <div className="laFinca-caracteristicas-tarjeta">

                    <p className="laFinca-titulo-caracteristica">UBICACIÓN</p>

                    <p> Mendoza, Valle de Uco,
                        Tupungato, en el distrito
                        de La Arboleda. </p>
                  
                    <p className="laFinca-titulo-caracteristica">EDAD DEL VIÑEDO</p>
                    <p> 24 años. </p>

                </div>

                <div className="laFinca-caracteristicas-tarjeta">

                    <p className="laFinca-titulo-caracteristica">ALTITUD</p>
                    <p>950 metros sobre el nivel del
                        mar. El momento correcto
                        para la plantación y cosecha
                        de vides para la elaboración
                        de vinos premium. </p>

                </div>

                <div className="laFinca-caracteristicas-tarjeta">
                    <p className="laFinca-titulo-caracteristica">ÁREA TOTAL</p>
                    <p> 54 hectáreas. </p>
                    <br />
                    
                    <p className="laFinca-titulo-caracteristica">VARIEDADES</p>
                    <p> Malbec,Cabernet y
                        Chardonnay.
                    </p>
                </div>

            </section>


            <section className="laFinca-imagenes-contenedor">

                <div className="laFinca-caracteristicas-tarjeta">

                    <img
                        src="/Images/Finca/finca1.jpg"
                        alt=""
                    />

                </div>

                <div className="laFinca-caracteristicas-tarjeta">


                <img
                        src="/Images/Finca/procesosuvas-02.jpg"
                        alt=""
                    />

                </div>

                <div className="laFinca-caracteristicas-tarjeta">

                <img
                        src="/Images/Finca/fondo-finca-2-01.jpg"
                        alt=""
                    />

                </div>

            </section>

            <section className="biografia-texto-completo-container">
                <div className="titulo-principal">
                    <p >TERROIR</p>
                </div>

                <div className="finca-caracteristicas">

                    <p> Frente a las estribaciones de la Cordillera de los Andes, con inviernos duros y veranos
                        calurosos con noches muy frías. Suelo arcilloso y limoso, bien drenado, que produce buena
                        materia colorante, taninos y perfecta acidez, dando como resultado uvas de excelente calidad.
                    </p>
                </div>

                <div className="titulo-secundario">
                    <p >SUELOS</p>
                </div>
                <div className="finca-caracteristicas">

                    <p> Suelos formados en la era mezozoica triásico superior. Profundos. Sin presencia de
                        gravas ni guijarros en el horizonte. De textura fina a moderadamente fina.
                    </p>
                </div>
                <div className="titulo-secundario">
                    <p >MALLA ANTIGRANIZO</p>
                </div>
                <div className="finca-caracteristicas">

                    <p>Tejido negro de alta densidad y baja presión, con una resistencia de 20 mm a
                        40 m/seg. En Argentina está controlado y reguladoo por el INTA. En viñedos de jerarquía donde
                        la uva se destina a la elaboración de vino premium, su uso es necesario para garantizar el 100%
                        de protección de la cosecha.
                    </p>

                </div>
                <div className="titulo-secundario">
                    <p >RIEGO POR GOTEO COMPUTARIZADO</p>
                </div>
                <div className="finca-caracteristicas">

                    <p>En un innovador sistema de riego utilizado en viñedos donde se
                        producen vinos de alta calidad. Permite regar correctamente la planta, creando condiciones
                        favorables de humedad en la zona radicular, proporcionando un mejor desarrollo de cultivo.
                        Garantiza el riego necesario durante todo el año, sin provocarle estrés hídrico a las plantas.
                        En Finca Propia este sistema se utiliza para fertirrigación, aportando los aditivos necesarios
                        para un óptimo desarrollo.
                    </p>
                </div>

            </section>

            <section className="laFinca-descargaFicha-container">
                <div className="container-icono-boton" onClick={() => handleDownloadPDF()}>
                    <div className="iconoDescargaFichaFinca">
                        <img
                            src="/Images/icons/descargaIcon.png"
                            alt="" />
                    </div>
                    <button
                        className="descargarFichaFinca-button"
                        type="submit">
                        Ficha Técnica
                    </button>
                </div>
            </section>

            <section className="laFinca-volver" >
                <Navegar2 to="/" sectionId="biografia">
                    <li>Volver al Inicio</li>
                </Navegar2>
            </section >


        </div >
    )
}

export default LaFinca

