import { BrowserRouter, Routes, Route/* , useLocation  */ } from "react-router-dom";
import './styles/partials/header.css'
import './styles/styles.css'
/* import './styles/estilos.css' */

import LargeScreenHeader from './components/partials/LargeScreenHeader'
import Header from './components/partials/Header';
import Home from './components/pages/Home';
import HomeBrasil from './components/pages/HomeBrasil';
import HomeUSA from './components/pages/HomeUSA';
import LosVinos from './components/pages/LosVinos';
import LosVinosBrasil from './components/pages/LosVinosBrasil';


import { useState } from "react";




function App() {

/*      const location = useLocation();  */
/*    const history = useHistory(); */
    const isAnchoMayorA769 = window.matchMedia("(min-width: 769px)").matches;
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <BrowserRouter>
            <div className="App" id="scroll-animate">
                  {isAnchoMayorA769 ? <LargeScreenHeader /> : <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
            {/*     {isAnchoMayorA769 ? (
                    // Renderizar el LargeScreenHeader según la ruta
                    <>
                        {location.pathname === '/brasil' ? (
                           
                            <LargeScreenHeader idioma="portugues" />
                        ) : (
                            <LargeScreenHeader idioma="default" />
                        )}
                    </>
                ) : (
                    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                )} */}

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/brasil" element={<HomeBrasil />} />
                    <Route path="/usa" element={<HomeUSA />} />

                    <Route path="/LosVinos" element={<LosVinos />} />
                    <Route path="/LosVinosBrasil" element={<LosVinosBrasil />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
