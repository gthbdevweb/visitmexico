import React, { useState, useEffect, useContext} from 'react';  
import { Context } from '../../Context';
import dataEs from '../../assets/data/events/es/index.json';
import dataEn from '../../assets/data/events/en/index.json';
import dataFr from '../../assets/data/events/fr/index.json';
import dataJp from '../../assets/data/events/jp/index.json';
import dataPt from '../../assets/data/events/pt/index.json';
import dataCn from '../../assets/data/events/cn/index.json';
import './style.css';

const VideoEvents = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : isLanguage === 'FR' ? setLanguage(dataFr)
    : isLanguage === 'JP' ? setLanguage(dataJp)
    : isLanguage === 'PT' ? setLanguage(dataPt)
    : isLanguage === 'CN' ? setLanguage(dataCn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  const languageSort = language?.videos?.sort(function(a, b){return b.id - a.id});

  return (
    <section className="eventos-videos-ctn sliceLeft">
      {languageSort?.map((video, index) => (
        <div className="eventos-video-ctn" key={index}>
          <iframe
            width="100%"
            height="100%"
            src={video.urlVideo}
            title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
            frameBorder="1"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading='lazy'
          />
          <p className="eventos-video-text-desc">{video.title}</p>
        </div>
      ))}
    </section>
  )
};

export default VideoEvents;
