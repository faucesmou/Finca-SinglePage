import React from "react";
import Contacto from "../Contacto";
import ContactoUsa from "../ContactoUsa";
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";
import ScrollToTopButton from '../ScrollToTopButton';
import FichaLaFinca from "../../components/fichas/FincaPropia2024.pdf";


function HomeUSA() {

  let archivoPdf = FichaLaFinca;
  const link = document.createElement('a');

  const handleDownloadPDF = () => {

    let pdfFileName = "Products-Technical-Sheet";

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
    <div className="Home" id="usa-scroll-animate-main">
      <div className="wrapper-parallax">
        <div className="parallax-container">
          <video autoPlay loop muted playsInline id="megavideofinca-usa">
            <source
              src="/video/Finca-propia-sin-sonido-arreglo-1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <section id="fincaPropiaUsa"></section>
        <div className="linea-dorada"></div>
        <div className="Home content">
          <section className="cards">
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">Live the experience</p>
                <p className="subtitulo-dorado">
                  Enjoy being the owner <br /> of your own wine.
                </p>
              </div>
            </section>
            <div className="image-cards">
              <article className="expresion">
                <div>
                  <img src="/Images/cande/seleccionCande/cosechandoChicas.jpeg" alt="expresión" />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/seleccionCande/cajonNoche.jpeg"
                    /*  src="/Images/home/IMG_4568-scaled-e1680126418462.jpg" */
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="dueño">
                <div>
                  <img
                    /*  src="/Images/home/MG_0160-scaled-e1680126635925.jpg" */
                    src="/Images/cande/seleccionCande/tirandoGorras.jpeg"
                    alt="dueño"
                  />
                </div>
              </article>
            </div>
          </section>

          <section className="cards">
            <div className="image-cards">
              <article className="expresion">
                <div>
                  <img
                    src="/Images/cande/seleccionCande/casitaAtardecer.jpeg"
                    alt="expresión"
                  />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/cartelFamilia.jpeg"
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/seleccionCande/3vinos.jpeg"
                    alt="amigos"
                  />
                </div>
              </article>

            </div>
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">The expression of your Terroir</p>
                <p className="subtitulo-dorado">
                  Intense wines that are born <br /> In the finest vineyard.
                </p>
              </div>
            </section>
          </section>
          <section className="cards">
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">Share with friends.</p>
                <p className="subtitulo-dorado">The fruit of your production.</p>
              </div>
            </section>
            <div className="image-cards">
              <article className="expresion">
                <div>
                  <img src="/Images/cande/seleccionCande/brindisAdentro.jpeg" alt="expresión" />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/seleccionCande/amigosAfuera.jpeg"
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="dueño">
                <div>
                  <img
                    src="/Images/cande/seleccionCande/brindisAntonio.jpeg"
                    alt="dueño"
                  />
                </div>
              </article>
            </div>
          </section>
          <section className="cards">
            <div className="image-cards">
              <article className="expresion">
                <div>
                  <img src="/Images/cande/fincaDron.jpeg" alt="expresión" />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/seleccionCande/cartelFamilia.jpeg"
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="dueño">
                <div>
                  <img
                    src="/Images/cande/seleccionCande/vidZoom.jpeg"
                    alt="dueño"
                  />
                </div>
              </article>
            </div>
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">Be the owner</p>
                <p className="subtitulo-dorado">Of the land.</p>
              </div>
            </section>
          </section>
          <section id="serDueno"></section>
          <div className="linea-dorada"></div>
          <div className="products-title">
            <p>
              <span className="letraGrande">P</span>RODUCTS
            </p>
          </div>
          <section className="products">
            <div className="image-cards">
              <article className="dueño">
                <div className="descripcion">
                  <p>24 Vines</p>
                </div>
                <div>
                  <img
                    src="/Images/dueno/24-vides-real-scaled.jpg"
                    alt="expresión"
                  />
                </div>
                <div className="descripcion">
                  <ul className="detail">
                    <div className="linea-dorada"></div>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      40 linear meters of vines (100m2).
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      75 kg of grapes per harvest
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      72 bottles of wine per year.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      Guaranteed harvest without risks.
                    </li>
                  </ul>
                  <p className="total-precio">USD 5.000</p>
                  <div className="linea-dorada"></div>
                </div>
              </article>

              <article className="dueño">
                <div className="descripcion">
                  <p>Row</p>
                </div>
                <div>
                  <img src="/Images/dueno/hilera-scaled.jpg" alt="amigos" />
                </div>
                <div className="descripcion">
                  <ul className="detail">
                    <div className="linea-dorada"></div>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      80 linear meters of vines (200m2)
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      150 kg of grapes per harvest.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      144 bottles of wine per year.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      Guaranteed harvest without risks.
                    </li>
                    <p className="total-precio">USD 8.000</p>
                  </ul>
                  <div className="linea-dorada"></div>
                </div>
              </article>
              <article className="dueño">
                <div className="descripcion">
                  <p>Terroir</p>
                </div>
                <div>
                  <img src="/Images/dueno/terroir-scaled.jpg" alt="dueño" />
                </div>
                <div className="descripcion">
                  <ul className="detail">
                    <div className="linea-dorada"></div>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      200 linear meters of vines (400m2)
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      375 kg of grapes per harvest.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      360 bottles of wine per year.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      Guaranteed harvest without risks.
                    </li>
                  </ul>
                  {/*   <li className="total-precio">USD 14.800 </li> */}
                  <p className="total-precio">USD 14.800</p>
                  <div className="linea-dorada"></div>
                </div>
              </article>
            </div>
          </section>


          <section className="home-descargaFicha-container">
            <div className="container-icono-boton" onClick={() => handleDownloadPDF()}>
              {/* <div className="iconoDescargaFichaFinca">
                        <img
                            src="/Images/icons/descargaIcon.png"
                            alt="" />
                    </div> */}
              <button
                className="descargarFichaFinca-button"
                type="submit">
                Download Product Sheet
              </button>
            </div>
          </section>
          <div className="linea-dorada3"></div>

          <p className="fraseFinal">
            CUSTOMIZED WINES WITH SIGNATURE/LOGO/PHRASE/DESIGN ON OWN LABEL.
          </p>
          <div className="linea-dorada"></div>
          <div className="products-title-experience">
            <p>
              <span className="letraGrandeExperience">E</span>xperience &nbsp;
              <span className="letraGrandeExperience">O</span>wners
            </p>
          </div>
          <section id="experienciaPropietarios"></section>
          <section className="products">
            <div className="image-cards-experience">
              <article className="experience-container">
                <div className="experience-descripcion">
                  <div className="container-comilla-linea">
                    <div className="texto-comillas">“</div>
                    <div className="linea-dorada2"></div>
                  </div>
                  <div className="statements">
                    <span>
                      Being part of Finca Propia made me live the world of wine as the owner of a vineyard.<br></br>A unique experience.
                    </span>
                  </div>
                  <p className="author-statement">
                    Fernando - Province of San Luis
                  </p>
                </div>
                <div>
                  <img
                    src="/Images/cande/familia.jpg"
                    alt="expresión"
                  />
                </div>
              </article>

              <article className="experience-container">
                <div className="experience-descripcion">
                  <div className="container-comilla-linea">
                    <div className="texto-comillas">“</div>
                    <div className="linea-dorada2"></div>
                  </div>
                  <div className="statements">
                    <span>
                      Visiting the vineyard and learning about all the effort and processes behind a bottle of wine completely changed my perception.
                    </span>
                  </div>
                  <div className="author-statement">
                    <p>Marcelo - Province of Buenos Aires</p>
                  </div>
                </div>
                <div>
                  <img src="/Images/cande/brindisAmigas.jpg" alt="amigos" />
                </div>
              </article>
              <article className="experience-container">
                <div className="experience-descripcion">
                  <div className="container-comilla-linea">
                    <div className="texto-comillas">“</div>
                    <div className="linea-dorada2"></div>
                  </div>
                  <div className="statements">
                    <span>
                      Being able to participate in activities, receive real-time information, and consult with experts makes you learn a lot quickly.
                    </span>
                  </div>
                  <div className="author-statement">
                    <p>Graciela - Province of Santa Fé</p>
                  </div>
                </div>
                <div>
                  <img
                    src="/Images/cande/extranjeros.jpeg"
                    alt="dueño"
                  />
                </div>
              </article>
            </div>
          </section>
          <div className="linea-dorada"></div>


          {/* Menor a 500px se muestra el siguiente section(responsive)----------------------------------------------------------- */}
          {window.innerWidth <= 500 && (


            /* Seccion  CONDICIONAL PEQUEÑO ---EMPIEZA CON BIOGRAFÍA para responsive!------------------------------------->>> */

            <section className="conditional-small-size">
              <section id="biografiaUsa"></section>


              {/* <div className="linea-dorada"></div> */}
              <div className="products-title-experience">
                <p>
                  <span className="letraGrandeExperience">A</span>ntonio Mas &nbsp;
                  <span className="letraGrandeExperience">W</span>inemaker
                </p>
              </div>
              <section id="experienciaPropietarios"></section>
              <section className="products">
                <div className="image-cards-experience">
                  <article className="experience-container">
                    <div>
                      <img
                        src="/Images/winemaker/antonio-mas-antonio-mas-698x1024-1.jpg"
                        alt="expresión"
                      />
                    </div>
                    <div className="experience-descripcion">
                      <div className="container-comilla-linea">
                        {/*    <div className="texto-comillas">“</div> */}
                        <div className="linea-dorada2"></div>
                      </div>
                      <div className="statements">
                        <span>
                          In 2010, Antonio once again innovated with Finca Propia, a project that allowed him to take the time to choose the vineyard of his dreams. After exploring both well-known and remote terroirs in his beloved province, he fell in love with lands framed by the mountains, featuring a significant slope between the two extremes and soil that would provide a style with the intensity and elegance he always sought for his wines.</span>
                      </div>
                    </div>

                  </article>

                </div>
              </section>
              <div className="linea-dorada"></div>
              <section id="losVinos"></section>
              <div className="wines-title-experience">
                <p>
                  <span className="letraGrandeExperience">T</span>he wines
                </p>
              </div>
              <section className="products">
                <div className="image-cards">
                  <article className="vino">

                    <div>
                      <img
                        src="/Images/losvinos/Botellas_Finca/Finca_MB2021.png"
                        alt="expresión"
                      />
                    </div>
                    <div className="descripcion"></div>

                  </article>

                  <article className="vino">

                    <div>
                      <img src="/Images/losvinos/Botellas_Finca/Finca_CS2021.png" alt="amigos" />
                    </div>
                    <div className="descripcion">

                    </div>
                  </article>
                  <article className="vino">

                    <div>
                      <img src="/Images/losvinos/Botellas_Finca/Finca_CH2022_1512_4752.png" alt="dueño" />
                    </div>
                    <div className="descripcion"></div>



                  </article>
                </div>
              </section>

              <div className="wines-title-experience">
                <Navegar2 to="/usa" sectionId="contacto">
                  <li>More information</li>
                </Navegar2>
              </div>






              <section id="laFincaUsa"></section>



              <div className="products-title">
                <p>
                  <span className="letraGrande">C</span>ONTACT
                </p>
              </div>
              <div className="contact-products-title">
                <p>
                  <span className="letraGrande">A</span>RGENTINA
                </p>
              </div>

              <section className="products">
                <div className="image-cards">
                  <article className="dueño2">
                    <div className="descripcion">
                      <button className="contact-media-button">
                        Ruta 88 Intersección Calle Campagnaro - Valle de Uco
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        (+54) 9 2613 300621
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        contacto@fincapropia.com
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="social-media-button">
                        <span className="our-social-networks-text">OUR SOCIAL NETWORKS</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer">

                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>

                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>
                      </button>
                    </div>


                  </article>


                </div>
              </section>
              <div className="contact-products-title">
                <p>
                  <span className="letraGrande">B</span>RASIL
                </p>
              </div>
              <section className="products">
                <div className="image-cards">
                  <article className="dueño2">
                    <div className="descripcion">
                      <button className="contact-media-button">
                        Av. Miruna 1569 - São Paulo - Brasil
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        (+55) 11 93022 7013
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        propietariosbrasil@fincapropia.com <br />
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="social-media-button">
                        <span className="our-social-networks-text">OUR SOCIAL NETWORKS</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer" >
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>
                      </button>
                    </div>
                  </article>


                </div>
              </section>
              <div className="contact-products-title">
                <p>
                  <span className="letraGrande">P</span>ARAGUAY
                </p>
              </div>
              <section className="products">
                <div className="image-cards">
                  <article className="dueño2">
                    <div className="descripcion">
                      <button className="contact-media-button">
                        Asunción: WTC torre 2 piso 10
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        (+59) 5 992 925106
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="contact-media-button">
                        atencion.paraguay@fincapropia.com
                      </button>
                    </div>
                    <div className="descripcion">
                      <button className="social-media-button">
                        <span className="our-social-networks-text">OUR SOCIAL NETWORKS</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer" >
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>

                      </button>
                    </div>
                  </article>
                </div>
                <section id="contacto"></section>
              </section>
              {/* -------------------------ACÁ TERMINA EL RESPONSIVE PEQUEÑO------------------------------- */}
              <div className="contact-products-title">
                <p>
                  <span className="letraGrande">C</span>ONTACT
                </p>
              </div>
              <section className="products">
                <div className="image-cards">
                  <article className="dueño2">
                    <div className="descripcion">
                     {/*  <Contacto /> */}
                      <ContactoUsa />

                    </div>
                  </article>
                </div>
              </section>
            </section>




          )}
          {/* Mayor a 500px se muestra el siguiente section(responsive)----------------------------------------------------------- */}
          {window.innerWidth > 500 && (

            <section className="conditional-big-size">

              {/* SECCIÓN DE LA BIOGRAFÍA ---------------------------------------Pantalla grande->>> */}
              <section id="biografiaUsa"></section>
              <section className="cards-biografia">
                <div className="image-cards-biografia">
                  {/* <article className="expresion">
                <div>

                </div>
                </article> */}
                  {/*  <article className="amigos">
                <div>

                </div>
                </article> */}
                  <article className="amigos">
                    <div>
                      <img
                        src="/Images/winemaker/antonio-mas-antonio-mas-698x1024-1.jpg"
                        alt="amigos"
                      />
                    </div>
                  </article>

                </div>
                <section className="texto-container-biografia">
                  <div className="texto-item">
                    <p className="titulo-negro-biografia">
                      <span className="letraGrande">A</span>ntonio Mas</p>
                    <p className="titulo-dorado-biografia">Winemaker</p>
                    <p className="subtitulo-dorado-biografia">
                      In 2010, Antonio once again innovated with Finca Propia, a project that allowed him to take the time to choose the vineyard of his dreams. After exploring both well-known and remote terroirs in his beloved province, he fell in love with lands framed by the mountains, featuring a significant slope between the two extremes and soil that would provide a style with the intensity and elegance he always sought for his wines. There, in Paraje Dubois, La Arboleda, 7 kilometers from the town of Tupungato, surrounded by Argentina's most renowned vineyards, Antonio decided to do something different.
                      <br />
                      <br />
                      This project stems from the desire and curiosity to personally know and share moments with those who enjoy his wines. For Antonio, creating wine is not just about selling it to a store; it goes beyond that. With the Finca Propia project, Antonio not only continues to craft memorable wines but also takes pleasure in sharing experiences with those who join him in this venture. Those who have acquired parts of this outstanding vineyard appreciate and enjoy the process of creating a product from the land, learning what it takes to make a terroir-driven wine.
                      {/*   más biografía  <br />
                  más biografía  <br /> */}
                    </p>
                  </div>
                  <div className="wines-title-experience">
                    <ScrollToTopButton>
                      <Navegar2 to="/biografiaUsa" sectionId="">
                        <li>Access the Biography</li>
                      </Navegar2>
                    </ScrollToTopButton>
                  </div>
                </section>
              </section>
              <section id="laFincaUsaHome"></section>
              <div className="linea-dorada"></div>

              <div className="wines-title-experience">
                <p>
                  <span className="letraGrandeExperience">T</span>he Vineyard
                </p>
              </div>


              <section className="cards-finca">

                <div className="image-cards-finca">
                  <article >
                    <div  >
                      <img src="/Images/Finca/fondo-finca-2-01.jpg" alt="expresión" />
                    </div>
                  </article>
                </div>

              </section>
              <div className="wines-title-experience">
                <ScrollToTopButton>
                  <Navegar2 to="/laFincaUsa" sectionId="laFincaInicioUsa">
                    <li>More information</li>
                  </Navegar2>
                </ScrollToTopButton>
              </div>
              <div className="linea-dorada"></div>



              <section id="losVinosSectionUsa"></section>

              <div className="wines-title-experience">
                <p>
                  <span className="letraGrandeExperience">T</span>he wines
                </p>
              </div>
              <section className="cards">

                <div className="image-cards">
                  <article className="expresion">
                    <div className="cadaVino" >
                      <img src="/Images/losvinos/Botellas_Finca/Finca_MB2021.png" alt="expresión" />
                    </div>
                  </article>
                  <article className="amigos">
                    <div className="cadaVino" >
                      <img
                        src="/Images/losvinos/Botellas_Finca/Finca_CS2021.png"
                        /*  src="/Images/home/IMG_4568-scaled-e1680126418462.jpg" */
                        alt="amigos"
                      />
                    </div>
                  </article>
                  <article className="dueño">
                    <div className="cadaVino" >
                      <img
                        /*  src="/Images/home/MG_0160-scaled-e1680126635925.jpg" */
                        src="/Images/losvinos/Botellas_Finca/Finca_CH2022_1512_4752.png"
                        alt="dueño"
                      />
                    </div>
                  </article>
                </div>
              </section>
              <div className="wines-title-experience">
                <ScrollToTopButton>
                  <Navegar2 to="/LosVinosUsa" sectionId="losVinosInicioUsa">
                    <li>More information</li>
                  </Navegar2>
                </ScrollToTopButton>
              </div>
              {/*   <div className="wines-title-experience">
                <Navegar2 to="/LosVinos" sectionId="losVinosInicio">
                  <li>Más información...</li>
                </Navegar2>
              </div> */}
              <div className="linea-dorada"></div>

              <section id="laFinca"></section>

              <section id="contacto"></section>
              <div className="products-title">
                <p>
                  <span className="letraGrande">O</span>FFICES
                </p>
              </div>
              <section className="products">
                <div className="contact-image-cards">
                  <article className="experience-container">
                    <div className="contacto-descripcion">
                      <div className="paises-contacto">
                      </div>
                      <p>ARGENTINA</p>
                    </div>
                    <div className="container-buttons">
                      <button>
                        Ruta 88 Intersección Calle Campagnaro - Valle de Uco
                      </button>
                      <button>(+54) 9 2613 300621</button>
                      <button>contacto@fincapropia.com</button>
                      <button className="social-media-button">
                        <span className="our-social-networks-text">OUR SOCIAL NETWORKS</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>
                        {/*  <span className="image-icon">ICON</span> */}
                      </button>
                    </div>
                    {/*  <div className="author-statement">
                      <p>Subtexto final</p>
                    </div> */}
                  </article>

                  <article className="experience-container">
                    <div className="contacto-descripcion">
                      <div className="paises-contacto">
                        <p>BRASIL</p>
                      </div>
                    </div>
                    <div className="container-buttons">
                      <button>Av. Miruna 1569 - São Paulo - Brasil</button>
                      <button className="contact-button">
                        <span className="phone-number">(+55) 11 93022 7013</span>
                      </button>

                      <button className="">propietariosbrasil@fincapropia.com</button>
                      <button className="social-media-button">
                        <span className="our-social-networks-text">OUR SOCIAL NETWORKS</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>
                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>
                        {/*  <span className="image-icon">ICON</span> */}
                      </button>
                    </div>
                    {/*    <div className="author-statement">
                      <p>Subtexto final</p>
                    </div> */}
                  </article>
                  <article className="experience-container">
                    <div className="contacto-descripcion">
                      <div className="paises-contacto">
                        <p>PARAGUAY</p>
                      </div>
                    </div>
                    <div className="container-buttons">
                      <button>Asunción: WTC torre 2 piso 10</button>
                      <button> (+59) 5 992 925106</button>
                      <button>atencion.paraguay@fincapropia.com</button>
                      <button className="social-media-button">
                        <span className="our-social-networks-text">OUR SOCIAL NETWORKS</span>
                        <a href="https://www.facebook.com/fincapropia" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                          >
                            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
                          </svg>
                        </a>

                        <a href="https://www.instagram.com/fincapropia/" target="_blank" rel="noreferrer">
                          <svg
                            className="icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M 5 1 C 2.791 1 1 2.791 1 5 L 1 11 C 1 13.209 2.791 15 5 15 L 11 15 C 13.209 15 15 13.209 15 11 L 15 5 C 15 2.791 13.209 1 11 1 L 5 1 z M 5 2 L 11 2 C 12.657 2 14 3.343 14 5 L 14 11 C 14 12.657 12.657 14 11 14 L 5 14 C 3.343 14 2 12.657 2 11 L 2 5 C 2 3.343 3.343 2 5 2 z M 5 3 C 3.895 3 3 3.895 3 5 L 3 11 C 3 12.105 3.895 13 5 13 L 11 13 C 12.105 13 13 12.105 13 11 L 13 5 C 13 3.895 12.105 3 11 3 L 5 3 z M 11.5 4 C 11.776 4 12 4.224 12 4.5 C 12 4.776 11.776 5 11.5 5 C 11.224 5 11 4.776 11 4.5 C 11 4.224 11.224 4 11.5 4 z M 8 5 C 9.657 5 11 6.343 11 8 C 11 9.657 9.657 11 8 11 C 6.343 11 5 9.657 5 8 C 5 6.343 6.343 5 8 5 z M 8 6 A 2 2 0 0 0 8 10 A 2 2 0 0 0 8 6 z" />
                          </svg>
                        </a>
                        {/*  <span className="image-icon">ICON</span> */}
                      </button>
                    </div>

                    {/*    <div className="author-statement">
                      <p>Subtexto final</p>
                    </div> */}
                  </article>
                </div>
              </section>
              <div className="linea-dorada"></div>
              <div className="products-title">
                <p>
                  <span className="letraGrande">C</span>ONTACT
                </p>
              </div>
              <section className="products">
                <div className="contact-image-cards-form">

                {/*   <Contacto /> */}
                  <ContactoUsa />

                </div>
              </section>

            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeUSA;
