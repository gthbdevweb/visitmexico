import React, { useState, useEffect, useContext}  from 'react';
import { Context } from '../../Context';
import dataEs from '../../assets/data/videoHome/es/index.json';
import dataEn from '../../assets/data/videoHome/en/index.json';
import Share from '../Share';
import './style.css';

const VideoHome = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="video-home-ctn">
      <h2 className="video-home-text-title">{language.title}</h2>
      <div className="video-home-vide-ctn">
        {/*<iframe
          loading='lazy'
          width="100%"
          height="100%" 
          src="https://www.youtube.com/embed/EjNe5EJ1cAQ?rel=0;&autoplay=0"
          title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        />*/}
        <iframe
          loading='lazy'
          width="100%"
          height="100%" 
          src="https://www.mexico360.com.mx/bajacalifornia/indexweb.html"
          title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/"
        urlPinterest = "https://visitmexico.com/"
        urlTwitter = "https://visitmexico.com/"
        urlWhatsapp = "https://visitmexico.com/"
      />
    </section>
  )
};

export default VideoHome;
