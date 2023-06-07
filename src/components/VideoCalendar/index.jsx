import React, { useState, useEffect, useContext} from 'react';  
import { Context } from '../../Context';
import dataEs from '../../assets/data/calendar/es/index.json';
import dataEn from '../../assets/data/calendar/en/index.json';
import './style.css';

const VideoCalendar = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  const languageSort = language?.videos?.sort(function(a, b){return b.id - a.id});

  const getVideos = () => (
    languageSort?.map((video, index) => (
      <div className="calendar-video-principal">
        <iframe
          width="100%"
          height="100%"
          src={video?.urlVideo}
          title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
          frameBorder="1"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen 
        />
      </div>
    ))
  );

  return (
    <section className="calendar-videos-ctn">
      <div className="calendar-video-principal">
        <iframe
          width="100%"
          height="100%"
          src={languageSort?.[0]?.urlVideo}
          title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
          frameBorder="1"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="calendar-video-secondary-ctn">
        {getVideos()}
      </div>
    </section>
  )
};

export default VideoCalendar;
