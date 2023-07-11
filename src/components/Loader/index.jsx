import React from 'react';
import Logo from '../../assets/img/logos/logo.png';
import './style.css';

const Loader = () => {
  return (
    <div className="loader-ctn">
      <img 
        src={Logo}
        alt="logo"
        className="loader-img"
    />
    </div>
  );
};

export default Loader;
