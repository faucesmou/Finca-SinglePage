import React from "react";
import '../../styles/animations.css';
import Navegar2 from "../../../src/components/Navegar/Navegar2";

import FichaTecnicaLAMalbec from "../fichas/FichaTecnicaLAMalbec.pdf"
import FichaTecnicaCS2021 from "../fichas/FichaTecnicaCS2021.pdf"
import FichaTecnicaChardonnayLA from "../fichas/FichaTecnicaChardonnayLA.pdf"



const LosVinos = () => {



    let archivoPdf;
    const link = document.createElement('a');

    const handleDownloadPDF = (titulo, variedad) => {

        let pdfFileName;

        if (titulo === "LaArboleda" && variedad === "malbec") {
            archivoPdf = FichaTecnicaLAMalbec;
            pdfFileName = "LaArboleda-Malbec";
        } else if (titulo === "LaArboleda" && variedad === "cabernet") {
            archivoPdf = FichaTecnicaCS2021;
            pdfFileName = "LaArboleda-CS";
        } else if (titulo === "LaArboleda" && variedad === "chardonay") {
            archivoPdf = FichaTecnicaChardonnayLA;
            pdfFileName = "LaArboleda-ChardonayLA";
        }


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
        <div className="LosVinos-contenedorMayor" id="scroll-animate-main">

            
               <div className="wines-title-experience" id="losVinosInicio">
                <p>
                    <span className="letraGrandeExperience">N</span>UESTROS VINOS
                </p>
                </div> 

            <section className="cards">
                {/*  <div className="image-cards"> */}
                <div className="card">

                    <section className="image-cards" >
                        <div className="cadaVino" >
                            <img src="/Images/losvinos/Botellas_Finca/Finca_CS2021.png" alt="expresión" />
                        </div>
                    </section>

                    <section className="texto-container">
                        <div className="texto-item">
                            <p className="titulo-principal">LA ARBOLEDA</p>
                            <p className="titulo-variedad-CS">
                                CABERNET SAUVIGNON
                            </p>
                        </div>
                        <div className="ficha-caracteristicas">
                            <p className="subtitulo-tiempo-notas">TIEMPO EN BARRICAS</p>

                            <p>30% del vino durante 12 meses en barricas de roble francés.</p>

                            <p className="subtitulo-tiempo-notas">NOTAS DE CATA</p>

                            <span className="subtitulosNegrosFicha">Vista:</span> Rojo intenso, límpido y brillante. &nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Nariz:</span> Intensa, frutal y pirasínica, típico variedad. Persistente en el tiempo.&nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Boca:</span> Gran equilibrio, acidez en concordancia con taninos dulces. Intenso.
                            <br />Gran persistencia.&nbsp;
                        </div>

                        <div className="container-icono-boton" onClick={() => handleDownloadPDF("LaArboleda", "cabernet")}>
                            <div className="iconoDescargaLosVinos">
                                <img
                                    src="/Images/icons/descargaIcon.png"
                                   /*  src="/components/fichas/DescargaIcon2.png" */
                                   /*  src="/Images/losvinos/Botellas_Finca/descargaIcon2" */
                                    alt=""
                                />
                            </div>
                            <button
                                className="descargarFicha-button"
                              /*   onClick={() => handleDownloadPDF("LaArboleda", "cabernet")} */
                                type="submit"
                            >
                            Ficha Técnica
                            </button>

                        </div>

                    </section>
                </div>
                <div className="card">

                    <section className="image-cards" >
                        <div className="cadaVino" >
                            <img src="/Images/losvinos/Botellas_Finca/Finca_MB2021.png" alt="expresión" />
                        </div>
                    </section>

                    <section className="texto-container">
                        <div className="texto-item">
                            <p className="titulo-principal">LA ARBOLEDA</p>
                            <p className="titulo-variedad-Malbec">
                                MALBEC
                            </p>
                        </div>
                        <div className="ficha-caracteristicas">
                            <p className="subtitulo-tiempo-notas">TIEMPO EN BARRICAS</p>

                            <p>50% del vino durante 12 meses en barricas de roble francés y americano.</p>

                            <p className="subtitulo-tiempo-notas">NOTAS DE CATA</p>

                            <span className="subtitulosNegrosFicha">Vista:</span> Rojo con alos violáceos, límpido, brillante y profundo. &nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Nariz:</span>  Intensa, frutal, característico de la variedad. Persistente en el tiempo.&nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Boca:</span> Gran complejidad, con equilibrio de acidez. Taninos suaves y dulces.
                            <br />Gran persistencia.&nbsp;
                        </div>

                        <div className="container-icono-boton" onClick={() => handleDownloadPDF("LaArboleda", "malbec")}>
                            <div className="iconoDescargaLosVinos">
                                <img
                                    src="/Images/icons/descargaIcon.png"
                                    alt=""
                                />
                            </div>
                            <button
                                className="descargarFicha-button"
                               /*  onClick={() => handleDownloadPDF("LaArboleda", "malbec")} */
                                type="submit"
                            >
                            Ficha Técnica
                            </button>

                        </div>

                    </section>
                </div>
                <div className="card">

                    <section className="image-cards" >
                        <div className="cadaVino" >
                            <img src="/Images/losvinos/Botellas_Finca/Finca_CH2022.png" alt="expresión" />
                        </div>
                    </section>

                    <section className="texto-container">
                        <div className="texto-item">
                            <p className="titulo-principal">LA ARBOLEDA</p>
                            <p className="titulo-variedad-CH">
                             CHARDONNAY
                            </p>
                        </div>
                        <div className="ficha-caracteristicas">
                            <p className="subtitulo-tiempo-notas">TIEMPO EN BARRICAS</p>

                            <p>3 meses.</p>

                            <p className="subtitulo-tiempo-notas">NOTAS DE CATA</p>

                            <span className="subtitulosNegrosFicha">Vista:</span>  Límpido, verde con reflejos de amarillo. &nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Nariz:</span>  Frutal. Compleja, con predominio de frutos cítricos. Dejo de banana.&nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Boca:</span>  Excelente acidez, complejidad, redondez y persistencia en boca.
                        </div>

                        <div className="container-icono-boton" onClick={() => handleDownloadPDF("LaArboleda", "chardonay")}>
                            <div className="iconoDescargaLosVinos">
                                <img
                                    src="/Images/icons/descargaIcon.png"
                                    alt=""
                                />
                            </div>
                            <button
                                className="descargarFicha-button"
                              /*   onClick={() => handleDownloadPDF("LaArboleda", "chardonay")} */
                                type="submit"
                            >
                            Ficha Técnica
                            </button>

                        </div>

                    </section>
                </div>

               
            </section>
            <div className="wines-title-experience">
                <Navegar2 to="/" sectionId="biografia">
                    <li>Volver...</li>
                </Navegar2>
            </div>


        </div>
    )
}

export default LosVinos


 {/*   <div className="image-cards">

                        <article className="amigos">
                            <div className="cadaVino" >
                                <img
                                    src="/Images/losvinos/Botellas_Finca/Finca_CS2021_BE.png"
                                    alt="amigos"
                                    data-text="LaArboleda"
                                    data-variedad="cabernet"
                                />
                                <div className="button-container">

                                    <button
                                        className="descargarFicha-button"
                                        onClick={() => handleDownloadPDF("LaArboleda", "cabernet")}
                                        type="submit"
                                    >
                                        Descargar Ficha Técnica
                                    </button>

                                </div>
                            </div>
                        </article>

                    </div>

                    <div className="image-cards">

                        <article className="dueño">
                            <div className="cadaVino" >
                                <img
                                    src="/Images/losvinos/Botellas_Finca/Finca_CH2022_BE.png"
                                    alt="dueño"
                                />
                                <div className="button-container">

                                    <button
                                        className="descargarFicha-button"
                                        onClick={() => handleDownloadPDF("LaArboleda", "chardonay")}
                                        type="submit"
                                    >
                                        Descargar Ficha Técnica
                                    </button>

                                </div>
                            </div>
                        </article>

                    </div>
                </div> */}