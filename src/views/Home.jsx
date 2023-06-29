import React, { useEffect } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import ReactGA from 'react-ga';
import Hero from '../components/Hero';
import Places from '../components/Places';
import Description from '../components/Description';
import Slider from '../components/Slider';
import Features from '../components/Features/indes';
import VideoHome from '../components/VideoHome';
import MainDestinations from '../components/MainDestinations';
import WorldHeritageCities from '../components/WorldHeritageCities';
import WhereToGo from '../components/WhereToGo';
import TipsForTraveling from '../components/TipsForTraveling';
import ColonialTreasures from '../components/ColonialTreasures';
import NationalFairs from '../components/NationalFairs';
import ToDo from '../components/ToDo';
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

  useEffect(() => {
    gaEventTracker('open')
  }, []);

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
        <MainDestinations />
        <ColonialTreasures />
        <WorldHeritageCities />
        <NationalFairs />
        <WhereToGo />
        <ToDo />
        <TipsForTraveling />
      </LazyLoadComponent>
    </div>
  )
};

export default Home;
