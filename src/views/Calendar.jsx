import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import HeaderCalendar from '../components/HeaderCalendar';
import ImagesCalendar from '../components/ImagesCalendar';
import VideoCalendar from '../components/VideoCalendar';
import Rss from '../components/Rss';
import './style.css';

const Calendar = () => {
  return (
    <div className="main-content">
      <Rss />
      <HeaderCalendar />
      {/*<LazyLoadComponent>
        <ImagesCalendar />
        <VideoCalendar />
      </LazyLoadComponent>*/}
    </div>
  )
};

export default Calendar;
