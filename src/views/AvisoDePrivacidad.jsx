import React from 'react';
import Privacity from '../components/Privacity';
import Rss from '../components/Rss';
import './style.css';

const AvisoDePrivacidad = () => {
  return (
    <div className="main-content">
      <Rss />
      <Privacity />
    </div>
  )
};

export default AvisoDePrivacidad;
