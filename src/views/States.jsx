import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Videostates from '../components/VideoStates';
import Liststates from '../components/ListStates/indes';
import ContentStates from '../components/ContentStates';
import Rss from '../components/Rss';
import './style.css';

const States = () => {
  return (
    <div className="main-content">
      <Rss />
      <Videostates />
      <LazyLoadComponent>
        <Liststates />
        <ContentStates />
      </LazyLoadComponent>
    </div>
  )
};

export default States;
