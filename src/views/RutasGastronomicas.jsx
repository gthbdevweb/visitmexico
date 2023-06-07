import React from 'react';
import RutasGastronomicasContent from '../components/RutasGastronomicasContent';
import Rss from '../components/Rss';
import './style.css';

const RutasGastronomicas = () => {
  return (
    <div className="main-content">
      <Rss />
      <RutasGastronomicasContent />
    </div>
  )
};

export default RutasGastronomicas;
