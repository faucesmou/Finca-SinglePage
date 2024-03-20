import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navegar2 = ({ to, sectionId, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  /*  useEffect(() => {
     const targetElement = document.getElementById(sectionId);
 
     if (targetElement && location.pathname === to) {
 
       setTimeout(() => {
          targetElement.scrollIntoView({
           behavior: 'smooth',
         }) ;
       }, 0);
     }
   }, [sectionId, location.pathname, to]); */

  useEffect(() => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement && location.pathname === to) {
      window.addEventListener('beforeunload', () => {
        targetElement.scrollIntoView({
          behavior: 'auto',
        });
      });
    }
    return () => {
      window.removeEventListener('beforeunload', () => {
        targetElement.scrollIntoView({
          behavior: 'auto',
        });
      });
    };
  }, [sectionId, location.pathname, to]);


  const handleClick = (/* e */) => {
    /*     e.preventDefault(); */
    const targetElement = document.getElementById(sectionId);



    if (targetElement) {
   /* problema con el scroll para que se vean los títulos REVISAR:  */
      console.log('entrando a handleClick porque hay targetElement')
      window.scrollTo({
        top: 0,
        behavior: 'auto',
       /*  block: 'start', */
      });
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
      /*        setTimeout(() => {
              targetElement.scrollIntoView({
                behavior:'smooth',
              });
            }, 0);   */
    } else {
      console.log('entrando al else navigate to');
      navigate(to);
      console.log('entrando al window.scroll to');
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
      console.log('finalizó el window.scroll to');
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

