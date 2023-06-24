import React from 'react';
import Rss from '../components/Rss';
import AventureTrip from '../components/AventureTrip';
import SustainableTourism from '../components/SustainableTourism';
import WellBeing from '../components/WellBeing';
import SunAndBeach from '../components/SunAndBeach';
import GastronomicRoutes from '../components/GastronomicRoutes';
import Romance from '../components/Romance';
import './style.css';

const Experiences = () => {
  return (
    <div className="main-content">
      <Rss />
      <GastronomicRoutes />
      <SunAndBeach />
      <AventureTrip />
      <SustainableTourism />
      <WellBeing />
      <Romance />
    </div>
  );
};

export default Experiences;
