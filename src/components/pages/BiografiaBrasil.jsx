import React, { useEffect } from "react";
import $ from 'jquery';
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";

import FichaTecnicaLAMalbec from "../fichas/FichaTecnicaLAMalbec.pdf"
import FichaTecnicaCS2021 from "../fichas/FichaTecnicaCS2021.pdf"
import FichaTecnicaChardonnayLA from "../fichas/FichaTecnicaChardonnayLA.pdf"


/* import backgroundImage from './Images/losvinos/Botellas_Finca/fondo-finca-2-01.jpg'; */



const BiografiaBrasil = () => {


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
                    "Sonhamos em elaborar um vinho autêntico, natural, fácil de beber, que represente 
                    <br />
                    o máximo potencial do terroir em variedade, sem modismos, com magia e sinceridade."
                </p>
            </div>
            <div className="contenedor-de-cards-biografia">
                <section className="cards-biografia">
                    {/*  <div className="image-cards"> */}

                    <div className="card-biografia-imagen-texto">

                        <section className="image-cards-texto" >
                            <div className="contenedor-texto">

                                <p className="titulo-texto" >1968</p>

                                <p>Viajou para a Patagônia e transformou o processo de vinificação nos anos seguintes. Lançou as bases do atual terroir patagônico, pois começou a estudar as variedades de vinho e vinificar as variedades tintas e brancas separadamente. </p>
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

                                <p>Os vinhos de Antonio se destacam pela alta qualidade, lançando vinhos emblemáticos como Finca La Anita Syrah, Finca La Anita Sauvignon Blanc e Malbec Finca La Anita (1997), entre outros. O Malbec 1997 de Finca La Anita obteve 93 pontos segundo a pontuação excepcionalmente rigorosa da revista americana Wine & Spirits. 
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
                                <p>Participou de um projeto de pesquisa em conjunto com a Universidad Juan Agustín Maza, INTA (Instituto Nacional de Tecnologia Agrícola) e Finca Propia sobre "A influência das espécies aromáticas nos aromas de Malbec, Cabernet Sauvignon e Chardonnay".
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

                                <p>Fundou a primeira vinícola boutique argentina: Finca La Anita, onde se inspirou no conceito de Château francês: vinhas de grande pureza genética e variedade, identificando clones de cada variedade, cultivando uvas e vinificando-as próximo ao local onde foram plantadas, a partir de parcelas específicas, verdadeiras vinhas individuais.</p>
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

                                <p>Em 2009, Antonio começou a se entusiasmar com um projeto que seu filho trouxe com o nome de "Finca Propia": 56 hectares no Vale do Uco, onde, na forma de um fideicomisso, os proprietários poderão elaborar seu próprio vinho, compartilhar experiências e adquirir conhecimentos. 
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
                                <p>Já são mais de 1500 proprietários que desfrutam de viver a experiência e o processo de produzir seu próprio vinho.
                                    <br />
                                    <br />
                                    O projeto ultrapassa as barreiras nacionais para se desenvolver pela primeira vez no Paraguai e Brasil. 
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


                    <p>Criador, amante e pioneiro da viticultura argentina, o renomado agrônomo e enólogo destaca-se por sua inovação na indústria, seus vinhos de alta qualidade e o excepcional desenvolvimento dos vinhedos.
                    </p>
                    <br />
                    <p >Pioneiro no desenvolvimento e produção de vinho em pequena escala, Antonio Mas - enólogo mendocino - teve uma enorme influência na vitivinicultura argentina nos últimos 20 anos. Inovação, visão futurista da indústria, gestão do terroir e vinhos de altíssima qualidade são sinônimos de Mas. Destaca-se no setor por estar sempre um passo à frente, conhecer como poucos o manejo do vinhedo e incorporar tecnologia avançada. Ele é um dos poucos que sabe elaborar vinho na vinha, e essa habilidade é evidente em cada um dos projetos que realiza na indústria, sendo reconhecido junto com os vinhos produzidos.</p>
                    <br />
                    <p>Hoje, ele faz parte do empreendimento Finca Propia. Nele, compartilha toda a sua experiência e devoção pela atividade à qual dedicou tantos anos de sua bem-sucedida carreira, com aqueles que se deixam seduzir por uma atividade que combina conhecimento, sofisticação, amor pela natureza e espírito criativo. Foi aí que Antonio encontrou um projeto adequado para esta fase de sua carreira. "Hoje faço vinhos para consumidores que conheço e com quem posso interagir, conhecendo assim suas opiniões e enriquecendo-me a cada dia", destaca o agrônomo Antonio Mas.
                    </p>
                    <br />

                </div>
                <div className="titulo-secundario">
                    <p >O início da história.</p>
                </div>
                <div className="biografia-historia">

                    <p>
Antonio Mas é o primeiro de sua dinastia a destacar essa paixão pela enologia. Graduado pela Faculdade de Ciências Agrícolas de Mendoza há mais de 40 anos e com mestrado em Economia Agrícola pela Universidade de Chicago, ele deu seus primeiros passos na profissão no estado de Río Negro. Lá, dedicou-se à viticultura e silvicultura, horticultura e fruticultura. Em seus anos em Rio Negro, tornou-se o primeiro instrutor da Agência de Extensão Rural do INTA em Choel e Choel.

                    </p>


                </div>
                <div className="titulo-secundario">
                    <p >Vinícola Boutique e vinhos únicos</p>
                </div>
                <div className="biografia-historia">


                    <p>Em 1992, Antonio retornou a Mendoza e decidiu se estabelecer em Agrelo, Luján de Cuyo. Naquela época, o terroir não era reconhecido, e havia muito poucas vinícolas. Junto com seu irmão, fundou a Finca La Anita, introduzindo o conceito de Chateau Francês (Vinícola Boutique) e vinhedo único. Com seus vinhos, mostrou ao mundo as virtudes, tão em alta hoje, do terroir de Agrelo. 
                        <br />
                        <br />
                        O antigo modelo era o das vinícolas artesanais que os imigrantes europeus desenvolveram em Mendoza no final do século XIX, prevalecendo as tradições das melhores vinícolas da Europa. Antonio Mas resgatou esses métodos deslocados nas últimas décadas pelo fenômeno da produção em massa. Ele utilizou uvas de sua própria produção e só produziu vinhos quando atingiram os mais altos níveis de qualidade. Antonio trabalhou nos vinhedos com variedades tão diversas como: Syrah, Friulano Tocai, Semillon, Petit Verdot, Blanc Sauvignan, Malbec e Cabernet Sauvignon, entre outras.
                        <br />
                        <br />
                        Sua paixão, poder de decisão e visão o levaram por um caminho único e especial. Um caminho que não teve medo de construir com as próprias mãos.
                        <br />
                        <br />
                        Construiu o desenvolvimento com base em sua crença de que 'em uma vinícola pequena, se podem produzir grandes vinhos'. Desde então, a vinícola argentina colocou seus olhos nele.
                        <br />
                        <br />
                        
Os vinhos de Antonio se destacam pela alta qualidade, lançando vinhos emblemáticos como Finca La Anita Syrah, Finca La Anita Sauvignon Blanc e Malbec Finca La Anita (1997), entre outros. O Malbec de 1997 da Finca La Anita recebeu 93 pontos, de acordo com a pontuação excepcionalmente rigorosa da revista americana Wine & Spirits.
                        <br />
                        <br />
                        O Malbec de Antonio foi elogiado pelas publicações mais prestigiosas: "Um dos Malbecs com mais personalidade do mercado argentino. Elaborado com uvas de Agrelo, este vinho se destaca por seu estilo único, elegância e grande complexidade aromática, além de seu paladar centrado, equilibrado, harmonioso e muito especial. Uma obra-prima ideal para ocasiões especiais", destacou um dos principais críticos de vinho do mundo.
                        <br />
                        <br />
                        Além disso, Robert Parker, uma das figuras mais influentes do mundo do vinho, selecionou os melhores vinhos da Argentina, incluindo os vinhos de Antonio.
                        <br />
                        <br />
                        As palavras dele sobre o Sauvignon Blanc 2006 foram as seguintes: "A Argentina produz uma boa quantidade de vinhos Sauvignon Blanc, desde aceitáveis até bastante bons. No entanto, uma de nossas principais vinícolas, Finca La Anita, que elabora alguns de nossos vinhos mais destacados, não tinha produzido Sauvignon Blanc até agora. Recebi recentemente algumas garrafas do primeiro vinho SB deles, da safra de 2006. O vinho é, acima de tudo, um vinho de Antonio Mas: elegante como um modelo e tão bem estruturado quanto uma Torre de Londres. Também se destaca de um Sauvignon Blanc local como um Torrontés de um Chardonnay. Embora a delicadeza não tenha sido sacrificada, há um corpo firme que sustenta uma fruta seca sutil, atraente e difícil de precisar, realçada pelo grau certo de acidez que proporciona uma frescura sedutora. (Buenos Aires Herald, março de 2007).
                        <br />
                        <br />
                        O Cabernet Sauvignon de 1994 foi vendido por 1.400 dólares a garrafa, uma fortuna naquela época, e seus vinhos chegavam a custar até 200 dólares.
                        <br />
                        <br />
                        "Que o público viva a experiência de Anita em todo o seu esplendor; por outro lado, cada vez que beber uma taça de qualquer destes vinhos, sentirá o fruto do esforço sublime para criar uma lembrança memorável. Cada garrafa traz a história da cultura à qual pertence, o procedimento utilizado para elaborar o vinho, a dedicação, o carinho, a exigência, o amor pelo vinho", palavras que resumem o espírito empreendedor e amante do vinho.
                    </p>


                </div>
                <div className="titulo-secundario">
                    <p >Visión</p>
                </div>
                <div className="biografia-historia">


                    <p>Em 2009, Antonio começou a se entusiasmar com um projeto que seu filho trazia com o nome de "Finca Propia": 56 hectares no Vale do Uco, onde, por meio de um fideicomisso, os proprietários podem elaborar seu próprio vinho, compartilhar experiências e adquirir conhecimento. Mais uma vez, ele deu um passo adiante, criando um produto único e inovador em uma indústria que parece não ter limites. 
                    </p>


                </div>
                <div className="titulo-secundario">
                    <p >Antonio hoje</p>
                </div>
                <div className="biografia-historia">


                    <p>Continua liderando a equipe técnica da "Finca Propia", compartilhando toda sua experiência no campo. "Finca Propia" permite que viticultores alcancem o sonho de ter seu próprio vinhedo, elaborando seu próprio vinho de maneira acessível e simples.
                        <br />
                        <br />
                        Na Finca Propia, fiel aos seus princípios, Antonio continua produzindo vinhos. Ele conhece cada uma de suas plantas e sempre aposta mais. Seu novo empreendimento não foge aos princípios de inovação e incorporação de tecnologia de ponta.
                        <br />
                        <br />
                        Incorporou o ROLL FERMENTOR, um sistema que poucas vinícolas adquiriram devido ao seu alto custo e à necessidade de produzir uvas de alta qualidade. Proveniente da França, é utilizado para a elaboração de vinhos tintos em pequenas quantidades, mas de excelente qualidade.
                        <br />
                        <br />
                        Trata-se de um novo sistema que produz diferentes vinhos e é utilizado para quantidades limitadas de vinhos premium.
                        <br />
                    </p>
                </div>

            </section>

            <section className="biografia-volver" >
                <Navegar2 to="/brasil" sectionId="">
                    <li>Retornar à página principal.</li>
                </Navegar2>
            </section >


        </div >
    )
}

export default BiografiaBrasil

