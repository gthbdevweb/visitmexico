import React from 'react';
import BienestarContent from '../components/BienestarContent';
import Rss from '../components/Rss';
import './style.css';

const Bienestar = () => {
  return (
    <div className="main-content">
      <Rss />
      <BienestarContent />
    </div>
  )
};

export default Bienestar;
