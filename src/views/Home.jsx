import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import Hero from '../components/Hero';
import Places from '../components/Places';
import Description from '../components/Description';
import Slider from '../components/Slider';
import Features from '../components/Features/indes';
import VideoHome from '../components/VideoHome';
import Rss from '../components/Rss';
import './style.css';


const Home = () => {
  return (
    <div className="main-content">
      <Rss />
        <Hero />
      <LazyLoadComponent>
        <Places />
        <Description />
        <Slider />
        <Features />
        <VideoHome />
      </LazyLoadComponent>
    </div>
  )
};

export default Home;
