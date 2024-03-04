import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navegar2 = ({ to, sectionId, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement && location.pathname === to) {

      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }, 2000);
    }
  }, [sectionId, location.pathname, to]);


  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior:'smooth',
        });
      }, 0); 
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

