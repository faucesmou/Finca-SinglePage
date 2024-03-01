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


            {/*   <div className="wines-title-experience">
                <p>
                    <span className="letraGrandeExperience">L</span>os vinos
                </p>
            </div> */}

            <section className="cards">
                <div className="image-cards">

                    <article className="expresion">
                        <div className="cadaVino" >
                            <img src="/Images/losvinos/Botellas_Finca/Finca_MB2021_BE.png" alt="expresión" />
                            <div className="button-container">

                                <button
                                    className="descargarFicha-button"
                                    onClick={() => handleDownloadPDF("LaArboleda", "malbec")}
                                    type="submit"
                                >
                                    Descargar Ficha Técnica
                                </button>

                            </div>
                        </div>
                    </article>
                  {/*   <section className="texto-container">
                        <div className="texto-item">
                            <p className="titulo-negro">La expresión de tu Terroir</p>
                            <p className="subtitulo-dorado">
                                Vinos intensos que nacen <br /> en el mejor viñedo
                            </p>
                        </div>
                    </section> */}
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


