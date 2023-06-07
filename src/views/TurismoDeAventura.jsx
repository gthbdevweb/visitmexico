import React from 'react';
import TurismoDeAventuraContent from '../components/TurismoDeAventuraContent';
import Rss from '../components/Rss';
import './style.css';

const TurismoDeAventura = () => {
  return (
    <div className="main-content">
      <Rss />
      <TurismoDeAventuraContent />
    </div>
  )
};

export default TurismoDeAventura;
