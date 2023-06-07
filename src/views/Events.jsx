import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import HeaderEvents from '../components/HeaderEvents';
import VideoEvents from '../components/VideoEvents';
import Rss from '../components/Rss';
import './style.css';

const Events = () => {
  return (
    <div className="main-content">
      <Rss />
      <HeaderEvents />
      <LazyLoadComponent>
        <VideoEvents />
      </LazyLoadComponent>
    </div>
  )
};

export default Events;
