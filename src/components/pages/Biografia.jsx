import React, { useEffect } from "react";
import $ from 'jquery';
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";

import FichaTecnicaLAMalbec from "../fichas/FichaTecnicaLAMalbec.pdf"
import FichaTecnicaCS2021 from "../fichas/FichaTecnicaCS2021.pdf"
import FichaTecnicaChardonnayLA from "../fichas/FichaTecnicaChardonnayLA.pdf"


/* import backgroundImage from './Images/losvinos/Botellas_Finca/fondo-finca-2-01.jpg'; */



const Biografia = () => {


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
                    "Soñamos con elaborar un vino auténtico, natural, fácil de beber,
                    que represente el
                    <br />
                    máximo potencial del terroir en variedad, sin modas, con magia y sinceridad."
                </p>
            </div>
            <div className="contenedor-de-cards-biografia">
                <section className="cards-biografia">
                    {/*  <div className="image-cards"> */}

                    <div className="card-biografia-imagen-texto">

                        <section className="image-cards-texto" >
                            <div className="contenedor-texto">

                                <p className="titulo-texto" >1968</p>

                                <p>Viajó a la Patagonia y
                                    transformó el proceso
                                    de vinificación en los
                                    años siguientes. Puso
                                    los cimientos del actual
                                    terroir patagónico, ya
                                    que comenzó a
                                    estudiar las variedades
                                    de vino y vinificar las
                                    variedades rojas y
                                    blancas por separado</p>
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

                                <p>Los vinos de Antonio se
                                    destacan por su alta
                                    calidad, lanzando vinos
                                    emblemáticos como
                                    Finca La Anita Syrah,
                                    Finca La Anita Sauvignon
                                    Blanc y Malbec Finca La
                                    Anita (1997), entre otros. El
                                    Malbec 1997 de Finca La
                                    Anita obtuvo 93 puntos
                                    según la puntuación
                                    excepcionalmente
                                    rigurosa de la revista
                                    estadounidense Wine&
                                    Spirits.
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
                                <p>Formó en parte de un
                                    proyecto de
                                    investigación junto con
                                    la Universidad Juan
                                    Agustín Maza, INTA
                                    (Instituto Nacional de
                                    Tecnología Agrícola) y
                                    Finca Propia sobre «La
                                    influencia de las
                                    especies aromáticas en
                                    Malbec, Cabernet
                                    Sauvignon y
                                    Chardonnay Aromas».
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

                                <p>Fundó la primera bodega
                                    boutique argentina:
                                    Finca La Anita, donde se
                                    inspiró en el concepto de
                                    Château francés: viñedos
                                    de gran pureza genética
                                    y variedad, identificando
                                    clones de cada variedad,
                                    y cultivando uvas y
                                    vinificándolas cerca del
                                    mismo lugar donde se
                                    plantaron, a partir de
                                    parcelas específicas,
                                    verdaderos viñedos
                                    individuales.o</p>
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

                                <p>En 2009, Antonio
                                    comenzó a ilusionarse con
                                    un proyecto que su hijo
                                    traía con el nombre de
                                    “Finca Propia”: 56
                                    hectáreas en el Valle de
                                    Uco, donde, en forma de
                                    fideicomiso, los
                                    propietarios podrán
                                    elaborar su propio vino y
                                    compartir experiencias y
                                    adquirir conocimientos.
                                    Una vez más dio un paso
                                    más, creando un producto
                                    único e innovador en una
                                    industria que parece no
                                    tener límites.


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
                                <p>Ya son más de 1500
                                    los propietarios que
                                    disfrutan de vivir la
                                    experiencia y el
                                    proceso de producir
                                    su propio vino.
                                    <br />
                                    <br />
                                    El proyecto traspasa
                                    las barreras
                                    nacionales para
                                    desarrollarse por
                                    primera vez en
                                    Paraguay y Brasil.

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


                    <p>Creador, amante y pionero de la vitivinicultura argentina, el reconocido agrónomo y enólogo
                        se destaca por su innovación en la industria, sus vinos de alta calidad y el excepcional
                        desarrollo de los viñedos.
                    </p>
                    <br />
                    <p >Pionero en el desarrollo y producción de vino a pequeña escala, Antonio Mas –enólogo
                        mendocino– ha tenido una enorme influencia en la vitivinicultura argentina durante los
                        últimos 20 años. Innovación, visión de futuro de la industria, gestión del terroir y vinos de la
                        más alta calidad son sinónimos de Mas. Destaca en el sector por estar siempre un paso por
                        delante, conocer como pocos el manejo del viñedo e incorporar tecnología avanzada. Es de los
                        pocos que sabe elaborar vino en la viña y prueba de ello se ve en cada uno de los proyectos
                        que realiza en la industria y, por eso, fue reconocido, junto con los vinos producidos</p>
                    <br />
                    <p>Hoy forma parte del emprendimiento Finca Propia. En él comparte toda su experiencia y su
                        devoción por la actividad a la que dedicó tantos años de su exitosa carrera, con quienes se
                        dejan seducir por una actividad que combina conocimiento, sofisticación, amor por la
                        naturaleza y espíritu creativo. Fue ahí donde Antônio encontró un proyecto adecuado para
                        esta etapa de su carrera. "Hoy hago vinos para consumidores que conozco y con quienes
                        puedo interactuar y, a partir de ahí, conocer sus opiniones y enriquecerme cada día", destaca
                        el agrónomo Antonio Mas.

                    </p>
                    <br />

                </div>
                <div className="titulo-secundario">
                    <p >El comienzo de la historia</p>
                </div>
                <div className="biografia-historia">

                    <p>Antonio Mas es el primero de su dinastía en resaltar esta pasión por la enología. Graduado de
                        la Facultad de Ciencias Agrícolas de Mendoza hace más de 40 años y con una maestría en
                        Economía Agrícola de la Universidad de Chicago, dio sus primeros pasos en la profesión en el
                        estado de Río Negro. Allí se dedicó a la viticultura y silvicultura, horticultura y fruticultura. En
                        sus años en RioNegro se convirtió en el primer formador de la Agencia de Extensión Rural del
                        INTA en Choel y Choel.

                    </p>


                </div>
                <div className="titulo-secundario">
                    <p >Bodega Boutique y vinos únicos</p>
                </div>
                <div className="biografia-historia">


                    <p>En 1992, Antonio regresó a Mendoza y decidió radicarse en Agrelo, Luján de Cuyo. En aquella época el terruño no era
                        reconocido y había muy pocas bodegas. Junto a su hermano fundó Finca La Anita, instalando el concepto de Chateau
                        Francés (Bodega Boutique) y viñedo único. Con sus vinos mostró al mundo las virtudes, tan en boga hoy, del terroir de
                        Agrelo.
                        <br />
                        <br />

                        El antiguo modelo era el de bodegas artesanales que los inmigrantes europeos desarrollaron en Mendoza a finales del
                        siglo XIX, prevaleciendo las tradiciones de las mejores bodegas de Europa. Antonio Mas rescató estos usos
                        desplazados en las últimas décadas por el fenómeno de la producción en masa. Utilizó uvas de su propia producción y
                        sólo produjo vinos cuando alcanzaron los más altos niveles de calidad. Antônio trabajó los viñedos con variedades tan
                        diversas como: Syrah, Friulano Tocai, Semillon, Petit Verdot, Blanc Sauvignan, Malbec y Cabernet Sauvignon, entre
                        otras.
                        <br />
                        <br />
                        Su pasión, poder de decisión y visión lo llevaron por un camino único y especial. Un camino que no tuvo miedo de
                        construir con sus propias manos.
                        <br />
                        <br />
                        Construyó el desarrollo basándose en su creencia de que "en una bodega pequeña, se pueden elaborar grandes
                        vinos". Desde entonces, la bodega argentina puso sus ojos en él.
                        <br />
                        <br />
                        Los vinos de Antonio se destacan por su alta calidad, lanzando vinos emblemáticos como Finca La Anita Syrah, Finca
                        La Anita Sauvignon Blanc y Malbec Finca La Anita (1997), entre otros. El Malbec 1997 de Finca La Anita obtuvo 93
                        puntos según la puntuación excepcionalmente rigurosa de la revista estadounidense Wine& Spirits.
                        <br />
                        <br />
                        El Malbec de Antonio fue elogiado por las más prestigiosas publicaciones: "Uno de los Malbec con
                        más personalidad del mercado argentino. Elaborado con uvas Agrelo, este vino se destaca por su
                        estilo único, elegancia y gran complejidad de aromas, además de su buena Paladar centrado,
                        equilibrado, armonioso y muy especial. “Una obra maestra ideal para ocasiones especiales”,
                        destacó uno de los principales críticos de vino del mundo.
                        <br />
                        <br />
                        Además, Robert Parker, una de las figuras más influyentes del mundo del vino, seleccionó los
                        mejores vinos de Argentina entre los que se encuentran en los vinos de Antonio.
                        <br />
                        <br />
                        Sus palabras respecto al Sauvignon Blanc 2006 fueron las siguientes: “Argentina elabora una
                        buena cantidad de vinos Sauvignon Blanc, desde aceptables hasta bastante buenos. Sin embargo,
                        una de nuestras bodegas líderes, Finca La Anita, que elabora algunos de nuestros vinos más
                        destacados, no ha elaborado Sauvignon Blanc hasta ahora. Hace muy poco recibí un par de
                        botellas de su primer vino SB, una cosecha de 2006. El vino es, ante todo, un vino de Antonio Mas:
                        elegante como un modelo y tan bien estructurado como una Torre de Londres. También se
                        diferencia de un Sauvignon Blanc local como un Torrontés de un Chardonnay. Si bien no se ha
                        sacrificado la delicadeza, hay un cuerpo firme que respalda una fruta seca tenue, atractiva y difícil
                        de precisar, realzada por el grado justo de acidez que proporciona una frescura seductora.
                        (Buenos Aires Herald, marzo de 2007).
                        <br />
                        <br />
                        El Cabernet Sauvignon de 1994 se vendió a 1.400 dólares la botella, una fortuna en ese momento, y
                        sus vinos costaban hasta 200 dólares.
                        <br />
                        <br />
                        "Que el público viva la experiencia de Anita en todo su esplendor, por otro lado, cada vez que
                        bebas una copa de cualquiera de estos vinos, sentirás el fruto del esfuerzo sublime por lograr un
                        recuerdo memorable. producto.Cada botella trae la historia de la cultura a la que pertenece, el
                        procedimiento utilizado para elaborar el vino, la dedicación, el mimo, la exigencia, el amor por el
                        vino", palabras que resumen su espíritu emprendedor y amante del vino.
                    </p>


                </div>
                <div className="titulo-secundario">
                    <p >Visión</p>
                </div>
                <div className="biografia-historia">


                    <p>En 2009, Antonio comenzó a ilusionarse con un proyecto que su hijo traía con el nombre de
                        “Finca Propia”: 56 hectáreas en el Valle de Uco, donde, en forma de fideicomiso, los
                        propietarios podrán elaborar su propio vino y compartir experiencias y adquirir
                        conocimientos. Una vez más dio un paso más, creando un producto único e innovador en una
                        industria que parece no tener límites.
                    </p>


                </div>
                <div className="titulo-secundario">
                    <p >Antonio hoy</p>
                </div>
                <div className="biografia-historia">


                    <p>Lidera el equipo técnico de “Finca Propia”, compartiendo toda su experiencia en el campo. Finca Propia
                        permite a los viticultores alcanzar su sueño de tener su propio viñedo. Te permite elaborar tu propio vino de
                        una forma accesible y sencilla.
                        <br />
                        <br />
                        En Finca Propia, fiel a sus principios, Antonio continúa produciendo vinos. Conoce cada una de tus plantas y
                        apuesta siempre más. Su nuevo emprendimiento no es ajeno a los principios de innovación e incorporación de
                        tecnología de punta.
                        <br />
                        <br />
                        Incorporó ROLL FERMENTOR, un sistema que muy pocas bodegas han adquirido debido a su alto costo y
                        porque se debe producir uva de alta calidad. Procedente de Francia, se utiliza para elaborar vinos tintos
                        elaborados en pequeñas cantidades pero de excelente calidad.
                        <br />
                        <br />
                        Se trata de un nuevo sistema que produce diferentes vinos y se utiliza para cantidades limitadas de vinos
                        premium.
                        <br />
                    </p>
                </div>

            </section>

            <section className="biografia-volver" >
                <Navegar2 to="/" sectionId="biografia">
                    <li>Volver...</li>
                </Navegar2>
            </section >


        </div >
    )
}

export default Biografia

