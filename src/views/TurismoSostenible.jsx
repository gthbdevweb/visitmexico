import React from 'react';
import TurismoSostenibleContent from '../components/TurismoSostenibleContent';
import Rss from '../components/Rss';
import './style.css';

const TurismoSostenible = () => {
  return (
    <div className="main-content">
      <Rss />
      <TurismoSostenibleContent />
    </div>
  )
};

export default TurismoSostenible;
