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
import dataEsText from '../../assets/data/solYPlaya/es/index.json';
import dataEnText from '../../assets/data/solYPlaya/en/index.json';
import dataFrText from '../../assets/data/solYPlaya/fr/index.json';
import dataDeText from '../../assets/data/solYPlaya/de/index.json';
import dataJpText from '../../assets/data/solYPlaya/jp/index.json';
import dataPtText from '../../assets/data/solYPlaya/pt/index.json';
import dataCnText from '../../assets/data/solYPlaya/cn/index.json';
import Share from '../Share';
import './style.css';

const SolYPlayaGallery = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const [languageText, setLanguageText] = useState({});

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

  useEffect(() => (
    isLanguage === 'MX' ? setLanguageText(dataEsText)
    : isLanguage === 'USA' ? setLanguageText(dataEnText)
    : isLanguage === 'FR' ? setLanguageText(dataFrText)
    : isLanguage === 'DE' ? setLanguageText(dataDeText)
    : isLanguage === 'JP' ? setLanguageText(dataJpText)
    : isLanguage === 'PT' ? setLanguageText(dataPtText)
    : isLanguage === 'CN' ? setLanguageText(dataCnText)
    : setLanguage(dataEsText)
  ), [isLanguage]);

  const getImages = () => (
    language?.gallery?.map((image, index) => (
      <div className="sol-y-playa-gallery-content-img-ctn">
        <LazyLoadImage
          key={index}
          className="sol-y-playa-gallery-content-img"
          src={require(`../../assets/img/solYPlayaGallery/${image.imageUrl}`)} 
          alt={image?.title}
        />
        <div className="sol-y-playa-gallery-content-img-text-ctn">
          <p className="sol-y-playa-gallery-content-img-text">{image.title}</p>
        </div>
      </div>
    ))
  );

  return (
    <section className="sol-y-playa-gallery-content-ctn">
      <div className="sol-y-playa-gallery-content-ctn-text">
        <h1 className="sol-y-playa-gallery-content-text-title">{language?.title}</h1>
      </div>
      <iframe
        className='sol-y-playa-gallery-video'
        src="https://www.youtube.com/embed/VSoy_DHqr8s"
        title="Rutas Gastronómicas"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <Share 
        urlFaceboock = "https://visitmexico.com/sol-y-playa/"
        urlPinterest = "https://visitmexico.com/sol-y-playa/"
        urlTwitter = "https://visitmexico.com/sol-y-playa/"
        urlWhatsapp = "https://visitmexico.com/sol-y-playa/"
      />
      <div className="sol-y-playa-gallery-content-ctn-img">
        {getImages()}
      </div>
      <div className="sol-y-playa-gallery-content-text-ctn">
        {languageText?.description?.map((info, index) => <p className="sol-y-playa-gallery-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      
    </section>
  )
};

export default SolYPlayaGallery;
