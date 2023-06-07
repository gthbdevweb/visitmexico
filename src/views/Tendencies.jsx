import React from 'react';
import HeaderTendencies from '../components/HeaderTendencies';
import CardTendencies from '../components/CardTendencies';
import Rss from '../components/Rss';
import './style.css';

const Tendencies = () => {
  return (
    <div className="main-content">
      <Rss />
      <HeaderTendencies />
      <CardTendencies />
    </div>
  )
};

export default Tendencies;
