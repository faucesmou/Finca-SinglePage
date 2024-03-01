import React from 'react';

const ScrollToTopButton = ({ onClick, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if (onClick) {
      onClick(e);
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default ScrollToTopButton;
