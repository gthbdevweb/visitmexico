import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/trenMaya/es/index.json';
import dataEn from '../../assets/data/trenMaya/en/index.json';
import Share from '../Share';
import './style.css';

const TrenMayaContent = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="tren-maya-content-ctn">
      <div className="tren-maya-content-description-ctn">
        <div className="tren-maya-content-ctn-text">
          <h1 className="tren-maya-content-text-title">{language?.title}</h1>
          {language?.description?.map((info, index) => <p className="tren-maya-content-text-desc" key={index}>{info?.text}</p>)}
          <Share 
            urlFaceboock = "https://visitmexico.com/trenmaya/"
            urlPinterest = "https://visitmexico.com/trenmaya/"
            urlTwitter = "https://visitmexico.com/trenmaya/"
            urlWhatsapp = "https://visitmexico.com/trenmaya/"
          />
        </div>
        <div className="tren-maya-content-ctn-img">
          <LazyLoadImage
            className="tren-maya-content-img"
            src={require(`../../assets/img/trenMaya/tren.webp`)} 
            alt={language?.title}
          />
        </div>
      </div>
      <div className="tren-maya-video-ctn">
        <iframe
          width="100%"
          height="100%"
          src={language?.urlVideo}
          title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading='lazy'  
        />
      </div>
    </section>
  )
};

export default TrenMayaContent;
