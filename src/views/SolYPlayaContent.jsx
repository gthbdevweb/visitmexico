import React from 'react';
import Rss from '../components/Rss';
import SolYPlayaGallery  from '../components/SolYPlayaGallery';
import './style.css';

const SolYPlayaContent = () => {
  return (
    <div className="main-content">
      <Rss />
      <SolYPlayaGallery />
    </div>
  );
};

export default SolYPlayaContent;
