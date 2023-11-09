import React from 'react';
import { NavLink } from 'react-router-dom';

function Navegar({ to, children }) {
    const handleClick = () => {
    
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    return (
      <NavLink to={to} onClick={handleClick}>
        {children}
      </NavLink>
    );
  };

export default Navegar

