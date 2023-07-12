import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
// import { Link } from 'react-router-dom';
import dataEs from '../../assets/data/rutasGastronomicasGallery/es/index.json';
import dataEn from '../../assets/data/rutasGastronomicasGallery/en/index.json';
import dataFr from '../../assets/data/rutasGastronomicasGallery/fr/index.json';
import dataDe from '../../assets/data/rutasGastronomicasGallery/de/index.json';
import dataJp from '../../assets/data/rutasGastronomicasGallery/jp/index.json';
import dataPt from '../../assets/data/rutasGastronomicasGallery/pt/index.json';
import dataCn from '../../assets/data/rutasGastronomicasGallery/cn/index.json';
import dataEsText from '../../assets/data/rutasGastronomicas/es/index.json';
import dataEnText from '../../assets/data/rutasGastronomicas/en/index.json';
import dataFrText from '../../assets/data/rutasGastronomicas/fr/index.json';
import dataDeText from '../../assets/data/rutasGastronomicas/de/index.json';
import dataJpText from '../../assets/data/rutasGastronomicas/jp/index.json';
import dataPtText from '../../assets/data/rutasGastronomicas/pt/index.json';
import dataCnText from '../../assets/data/rutasGastronomicas/cn/index.json';
import Share from '../Share';
import './style.css';

const GastronomicRoutesGallery = () => {
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
      <div className="gastronomic-routes-gallery-content-img-ctn">
        <LazyLoadImage
          key={index}
          className="gastronomic-routes-gallery-content-img"
          src={require(`../../assets/img/routesGastronomicGallery/${image.imageUrl}`)} 
          alt={image?.title}
        />
        <div className="gastronomic-routes-gallery-content-img-text-ctn">
          <p className="gastronomic-routes-gallery-content-img-text">{image.title}</p>
        </div>
      </div>
    ))
  );

  return (
    <section className="gastronomic-routes-gallery-content-ctn">
      <div className="gastronomic-routes-gallery-content-ctn-text">
        <h1 className="gastronomic-routes-gallery-content-text-title">{language?.title}</h1>
      </div>
      <iframe
        className='gastronomic-routes-gallery-video'
        src="https://www.youtube.com/embed/4nFgp8WdJI0"
        title="Rutas Gastronómicas"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <Share 
        urlFaceboock = "https://visitmexico.com/rutas-gastronomicas/"
        urlPinterest = "https://visitmexico.com/rutas-gastronomicas/"
        urlTwitter = "https://visitmexico.com/rutas-gastronomicas/"
        urlWhatsapp = "https://visitmexico.com/rutas-gastronomicas/"
      />
      <div className="gastronomic-routes-gallery-content-ctn-img">
        {getImages()}
      </div>
      <div className="gastronomic-routes-gallery-content-text-ctn">
        {languageText?.description?.map((info, index) => <p className="gastronomic-routes-gallery-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
    </section>
  )
};

export default GastronomicRoutesGallery;
