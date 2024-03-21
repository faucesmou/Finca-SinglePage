import React, { useEffect } from "react";
import $ from 'jquery';
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";

import FichaLaFinca from "../fichas/FincaPropia2024.pdf"

/* import backgroundImage from './Images/losvinos/Botellas_Finca/fondo-finca-2-01.jpg'; */



const LaFincaUSA = () => {


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


            <div className="biografia-experience" id="laFincaInicioUsa">
                <p className="laFinca-title">
                The Vineyard
                </p>
            </div>

            <section className="laFinca-caracteristicas-contenedor">

                <div className="laFinca-caracteristicas-tarjeta">

                    <p className="laFinca-titulo-caracteristica">LOCATION</p>

                    <p> Mendoza, Uco Valley,
                         Tupungato, in the district
                         from The Grove. </p>
                  
                    <p className="laFinca-titulo-caracteristica">VINEYARD AGE</p>
                    <p> 24 years. </p>

                </div>

                <div className="laFinca-caracteristicas-tarjeta">

                    <p className="laFinca-titulo-caracteristica">ALTITUDE</p>
                    <p>950 meters above sea level
                         sea. The right time
                         for planting and harvesting
                         of vines for production
                         of premium wines. </p>

                </div>

                <div className="laFinca-caracteristicas-tarjeta">
                    <p className="laFinca-titulo-caracteristica">TOTAL AREA</p>
                    <p> 54 hectares. </p>
                    <br />
                    
                    <p className="laFinca-titulo-caracteristica">VARIETIES</p>
                    <p>Malbec,Cabernet and
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

                    <p> In front of the foothills of the Andes Mountains, with harsh winters and summers
                         hot with very cold nights. Clay and silty soil, well drained, which produces good
                         coloring matter, tannins and perfect acidity, resulting in grapes of excellent quality.
                    </p>
                </div>

                <div className="titulo-secundario">
                    <p >FLOORS</p>
                </div>
                <div className="finca-caracteristicas">

                    <p> Soils formed in the Upper Triassic Mezozoic era. Deep. Without presence of
                         gravel or pebbles on the horizon. Fine to moderately fine in texture.
                    </p>
                </div>
                <div className="titulo-secundario">
                    <p >ANTI-HAIL MESH</p>
                </div>
                <div className="finca-caracteristicas">

                    <p>High-density, low-pressure black fabric, with a resistance of 20 mm to
                         40 m/sec. In Argentina it is controlled and regulated by INTA. In hierarchy vineyards where
                         The grape is intended for the production of premium wine, its use is necessary to guarantee 100%
                         crop protection.
                    </p>

                </div>
                <div className="titulo-secundario">
                    <p >COMPUTERIZED DRIP IRRIGATION</p>
                </div>
                <div className="finca-caracteristicas">

                    <p>In an innovative irrigation system used in vineyards where
                         They produce high quality wines. Allows the plant to be watered correctly, creating conditions
                         favorable humidity in the root zone, providing better crop development.
                         It guarantees the necessary irrigation throughout the year, without causing water stress to the plants.
                         On the Own Farm this system is used for fertigation, providing the necessary additives
                         for optimal development.
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
                        Data sheet
                    </button>
                </div>
            </section>

            <section className="laFinca-volver" >
                <Navegar2 to="/usa" sectionId="losVinosSectionUsa">
                    <li>Return to home page</li>
                </Navegar2>
            </section >


        </div >
    )
}

export default LaFincaUSA

