import React from "react";
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";

import FichaTecnicaLAMalbec from "../fichas/FichaTecnicaLAMalbec.pdf"
import FichaTecnicaCS2021 from "../fichas/FichaTecnicaCS2021.pdf"
import FichaTecnicaChardonnayLA from "../fichas/FichaTecnicaChardonnayLA.pdf"



const LosVinosBrasil = () => {



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

                <section id="losVinosInicioBrasil"></section>
               <div className="wines-title-experience">
                <p>
                    <span className="letraGrandeExperience">N</span>UESTROS VINHOS
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
                            <p className="subtitulo-tiempo-notas">TEMPO EM BARRICAS</p>

                            <p>30% do vinho durante 12 meses em barris de carvalho francês.</p>

                            <p className="subtitulo-tiempo-notas">NOTAS DE PROVA</p>

                            <span className="subtitulosNegrosFicha">Vista:</span> Vermelho intenso, límpido e brilhante. &nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Nariz:</span> Intensa, frutada e pirazínica, típica da variedade. Persistente ao longo do tempo.&nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Boca:</span> Grande equilíbrio, acidez em harmonia com taninos suaves. Intenso.
                            <br />Grande persistência.&nbsp;
                        </div>

                        <div className="container-icono-boton" onClick={() => handleDownloadPDF("LaArboleda", "cabernet")}>
                            <div className="iconoDescargaLosVinos">
                               <img
                                    src="/Images/icons/descargaIcon.png"
                                    alt="dueño"
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
                            <p className="subtitulo-tiempo-notas">TEMPO EM BARRICAS</p>

                            <p>50% do vinho durante 12 meses em barris de carvalho francês e americano.</p>

                            <p className="subtitulo-tiempo-notas">NOTAS DE PROVA</p>

                            <span className="subtitulosNegrosFicha">Vista:</span> Vermelho com tons violáceos, límpido, brilhante e profundo. &nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Nariz:</span>  Intensa, frutada, característica da variedade. Persistente ao longo do tempo..&nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Boca:</span> Grande complexidade, com equilíbrio de acidez. Taninos suaves e doces.
                            <br />Grande persistência.&nbsp;
                        </div>

                        <div className="container-icono-boton" onClick={() => handleDownloadPDF("LaArboleda", "malbec")}>
                            <div className="iconoDescargaLosVinos">
                                 <img
                                    src="/Images/icons/descargaIcon.png"
                                    alt="dueño"
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
                            <p className="subtitulo-tiempo-notas">TEMPO EM BARRICAS</p>

                            <p>3 meses.</p>

                            <p className="subtitulo-tiempo-notas">NOTAS DE PROVA</p>

                            <span className="subtitulosNegrosFicha">Vista:</span>  Límpido, verde com reflexos amarelos. &nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Nariz:</span>  Frutada. Complexa, com predominância de frutas cítricas. Toque de banana.&nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Boca:</span>  Excelente acidez, complexidade, redondez e persistência na boca.
                        </div>

                        <div className="container-icono-boton" onClick={() => handleDownloadPDF("LaArboleda", "chardonay")}>
                            <div className="iconoDescargaLosVinos">
                               <img
                                    src="/Images/icons/descargaIcon.png"
                                    alt="dueño"
                                /> 
                            </div>
                            <button
                                className="descargarFicha-button"
                             /*    onClick={() => handleDownloadPDF("LaArboleda", "chardonay")} */
                                type="submit"
                            >
                            Ficha Técnica
                            </button>

                        </div>

                    </section>
                </div>
            </section>
            <div className="wines-title-experience">
                <Navegar2 to="/brasil" sectionId="losVinosBrasil">
                    <li>Voltar ao Início</li>
                </Navegar2>
            </div>


        </div>
    )
}

export default LosVinosBrasil


