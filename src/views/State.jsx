import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import VideoState from '../components/VideoState';
import StateKnown from '../components/StateKnown';
import MapState from '../components/MapState';
import SpotifyState from '../components/SpotifyState';
import VideoState360 from '../components/VideoState360';
import Rss from '../components/Rss';
import './style.css';

const State = () => {
  return (
    <div className="main-content">
      <Rss />
      <VideoState />
      <LazyLoadComponent>
        <StateKnown />
        <MapState />
        <SpotifyState />
        <VideoState360 />
      </LazyLoadComponent>
    </div>
  )
};

export default State;
