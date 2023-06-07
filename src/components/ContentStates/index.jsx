import React, { useState, useEffect, useContext} from 'react';
import { Context } from '../../Context';
import dataEs from '../../assets/data/videos/es/index.json';
import dataEn from '../../assets/data/videos/en/index.json';
import './style.css';

const ContentStates = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  const languageSort = language?.videos?.sort(function(a, b){return b.id - a.id});
  const deletedVideos = languageSort?.slice(0, 3);

  const getVideos = () => (
    deletedVideos?.map((video, index) => (
      <div className="states-relation-content-card-ctn" key={index}>
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
      </div>
    ))
  );

  return (
    <section className="states-relation-content-ctn">
      <h3 className="states-relation-content-text-title">{language?.linkTitle}</h3>
      <div className="states-relation-content-cards-ctn">
        {getVideos()}
      </div>
    </section>
  )
};

export default ContentStates;
