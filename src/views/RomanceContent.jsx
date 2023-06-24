import React from 'react';
import Rss from '../components/Rss';
import RomanceGallery  from '../components/RomanceGallery';
import './style.css';

const RomanceContent = () => {
  return (
    <div className="main-content">
      <Rss />
      <RomanceGallery />
    </div>
  );
};

export default RomanceContent;
