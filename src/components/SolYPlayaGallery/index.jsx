import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/solYPlayaGallery/es/index.json';
import dataEn from '../../assets/data/solYPlayaGallery/en/index.json';
import dataFr from '../../assets/data/solYPlayaGallery/fr/index.json';
import dataDe from '../../assets/data/solYPlayaGallery/de/index.json';
import dataJp from '../../assets/data/solYPlayaGallery/jp/index.json';
import dataPt from '../../assets/data/solYPlayaGallery/pt/index.json';
import dataCn from '../../assets/data/solYPlayaGallery/cn/index.json';
import Share from '../Share';
import './style.css';

const SolYPlayaGallery = () => {
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
        className="sol-y-playa-gallery-content-img"
        src={require(`../../assets/img/solYPlayaGallery/${image.imageUrl}`)} 
        alt={image?.title}
      />
    ))
  );

  return (
    <section className="sol-y-playa-gallery-content-ctn">
      <div className="sol-y-playa-gallery-content-ctn-text">
        <h1 className="sol-y-playa-gallery-content-text-title">{language?.title}</h1>
      </div>
      {/*<iframe
        className='sol-y-playa-gallery-video'
        src="https://www.youtube.com/embed/4nFgp8WdJI0"
        title="Rutas Gastronómicas"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />*/}
      <Share 
        urlFaceboock = "https://visitmexico.com/sol-y-playa/"
        urlPinterest = "https://visitmexico.com/sol-y-playa/"
        urlTwitter = "https://visitmexico.com/sol-y-playa/"
        urlWhatsapp = "https://visitmexico.com/sol-y-playa/"
      />
      <div className="sol-y-playa-gallery-content-ctn-img">
        {getImages()}
      </div>
    </section>
  )
};

export default SolYPlayaGallery;
