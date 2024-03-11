import React from "react";
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";

import FichaTecnicaLAMalbec from "../fichas/FichaTecnicaLAMalbec.pdf"
import FichaTecnicaCS2021 from "../fichas/FichaTecnicaCS2021.pdf"
import FichaTecnicaChardonnayLA from "../fichas/FichaTecnicaChardonnayLA.pdf"



const LosVinosUsa = () => {



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

            
               <div className="wines-title-experience" id="losVinosInicioUsa">
                <p>
                    <span className="letraGrandeExperience">O</span>UR WINES
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
                            <p className="subtitulo-tiempo-notas">TIME IN BARRELS</p>

                            <p>30% of the wine for 12 months in French oak barrels.</p>

                            <p className="subtitulo-tiempo-notas">TASTING NOTES</p>

                            <span className="subtitulosNegrosFicha">Sight:</span> Intense red, clear, and bright.  &nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Nose:</span> Intense, fruity, and pyrazinic, typical of the variety. Persistent over time.&nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Palate:</span> Great balance, acidity in harmony with sweet tannins. Intense.
                            <br />Great persistence.&nbsp;
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
                            Technical Data Sheet
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
                            <p className="subtitulo-tiempo-notas">TIME IN BARRELS</p>

                            <p>50% of the wine for 12 months in French and American oak barrels.</p>

                            <p className="subtitulo-tiempo-notas">TASTING NOTES</p>

                            <span className="subtitulosNegrosFicha">Sight:</span> Red with violet hues, clear, bright, and deep. &nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Nose:</span> Intense, fruity, characteristic of the variety. Persistent over time.&nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Palate:</span> Great complexity with balanced acidity. Soft and sweet tannins.
                            <br />Great persistence.&nbsp;
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
                            Technical Data Sheet
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
                            <p className="subtitulo-tiempo-notas">TIME IN BARRELS</p>

                            <p>3 meses.</p>

                            <p className="subtitulo-tiempo-notas">TASTING NOTES</p>

                            <span className="subtitulosNegrosFicha">Sight:</span>  Clear, green with yellow reflections. &nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Nose:</span> Fruity. Complex, with a predominance of citrus fruits. Banana aftertaste.&nbsp;
                            <br />
                            <span className="subtitulosNegrosFicha">Palate:</span>  Excellent acidity, complexity, roundness, and persistence on the palate.
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
                            Technical Data Sheet
                            </button>

                        </div>

                    </section>
                </div>

               
            </section>
            <div className="wines-title-experience">
                <Navegar2 to="/usa" sectionId="fincaPropia">
                    <li>Back to the homepage.</li>
                </Navegar2>
            </div>


        </div>
    )
}

export default LosVinosUsa
