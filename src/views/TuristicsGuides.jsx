import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import ListTuristicGuides from '../components/ListTuristicGuides';
import Rss from '../components/Rss';
import './style.css';

const TuristicsGuides = () => {
  return (
    <div className="main-content">
      <Rss />
      <LazyLoadComponent>
        <ListTuristicGuides />
      </LazyLoadComponent>
    </div>
  )
};

export default TuristicsGuides;
