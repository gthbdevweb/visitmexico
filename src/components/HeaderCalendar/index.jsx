import React, { useState, useEffect, useContext} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';

import DatePicker from "react-multi-date-picker"
import "react-multi-date-picker/styles/layouts/mobile.css"

import dataEs from '../../assets/data/calendar/es/index.json';
import dataEn from '../../assets/data/calendar/en/index.json';
import { eventsList, tempEvents } from '../../assets/data/calendar/data';
import './style.css';

const HeaderCalendar = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const [value, setValue] = useState();
  const [dateSelected, setDateSelected] = useState();
  const [eventFind, setEventFind] = useState('calendario.webp');

  const getEvents = ({ date }) => {
    let color
    const dateCurrent = `${date.year.toString()}:${date.month.number.toString()}:${date.day.toString()}`;
    if (eventsList.includes(dateCurrent)) color = 'red';
    if (color) return { className: "highlight highlight-" + color }
  };

  useEffect(() => {
    setDateSelected(`${value?.year?.toString()}:${value?.month?.number?.toString()}:${value?.day?.toString()}`);
  }, [value]);

  useEffect(() => {
    setEventFind(tempEvents.find(el => el.date === dateSelected));
  }, [dateSelected]);


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
          <LazyLoadImage
            className="calendar-header-calendar-img"
            // src={Calendar1}
            src={require(`../../assets/img/calendar/${eventFind?.imgUrl ? eventFind?.imgUrl :'calendario.webp'}`)} 
            alt="calendar"
          />
        </div>
        <div className="calendar-header-calendar">
          <h2 className="calendar-select-text">Elige una fecha</h2>
          <div className="calendar-select-ctn">
            <DatePicker 
              mapDays={getEvents}
              onChange={setValue}
              headerOrder={["MONTH_YEAR", "LEFT_BUTTON", "RIGHT_BUTTON"]} 
              className="rmdp-mobile"
              onSubmit={dates => console.log("selected dates ", dates)}
            />
          </div>
          <div> 
            <h3 className="calendar-select-title">{eventFind?.title}</h3>
            <p className="calendar-select-description">{eventFind?.description}</p>
          </div>
        </div>
      </div>
      {/*<div className="calendar-header-text-desc-ctn">
        <p className="calendar-header-text-desc">{language?.description}</p>
      </div>*/}
    </section>
  )
};

export default HeaderCalendar;
