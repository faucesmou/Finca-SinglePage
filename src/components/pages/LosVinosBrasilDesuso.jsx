import React from "react";
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";

import FichaTecnicaLAMalbec from "../fichas/FichaTecnicaLAMalbec.pdf"
import FichaTecnicaCS2021 from "../fichas/FichaTecnicaCS2021.pdf"
import FichaTecnicaChardonnayLA from "../fichas/FichaTecnicaChardonnayLA.pdf"



const LosVinosBrasilDesuso = () => {



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

           {/*  <section id="losVinosInicioBrasil"></section> */}
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
                                    onClick={() =>handleDownloadPDF("LaArboleda", "malbec")}
                                    type="submit"
                                >
                                    Baixar Ficha Técnica
                                </button>

                            </div>
                        </div>
                    </article>
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
                                   /*  onClick={() => handleDownloadPDF("LaArboleda", "cabernet")} */
                                    type="submit"
                                >
                                    Baixar Ficha Técnica
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
                                   /*  onClick={() => handleDownloadPDF("LaArboleda", "chardonay")} */
                                    type="submit"
                                >
                                    Baixar Ficha Técnica
                                </button>

                            </div>
                        </div>
                    </article>
                   
                </div>
            </section>
            <div className="wines-title-experience">
                <Navegar2 to="/brasil" sectionId="losVinosBrasil">
                    <li>Voltar...</li>
                </Navegar2>
            </div>


        </div>
    )
}

export default LosVinosBrasilDesuso


