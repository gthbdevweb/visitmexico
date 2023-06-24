import React from 'react';
import Rss from '../components/Rss';
import GastronomicRoutesGallery  from '../components/GastronomicRoutesGallery';
import './style.css';

const GastronomicRoutesContent = () => {
  return (
    <div className="main-content">
      <Rss />
      <GastronomicRoutesGallery />
    </div>
  );
};

export default GastronomicRoutesContent;
