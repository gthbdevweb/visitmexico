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
import dataEsText from '../../assets/data/romance/es/index.json';
import dataEnText from '../../assets/data/romance/en/index.json';
import dataFrText from '../../assets/data/romance/fr/index.json';
import dataDeText from '../../assets/data/romance/de/index.json';
import dataJpText from '../../assets/data/romance/jp/index.json';
import dataPtText from '../../assets/data/romance/pt/index.json';
import dataCnText from '../../assets/data/romance/cn/index.json';
import Share from '../Share';
import './style.css';

const RomanceGallery = () => {
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
      <div className="romance-gallery-content-img-ctn">
        <LazyLoadImage
          key={index}
          className="romance-gallery-content-img"
          src={require(`../../assets/img/romanceGallery/${image.imageUrl}`)} 
          alt={image?.title}
        />
        <div className="romance-gallery-content-img-text-ctn">
          <p className="romance-gallery-content-img-text">{image.title}</p>
        </div>
      </div>
    ))
  );

  return (
    <section className="romance-gallery-content-ctn">
      <div className="romance-gallery-content-ctn-text">
        <h1 className="romance-gallery-content-text-title">{language?.title}</h1>
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/rutas-gastronomicas/"
        urlPinterest = "https://visitmexico.com/rutas-gastronomicas/"
        urlTwitter = "https://visitmexico.com/rutas-gastronomicas/"
        urlWhatsapp = "https://visitmexico.com/rutas-gastronomicas/"
      />
      <div className="romance-gallery-content-text-ctn">
        {languageText?.description?.map((info, index) => <p className="romance-gallery-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="romance-gallery-content-ctn-img">
        {getImages()}
      </div>
      <iframe
        className='romance-gallery-video'
        src="https://www.youtube.com/embed/zXbpLh_guyY"
        title="Rutas Gastronómicas"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </section>
  )
};

export default RomanceGallery;
