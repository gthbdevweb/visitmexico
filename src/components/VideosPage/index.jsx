import React, { useState, useEffect, useContext} from 'react';  
import { Context } from '../../Context';
import dataEs from '../../assets/data/videos/es/index.json';
import dataEn from '../../assets/data/videos/en/index.json';
import './style.css';

const VideosPage = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  const languageSort = language?.videos?.sort(function(a, b){return b.id - a.id});
  const getVideoTop = languageSort?.map((video, index) => index === 0 && video);

  return (
    <section className="videos-ctn sliceLeft">
      <iframe
        width="100%"
        height="100%"
        src={getVideoTop?.[0]?.urlVideo}
        title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="videos-multiple-ctn">
        {languageSort?.map((video, index) => (
          <div className="video-individual-ctn" key={index}>
            <iframe
              width="100%"
              height="100%"
              src={video.urlVideo}
              title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </section>
  )
};

export default VideosPage;
