import React, { useState, useEffect, useContext} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/calendar/es/index.json';
import dataEn from '../../assets/data/calendar/en/index.json';
import './style.css';

const ImagesCalendar = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  const getEvents = () => (
    language?.events?.map((event, index) => (
      <div className="caldendar-images-card-ctn">
        <LazyLoadImage className="calendar-images-card-img" src={require(`../../assets/img/calendar/${event.urlImg}`)} alt={event.title} />
        <h5 className="calendar-images-card-text-title">{event.title}</h5>
        <p className="calendar-images-card-text-desc">{event.description}</p>
      </div>
    ))
  );
  
  return (
    <section className="calendar-images-ctn">
      {getEvents()}
    </section>
  )
};

export default ImagesCalendar;
