import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import HeaderTowns from '../components/HeaderTowns';
import Benefits from '../components/Benefits';
import BottomTowns from '../components/BottomTowns';
import Rss from '../components/Rss';
import './style.css';

const Towns = () => {
  return (
    <div className="main-content">
      <Rss />
      <HeaderTowns />
      <LazyLoadComponent>
        <BottomTowns />
        <Benefits />
      </LazyLoadComponent>
    </div>
  )
};

export default Towns;
