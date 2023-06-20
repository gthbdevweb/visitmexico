import React from 'react';
import Rss from '../components/Rss';
import AventureTrip from '../components/AventureTrip';
import SustainableTourism from '../components/SustainableTourism';
import WellBeing from '../components/WellBeing';
import SunAndBeach from '../components/SunAndBeach';
import GastronomicRoutes from '../components/GastronomicRoutes';
import './style.css';

const Experiences = () => {
  return (
    <div className="main-content">
      <Rss />
      <AventureTrip />
      <SustainableTourism />
      <WellBeing />
      <SunAndBeach />
      <GastronomicRoutes />
    </div>
  );
};

export default Experiences;
