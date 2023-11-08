import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/partials/header.css'
import './styles/styles.css'
/* import './styles/estilos.css' */

import LargeScreenHeader from './components/partials/LargeScreenHeader'
import Header from './components/partials/Header';
import Home from './components/pages/Home';


import { useState } from "react";




function App() {


    const isAnchoMayorA769 = window.matchMedia("(min-width: 769px)").matches;
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <BrowserRouter>
            <div className="App" id="scroll-animate">
                {isAnchoMayorA769 ? <LargeScreenHeader /> : <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
                
                <Routes>
                <Route path="/" element={<Home />} />
                    
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
