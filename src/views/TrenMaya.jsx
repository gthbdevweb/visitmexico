import React from 'react';
import TrenMayaContent from '../components/TrenMayaContent';
import Rss from '../components/Rss';
import './style.css';

const TrenMaya = () => {
  return (
    <div className="main-content">
      <Rss />
      <TrenMayaContent />
    </div>
  )
};

export default TrenMaya;
