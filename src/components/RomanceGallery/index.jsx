import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/romanceGallery/es/index.json';
import dataEn from '../../assets/data/romanceGallery/en/index.json';
import dataFr from '../../assets/data/romanceGallery/fr/index.json';
import dataDe from '../../assets/data/romanceGallery/de/index.json';
import dataJp from '../../assets/data/romanceGallery/jp/index.json';
import dataPt from '../../assets/data/romanceGallery/pt/index.json';
import dataCn from '../../assets/data/romanceGallery/cn/index.json';
import Share from '../Share';
import './style.css';

const RomanceGallery = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : isLanguage === 'FR' ? setLanguage(dataFr)
    : isLanguage === 'DE' ? setLanguage(dataDe)
    : isLanguage === 'JP' ? setLanguage(dataJp)
    : isLanguage === 'PT' ? setLanguage(dataPt)
    : isLanguage === 'CN' ? setLanguage(dataCn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  const getImages = () => (
    language?.gallery?.map((image, index) => (
      <LazyLoadImage
        key={index}
        className="romance-gallery-content-img"
        src={require(`../../assets/img/romanceGallery/${image.imageUrl}`)} 
        alt={image?.title}
      />
    ))
  );

  return (
    <section className="romance-gallery-content-ctn">
      <div className="romance-gallery-content-ctn-text">
        <h1 className="romance-gallery-content-text-title">{language?.title}</h1>
      </div>
      {/*<iframe
        className='romance-gallery-video'
        src="https://www.youtube.com/embed/4nFgp8WdJI0"
        title="Rutas Gastronómicas"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />*/}
      <Share 
        urlFaceboock = "https://visitmexico.com/rutas-gastronomicas/"
        urlPinterest = "https://visitmexico.com/rutas-gastronomicas/"
        urlTwitter = "https://visitmexico.com/rutas-gastronomicas/"
        urlWhatsapp = "https://visitmexico.com/rutas-gastronomicas/"
      />
      <div className="romance-gallery-content-ctn-img">
        {getImages()}
      </div>
    </section>
  )
};

export default RomanceGallery;
