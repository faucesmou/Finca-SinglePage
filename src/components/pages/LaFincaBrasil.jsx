import React, { useEffect } from "react";
import $ from 'jquery';
import '../../styles/animations.css';
import Navegar2 from "../Navegar/Navegar2";

import FichaLaFinca from "../fichas/FincaPropia2024.pdf"

/* import backgroundImage from './Images/losvinos/Botellas_Finca/fondo-finca-2-01.jpg'; */



const LaFincaBrasil = () => {


    let archivoPdf = FichaLaFinca;
    const link = document.createElement('a');

    const handleDownloadPDF = () => {

        let pdfFileName = "LaFinca-Ficha-Técnica";

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
        <div className="laFinca-contenedorMayor" id="scroll-animate-main" >


            <div className="biografia-experience" id="laFincaInicioBrasil">
                <p className="laFinca-title">

                    A FAZENDA
                </p>
            </div>

            <section className="laFinca-caracteristicas-contenedor">

                <div className="laFinca-caracteristicas-tarjeta">

                    <p className="laFinca-titulo-caracteristica">UBICAÇÃO</p>

                    <p> Mendoza, Vale do Uco, Tupungato, no distrito de La Arboleda. </p>

                    <p className="laFinca-titulo-caracteristica">IDADE DO VINHEDO</p>
                    <p> 24 anos. </p>

                </div>

                <div className="laFinca-caracteristicas-tarjeta">

                    <p className="laFinca-titulo-caracteristica">ALTITUDE</p>
                    <p>950 metros acima do nível do mar. O momento correto para o plantio e colheita de uvas para a produção de vinhos premium. </p>

                </div>

                <div className="laFinca-caracteristicas-tarjeta">
                    <p className="laFinca-titulo-caracteristica">ÁREA TOTAL</p>
                    <p> 54 hectares. </p>
                    <br />

                    <p className="laFinca-titulo-caracteristica">VARIEDADES</p>
                    <p> Malbec,Cabernet e
                        Chardonnay.
                    </p>
                </div>

            </section>


            <section className="laFinca-imagenes-contenedor">

                <div className="laFinca-caracteristicas-tarjeta">

                    <img
                        src="/Images/Finca/finca1.jpg"
                        alt=""
                    />

                </div>

                <div className="laFinca-caracteristicas-tarjeta">


                    <img
                        src="/Images/Finca/procesosuvas-02.jpg"
                        alt=""
                    />

                </div>

                <div className="laFinca-caracteristicas-tarjeta">

                    <img
                        src="/Images/Finca/fondo-finca-2-01.jpg"
                        alt=""
                    />

                </div>

            </section>

            <section className="biografia-texto-completo-container">
                <div className="titulo-principal">
                    <p >TERROIR</p>
                </div>

                <div className="finca-caracteristicas">

                    <p> Diante das estribações dos Andes, com invernos rigorosos e verões quentes, com noites muito frias. Solo argiloso e limoso, bem drenado, que produz boa matéria corante, taninos e acidez perfeita, resultando em uvas de excelente qualidade.
                    </p>
                </div>

                <div className="titulo-secundario">
                    <p>SUELOS</p>
                </div>
                <div className="finca-caracteristicas">

                    <p> Solos formados na era mesozoica triássica superior. Profundos. Sem presença de cascalhos ou seixos no horizonte. De textura fina a moderadamente fina.
                    </p>
                </div>
                <div className="titulo-secundario">
                    <p >MALLA ANTIGRANIZO</p>
                </div>
                <div className="finca-caracteristicas">

                    <p>Tecido preto de alta densidade e baixa pressão, com resistência de 20 mm a 40 m/s. Na Argentina, é controlado e regulado pelo INTA. Em vinhedos de destaque, onde as uvas são destinadas à produção de vinho premium, seu uso é necessário para garantir 100% de proteção da colheita.
                    </p>

                </div>
                <div className="titulo-secundario">
                    <p>RIEGO POR GOTEJO COMPUTADORIZADO</p>
                </div>
                <div className="finca-caracteristicas">

                    <p>Em um inovador sistema de irrigação utilizado em vinhedos onde são produzidos vinhos de alta qualidade. Permite regar adequadamente a planta, criando condições favoráveis de umidade na zona radicular, proporcionando um melhor desenvolvimento do cultivo. Garante a irrigação necessária durante todo o ano, sem causar estresse hídrico às plantas. Na Finca Própria, esse sistema é usado para fertirrigação, fornecendo os aditivos necessários para um desenvolvimento ótimo.
                    </p>
                </div>

            </section>

            <section className="laFinca-descargaFicha-container">
                <div className="container-icono-boton" onClick={() => handleDownloadPDF()}>
                    <div className="iconoDescargaFichaFinca">
                        <img
                            src="/Images/icons/descargaIcon.png"
                            alt="" />
                    </div>
                    <button
                        className="descargarFichaFinca-button"
                        type="submit">
                        Ficha Técnica
                    </button>
                </div>
            </section>

            <section className="laFinca-volver" >
                <Navegar2 to="/brasil" sectionId="losVinosBrasil">
                    <li>Voltar ao Início</li>
                </Navegar2>
            </section >


        </div >
    )
}

export default LaFincaBrasil

