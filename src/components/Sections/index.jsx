import React from 'react';
import MainDestinations from '../MainDestinations';
import WorldHeritageCities from '../WorldHeritageCities';
import WhereToGo from '../WhereToGo';
import TipsForTraveling from '../TipsForTraveling';
import ColonialTreasures from '../ColonialTreasures';
import NationalFairs from '../NationalFairs';
import ToDo from '../ToDo';
import './sections.css';

const Sections = () => {
  return (
    <div className="sections-ctn">
        <MainDestinations />
        <ColonialTreasures />
        <WorldHeritageCities />
        <NationalFairs />
        <WhereToGo />
        <ToDo />
        <TipsForTraveling />
    </div>
  );
};

export default Sections;
