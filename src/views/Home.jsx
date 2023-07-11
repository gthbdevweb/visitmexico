import React, { useState, useEffect } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import ReactGA from 'react-ga';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import Places from '../components/Places';
import Description from '../components/Description';
import Slider from '../components/Slider';
import Features from '../components/Features/indes';
// import Sections from '../components/Sections';
import VideoHome from '../components/VideoHome';

import Rss from '../components/Rss';
import './style.css';

const useAnalyticsEventTracker = (category="Home") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({category, action, label});
  }
  return eventTracker;
}

const Home = () => {
  const gaEventTracker = useAnalyticsEventTracker('Ingresando al inicio');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gaEventTracker('open')
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [])

  return (
    <>
      {!loading ?
      <div className="main-content">
        <Rss />
          <Hero />
        <LazyLoadComponent>
          <Places />
          <Description />
          <Slider />
          <VideoHome />
          <Features />
          {/* <Sections /> */}
        </LazyLoadComponent>
      </div>
      :
      <div className="main-content">
        <Loader/>
      </div>}
    </>
  )
};

export default Home;
