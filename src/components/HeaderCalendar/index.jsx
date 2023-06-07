import React, { useState, useEffect, useContext} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/calendar/es/index.json';
import dataEn from '../../assets/data/calendar/en/index.json';
import Calendar from 'react-calendar-events-full-year'
import { tempEvents } from '../../assets/data/calendar/data';
import Calendar1 from '../../assets/img/calendar/blog.webp';
import './style.css';

const HeaderCalendar = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  const [calendarEvents, setEvents] = useState(tempEvents.map(d => ({...d, from: new Date(d.from), to: new Date(d.to)})));
  
  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs);
  }, [isLanguage]);
  

  return (
    <section className="calendar-header-ctn">
      <div className="calendar-header-text-ctn">
        <h1 className="calendar-header-text-title">{language?.title}</h1>
        {/*<h3 className="calendar-header-text-subtitle">{language?.subtitle}</h3>*/}
      </div>
      <div className="calendar-header-calendar-ctn">
        <div className="calendar-header-calendar-img-ctn">
          <LazyLoadImage className="calendar-header-calendar-img" src={Calendar1} alt="calendar" />
        </div>
        <div className="calendar-header-calendar">
          {/*<div id="calendar"></div>*/}
          <Calendar calendarEvents={calendarEvents} monthView={true}/>
        </div>
      </div>
      {/*<div className="calendar-header-text-desc-ctn">
        <p className="calendar-header-text-desc">{language?.description}</p>
      </div>*/}
    </section>
  )
};

export default HeaderCalendar;
