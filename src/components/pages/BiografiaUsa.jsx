import React, { useEffect } from "react";
import $ from 'jquery';
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";

import FichaTecnicaLAMalbec from "../fichas/FichaTecnicaLAMalbec.pdf"
import FichaTecnicaCS2021 from "../fichas/FichaTecnicaCS2021.pdf"
import FichaTecnicaChardonnayLA from "../fichas/FichaTecnicaChardonnayLA.pdf"


/* import backgroundImage from './Images/losvinos/Botellas_Finca/fondo-finca-2-01.jpg'; */



const BiografiaUsa = () => {


    useEffect(() => {
        // Selecciona todos los círculos dentro del contenedor-linea
        const circulos = $(".contenedor-linea .circulo");

        // Selecciona todos los contenedores de texto e imagen
        const contenedores = $(".cards-biografia .image-cards, .cards-biografia .image-cards-texto");

        // Calcula la posición horizontal del centro de cada contenedor
        const posicionesCentro = contenedores.map(function () {
            return $(this).offset().left + $(this).outerWidth() / 3;
        }).get();

        // Aplica las posiciones horizontales a los círculos
        circulos.each(function (index) {
            $(this).css("left", posicionesCentro[index] + "px");
        });
    }, []);


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
        <div className="biografia-contenedorMayor" id="scroll-animate-main" >


            <div className="biografia-experience" id="">
                <p>
                    "We dream of crafting an authentic, natural, easy-to-drink wine that represents
                    <br />
                    the maximum potential of the terroir in variety, free from trends, with magic and sincerity."
                </p>
            </div>
            <div className="contenedor-de-cards-biografia">
                <section className="cards-biografia">
                    {/*  <div className="image-cards"> */}

                    <div className="card-biografia-imagen-texto">

                        <section className="image-cards-texto" >
                            <div className="contenedor-texto">

                                <p className="titulo-texto" >1968</p>

                                <p>He traveled to Patagonia and transformed the winemaking process in the following years. He laid the foundations of the current Patagonian terroir, as he began to study wine varieties and vinify red and white varieties separately.</p>
                            </div>
                        </section>
                    </div>
                    <div className="card-biografia-imagen">

                        <section className="image-cards" >
                            <div className="cadaImagenBiografia"  >
                                <img src="/Images/biografia/biografia1.jpg" alt="expresión" />
                            </div>
                        </section>
                    </div>
                    <div className="card-biografia-imagen-texto">

                        <section className="image-cards-texto" >
                            <div className="contenedor-texto">

                                <p className="titulo-texto" >1997</p>

                                <p>Antonio's wines stand out for their high quality, launching iconic wines such as Finca La Anita Syrah, Finca La Anita Sauvignon Blanc, and Malbec Finca La Anita (1997), among others. The 1997 Malbec from Finca La Anita received 93 points according to the exceptionally rigorous scoring of the American magazine Wine & Spirits.
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="card-biografia-imagen">

                        <section className="image-cards" >
                            <div /* className="cadaImagenBiografia-texto" */  >
                                <img src="/Images/biografia/hilera-scaled-crop1.jpg" alt="expresión" />
                            </div>
                        </section>
                    </div>
                    <div className="card-biografia-imagen-texto">
                        <section className="image-cards-texto" >
                            <div className="contenedor-texto">
                                <div className="titulo-texto">
                                    <p className="titulo-texto" >2012</p>
                                </div>
                                <p>He was part of a research project in collaboration with Juan Agustín Maza University, INTA (National Institute of Agricultural Technology), and Finca Propia on 'The influence of aromatic species on Malbec, Cabernet Sauvignon, and Chardonnay aromas.'
                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="card-biografia-imagen">

                        <section className="image-cards" >
                            <div className="cadaImagenBiografia"  >
                                <img src="/Images/biografia/biografia2.jpg" alt="expresión" />
                            </div>
                        </section>
                    </div>

                </section>

                <div class="contenedor-linea">
                    <div className="circulo"></div>
                    <div className="circulo"></div>
                    <div className="circulo"></div>
                    <div className="circulo"></div>
                    <div className="circulo"></div>
                    <div className="circulo"></div>

                </div>


                <section className="cards-biografia">
                    {/*  <div className="image-cards"> */}


                    <div className="card-biografia-imagen">

                        <section className="image-cards-fila2" >
                            <div className="cadaImagenBiografia"  >
                                <img src="/Images/biografia/biografia3.jpg" alt="expresión" />
                            </div>
                        </section>
                    </div>
                    <div className="card-biografia-imagen-texto">

                        <section className="image-cards-texto-fila2" >
                            <div className="contenedor-texto">

                                <p className="titulo-texto" >1992</p>

                                <p>He founded the first Argentine boutique winery: Finca La Anita, where he drew inspiration from the French Château concept: vineyards of great genetic purity and variety, identifying clones of each variety and cultivating grapes and vinifying them near the same place where they were planted, from specific plots, true individual vineyards.</p>
                            </div>
                        </section>
                    </div>

                    <div className="card-biografia-imagen">

                        <section className="image-cards-fila2" >
                            <div /* className="cadaImagenBiografia-texto" */  >
                                <img src="/Images/biografia/biografia4.jpg" alt="expresión" />
                            </div>
                        </section>
                    </div>
                    <div className="card-biografia-imagen-texto">

                        <section className="image-cards-texto-fila2" >
                            <div className="contenedor-texto">

                                <p className="titulo-texto" >2009</p>

                                <p>In 2009, Antonio began to get excited about a project that his son brought with the name 'Finca Propia': 56 hectares in the Valle de Uco, where, through a trust, owners could craft their own wine, share experiences, and gain knowledge. Once again, he took a further step, creating a unique and innovative product in an industry that seems to have no limits.
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="card-biografia-imagen">

                        <section className="image-cards-fila2" >
                            <div className="cadaImagenBiografia"  >
                                <img src="/Images/biografia/biografia5.jpg" alt="expresión" />
                            </div>
                        </section>
                    </div>
                    <div className="card-biografia-imagen-texto">
                        <section className="image-cards-texto-fila2" >
                            <div className="contenedor-texto">
                                <div className="titulo-texto">
                                    <p className="titulo-texto" >2024</p>
                                </div>
                                <p>More than 1500 owners now enjoy living the experience and the process of producing their own wine.
                                    <br />
                                    <br />
                                    The project transcends national boundaries and is expanding for the first time in Paraguay and Brazil.
                                </p>
                            </div>
                        </section>
                    </div>


                </section >


            </div>

            <section className="biografia-texto-completo-container">
                <div className="titulo-principal">
                    <p >ANTONIO MAS</p>
                </div>

                <div className="biografia-historia">


                    <p>Creator, enthusiast, and pioneer of Argentine viticulture, the renowned agronomist and winemaker stands out for his innovation in the industry, high-quality wines, and exceptional development of vineyards.
                    </p>
                    <br />
                    <p >"Pioneer in the development and production of small-scale wine, Antonio Mas, a winemaker from Mendoza, has had a tremendous influence on Argentine viticulture over the past 20 years. Innovation, a forward-looking vision for the industry, terroir management, and wines of the highest quality are synonymous with Mas. He stands out in the sector for always being one step ahead, having an unparalleled understanding of vineyard management, and incorporating advanced technology. He is one of the few who knows how to make wine in the vineyard, and evidence of this is seen in each of the projects he undertakes in the industry. For these reasons, he has been recognized, along with the wines produced."</p>
                    <br />
                    <p>Today, he is part of the Finca Propia venture. Here, he shares all his experience and devotion for the activity to which he dedicated many years of his successful career with those who are captivated by an endeavor that combines knowledge, sophistication, love for nature, and a creative spirit. It is where Antonio found a suitable project for this stage of his career. 'Now, I make wines for consumers I know and can interact with, gathering their opinions to enrich myself every day,' emphasizes agronomist Antonio Mas.
                    </p>
                    <br />

                </div>
                <div className="titulo-secundario">
                    <p >The beginning of the story.</p>
                </div>
                <div className="biografia-historia">

                    <p>Antonio Mas is the first in his dynasty to highlight this passion for oenology. Graduated from the Faculty of Agricultural Sciences in Mendoza over 40 years ago and with a master's degree in Agricultural Economics from the University of Chicago, he took his first steps in the profession in the province of Río Negro. There, he dedicated himself to viticulture and silviculture, horticulture, and fruit cultivation. During his years in Rio Negro, he became the first trainer at the Rural Extension Agency of INTA in Choel and Choel.
                    </p>


                </div>
                <div className="titulo-secundario">
                    <p >Boutique Winery and Unique Wines.</p>
                </div>
                <div className="biografia-historia">


                    <p>In 1992, Antonio returned to Mendoza and decided to settle in Agrelo, Luján de Cuyo. At that time, the terroir was not well-recognized, and there were very few wineries. Alongside his brother, he founded Finca La Anita, introducing the concept of the French Chateau (Boutique Winery) and a unique vineyard. With his wines, he showcased to the world the virtues, now widely appreciated, of the Agrelo terroir.
                        <br />
                        <br />
                        The old model was that of artisanal wineries developed by European immigrants in Mendoza in the late 19th century, upholding the traditions of the finest wineries in Europe. Antonio Mas revived these practices displaced in recent decades by the mass production phenomenon. He used grapes from his own production and only produced wines when they reached the highest levels of quality. Antonio worked with vineyards featuring diverse varieties such as Syrah, Friulano Tocai, Semillon, Petit Verdot, Blanc Sauvignan, Malbec, and Cabernet Sauvignon, among others.
                        <br />
                        <br />
                        His passion, decision-making power, and vision led him down a unique and special path. A path he was not afraid to build with his own hands.
                        <br />
                        <br />
                    He built the development based on his belief that 'in a small winery, great wines can be crafted.' Since then, the Argentine winery set its sights on him.
                        <br />
                        <br />
                    Antonio's wines stand out for their high quality, launching iconic wines such as Finca La Anita Syrah, Finca La Anita Sauvignon Blanc, and Malbec Finca La Anita (1997), among others. The 1997 Malbec from Finca La Anita received 93 points according to the exceptionally rigorous scoring of the American magazine Wine & Spirits.
                        <br />
                        <br />
                        Antonio's Malbec was praised by the most prestigious publications: 'One of the most personality-driven Malbecs in the Argentine market. Crafted with Agrelo grapes, this wine stands out for its unique style, elegance, and great complexity of aromas, in addition to its well-centered, balanced, harmonious, and very special palate. 'A masterpiece ideal for special occasions,' noted one of the world's leading wine critics.
                        <br />
                        <br />
                        Additionally, Robert Parker, one of the most influential figures in the world of wine, selected the best wines from Argentina, including those of Antonio.
                        <br />
                        <br />
                        His words regarding the Sauvignon Blanc 2006 were as follows: 'Argentina produces a good number of Sauvignon Blanc wines, ranging from acceptable to quite good. However, one of our leading wineries, Finca La Anita, which produces some of our outstanding wines, has not crafted Sauvignon Blanc until now. I recently received a couple of bottles of their first SB wine, a 2006 vintage. The wine is, above all, an Antonio Mas wine: elegant as a model and as well-structured as the Tower of London. It also stands out from a local Sauvignon Blanc like a Torrontés from a Chardonnay. While delicacy has not been sacrificed, there is a firm body that supports a subtle, attractive, and elusive dried fruit, enhanced by the right level of acidity that provides a seductive freshness.' (Buenos Aires Herald, March 2007).
                        <br />
                        <br />
                        The 1994 Cabernet Sauvignon was sold for $1,400 per bottle, a fortune at that time, and his wines cost up to $200.
                        <br />
                        <br />
                        That the public experiences Anita in all its splendor; on the other hand, every time you drink a glass of any of these wines, you will feel the fruit of sublime effort to achieve a memorable product. Each bottle carries the story of the culture to which it belongs, the process used to make the wine, the dedication, care, demand, and love for the wine," words that encapsulate his entrepreneurial spirit and love for wine.
                    </p>


                </div>
                <div className="titulo-secundario">
                    <p >Vision</p>
                </div>
                <div className="biografia-historia">


                    <p>In 2009, Antonio began to get excited about a project that his son brought with the name 'Finca Propia': 56 hectares in the Valle de Uco, where, through a trust, owners could craft their own wine, share experiences, and acquire knowledge. Once again, he took a further step, creating a unique and innovative product in an industry that seems to have no limits.
                    </p>

                </div>
                <div className="titulo-secundario">
                    <p >Antonio today</p>
                </div>
                <div className="biografia-historia">


                    <p>He leads the technical team of 'Finca Propia,' sharing all his experience in the field. Finca Propia allows viticulturists to achieve their dream of having their own vineyard. It enables you to craft your own wine in an accessible and straightforward manner.
                        <br />
                        <br />
                        At Finca Propia, true to his principles, Antonio continues to produce wines. He knows each of his plants and always bets more. His new venture is not unfamiliar with the principles of innovation and the incorporation of cutting-edge technology.
                        <br />
                        <br />
                        He incorporated the ROLL FERMENTOR, a system that very few wineries have acquired due to its high cost and because it requires producing high-quality grapes. Originating from France, it is used to craft red wines in small quantities but of excellent quality.
                        <br />
                        <br />
                        It is a new system that produces different wines and is used for limited quantities of premium wines.
                        <br />
                    </p>
                </div>

            </section>

            <section className="biografia-volver" >
                <Navegar2 to="/usa" sectionId="fincaPropia">
                    <li>Return to the homepage</li>
                </Navegar2>
            </section >
        </div >
    )
}

export default BiografiaUsa

