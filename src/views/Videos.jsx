import React from 'react';
import HeaderVideos from '../components/HeaderVideos';
import VideosPage from '../components/VideosPage';
import Rss from '../components/Rss';
import './style.css';

const Videos = () => {
  return (
    <div className="main-content">
      <Rss />
      <HeaderVideos />
      <VideosPage />
    </div>
  )
};

export default Videos;
