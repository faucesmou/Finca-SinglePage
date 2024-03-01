import React from "react";
import Contacto from "../Contacto";
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";


function Home() {
  return (
    <div className="Home" id="scroll-animate-main">
      <div className="wrapper-parallax">
        <div className="parallax-container">
          <video autoPlay loop muted playsInline id="megavideofinca">
            <source
              src="/video/Finca-propia-sin-sonido-arreglo-1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <section id="fincaPropiaBrasil"></section>
        <div className="linea-dorada"></div>
        <div className="Home content">
          <section className="cards">
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">Vivi a experiência</p>
                <p className="subtitulo-dorado">
                Aproveite ser dono <br /> do seu próprio vinho
                </p>
              </div>
            </section>
            <div className="image-cards">
              <article className="expresion">
                <div>
                  <img src="/Images/home/procesos-04.jpg" alt="expresión" />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/grupo.jpeg"
                    /*  src="/Images/home/IMG_4568-scaled-e1680126418462.jpg" */
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="dueño">
                <div>
                  <img
                    /*  src="/Images/home/MG_0160-scaled-e1680126635925.jpg" */
                    src="/Images/cande/chicosBrindando.jpg"
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
                    src="/Images/Finca/FincaPropiaMar20-198-scaled.jpg"
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
                    src="/Images/Finca/FincaPropiaMar20-488-scaled.jpg"
                    alt="amigos"
                  />
                </div>
              </article>

            </div>
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">A expressão do seu Terroir</p>
                <p className="subtitulo-dorado">
                Vinhos intensos que nascem<br /> no melhor vinhedo
                </p>
              </div>
            </section>
          </section>
          <section className="cards">
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">Compartilhar com amigos</p>
                <p className="subtitulo-dorado">O fruto da sua produção</p>
              </div>
            </section>
            <div className="image-cards">
              <article className="expresion">
                <div>
                  <img src="/Images/cande/vidVerde.jpg" alt="expresión" />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/señores.jpeg"
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="dueño">
                <div>
                  <img
                    src="/Images/cande/fincaDron.jpeg"
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
                  <img src="/Images/cande/degustacion.jpg" alt="expresión" />
                </div>
              </article>
              <article className="amigos">
                <div>
                  <img
                    src="/Images/cande/pareja.jpg"
                    alt="amigos"
                  />
                </div>
              </article>
              <article className="dueño">
                <div>
                  <img
                    src="/Images/cande/vidPrimerPlano.jpeg"
                    alt="dueño"
                  />
                </div>
              </article>
            </div>
            <section className="texto-container">
              <div className="texto-item">
                <p className="titulo-negro">Seja dono</p>
                <p className="subtitulo-dorado">Da terra</p>
              </div>
            </section>
          </section>
          <section id="serDueno"></section>
          <div className="linea-dorada"></div>
          <div className="products-title">
            <p>
              <span className="letraGrande">P</span>RODUTOS
            </p>
          </div>
          <section className="products">
            <div className="image-cards">
              <article className="dueño">
                <div className="descripcion">
                  <p>24 Vinhas</p>
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
                      40 metros lineares de videira (100 m²).
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      75 kg de uvas por colheita.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      72 garrafas de vinho por ano.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      Colheita assegurada sem riscos.
                    </li>
                  </ul>
                  <p className="total-precio">USD 5.000</p>
                  <div className="linea-dorada"></div>
                </div>
              </article>

              <article className="dueño">
                <div className="descripcion">
                  <p>Fila</p>
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
                      80 metros lineares de videira (200 m²).
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      150 kg de uvas por colheita.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                     144 garrafas de vinho por ano.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      Colheita assegurada sem riscos.
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
                     200 metros lineares de videira (400 m²).
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      375 kg de uvas por colheita.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      360 garrafas de vinho por ano.
                    </li>
                    <li>
                      <img
                        className="uvitas"
                        src="/Images/icons/uvas.png"
                        alt="Icono de uva"
                      ></img>{" "}
                      Colheita assegurada sem riscos.
                    </li>
                  </ul>
                  <li className="total-precio">USD 14.800 </li>
                  {/* <p className="total-precio">USD 14.800</p> */}
                  <div className="linea-dorada"></div>
                </div>
              </article>
            </div>
          </section>

          <p className="fraseFinal">
          VINHOS PERSONALIZADOS COM ASSINATURA/LOGO/FRASE/DESENHO EM RÓTULO PRÓPRIO
          </p>
          <div className="linea-dorada"></div>
          <div className="products-title-experience">
            <p>
              <span className="letraGrandeExperience">E</span>xperiência  &nbsp;
              <span className="letraGrandeExperience">P</span>roprietários
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
                    Fazer parte da Finca Própria me fez viver o mundo do vinho como proprietário de uma vinha.<br></br>Uma experiência única.
                    </span>
                  </div>
                  <p className="author-statement">
                    Fernando - Província de San Luis
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
                    Visitar a vinícola e conhecer todo o esforço e os processos por trás de uma garrafa de vinho mudou totalmente minha percepção.
                    </span>
                  </div>
                  <div className="author-statement">
                    <p>Marcelo - Província de Buenos Aires</p>
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
                    Participar das atividades, receber informações em tempo real e consultar com os especialistas faz você aprender muito rapidamente.
                    </span>
                  </div>
                  <div className="author-statement">
                    <p>Graciela - Província de Santa Fé</p>
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


            /* Seccion BIOGRAFÍA para responsive!------------------------------------->>> */

            <section className="conditional-small-size">
              <section id="biografiaBrasil"></section>


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
                        Em 2010, Antonio inovou novamente com a Finca Propia, um projeto no qual se deu o prazer de tomar o tempo para escolher a vinha dos seus sonhos, após percorrer tanto os terroirs conhecidos quanto os mais remotos de sua querida província. Ele acabou se apaixonando por terras cercadas pela cordilheira, com um significativo desnível entre os dois extremos, e com um solo que proporcionaria um estilo com a intensidade e elegância que sempre buscou para seus vinhos.</span>
                      </div>
                    </div>

                  </article>

                </div>
              </section>
              <div className="linea-dorada"></div>

              {/* SECCION LOS VINOS */}
              <section id="losVinosBrasil"></section>
              <div className="wines-title-experience">
                <p>
                  <span className="letraGrandeExperience">O</span>s vinhos
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
                <Navegar2 to="/brasil" sectionId="contactoBrasil">
                  <li>Mais informações...</li>
                </Navegar2>
              </div>





              <section id="laFincaBrasil"></section>


           
              <div className="products-title">
                <p>
                  <span className="letraGrande">C</span>ONTATO
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
                        <span className="our-social-networks-text">NOSSAS REDES</span>
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
                        <span className="our-social-networks-text">NOSSAS REDES</span>
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
                        <span className="our-social-networks-text">NOSSAS REDES</span>
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
                <section id="contactoBrasil"></section>
              </section>
              {/* -------------------------ACÁ TERMINA EL RESPONSIVE PEQUEÑO------------------------------- */}
              <div className="contact-products-title">
                <p>
                  <span className="letraGrande">C</span>ONTATO
                </p>
              </div>
              <section className="products">
                <div className="image-cards">
                  <article className="dueño2">
                    <div className="descripcion">
                      <Contacto />

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
              <section id="biografiaBrasil"></section>
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
                    Em 2010, Antonio inovou novamente com a Finca Propia, um projeto no qual se deu o prazer de tomar o tempo para escolher a vinha dos seus sonhos, após percorrer tanto os terroirs conhecidos quanto os mais remotos de sua querida província. Ele acabou se apaixonando por terras cercadas pela cordilheira, com um significativo desnível entre os dois extremos, e com um solo que proporcionaria um estilo com a intensidade e elegância que sempre buscou para seus vinhos. Ali, no Paraje Dubois, La Arboleda, a 7 quilômetros da cidade de Tupungato, cercado pelos vinhedos mais renomados da Argentina, Antonio apostou em fazer algo diferente.
                      <br />
                      <br />
                      Este projeto nasce do desejo e da vontade de conhecer, tratar diretamente e compartilhar momentos com aqueles que apreciam seus vinhos. Fazer um vinho não se limita a vendê-lo a um comércio, mas vai um pouco além. Com o projeto Finca Propia, Antonio não só se dedica a continuar produzindo vinhos memoráveis, mas também tem o prazer de compartilhar experiências com aqueles que o acompanham nesse projeto, com aqueles que adquiriram partes deste destacado vinhedo e que valorizam e apreciam a produção de um produto da terra, aprendendo o que significa criar um vinho de terroir.
                      {/*   más biografía  <br />
                  más biografía  <br /> */}
                    </p>
                  </div>
                </section>
                <section id="losVinosBrasil"></section>
              </section>

              <div className="linea-dorada"></div>


                 

              <div className="wines-title-experience">
                <p>
                <span className="letraGrandeExperience">O</span>s vinhos
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
              <Navegar2 to="/LosVinosBrasil" sectionId="losVinosInicioBrasil">
              <li>Mais informações...</li>
              </Navegar2>
              </div>

             
              <section id="laFincaBrasil"></section>

              <section id="contactoBrasil"></section>
              <div className="products-title">
                <p>
                  <span className="letraGrande">E</span>SCRITÓRIOS
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
                        <span className="our-social-networks-text">NOSSAS REDES</span>
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
                        <span className="our-social-networks-text">NOSSAS REDES</span>
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
                        <span className="our-social-networks-text">NOSSAS REDES</span>
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

              <div className="products-title">
                <p>
                  <span className="letraGrande">C</span>ONTATO
                </p>
              </div>
              <section className="products">
                <div className="contact-image-cards-form">

                  <Contacto />

                </div>
              </section>

            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
