import React from 'react';
import SolYPlayaContent from '../components/SolYPlayaContent';
import SolYPlayaCardsContent from '../components/SolYPlayaCardsContent';
import Rss from '../components/Rss';
import './style.css';

const SolYPlaya = () => {
  return (
    <div className="main-content">
      <Rss />
      <SolYPlayaContent />
      <SolYPlayaCardsContent/ >
    </div>
  )
};

export default SolYPlaya;
