import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navegar2 = ({ to, sectionId, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      // Primero, desplázate suavemente al inicio de la página
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      // Luego, después de un breve retraso, desplázate suavemente hacia la sección
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior:'smooth',
        });
      }, 0); // Ajusta el valor del retraso según sea necesario
    } else {
      navigate(to);
    }
  };

  return <Link to={to} onClick={handleClick}>{children}</Link>;
};

export default Navegar2;





/* import { Link, useNavigate } from 'react-router-dom';

const Navegar2 = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return <Link to={to} onClick={handleClick}>{children}</Link>;
};

export default Navegar2; */

