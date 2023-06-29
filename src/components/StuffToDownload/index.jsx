import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
// import { Link } from 'react-router-dom';
import dataEs from '../../assets/data/stuffToDownload/es/index.json';
import dataEn from '../../assets/data/stuffToDownload/en/index.json';
import dataFr from '../../assets/data/stuffToDownload/fr/index.json';
import dataDe from '../../assets/data/stuffToDownload/de/index.json';
import dataJp from '../../assets/data/stuffToDownload/jp/index.json';
import dataPt from '../../assets/data/stuffToDownload/pt/index.json';
import dataCn from '../../assets/data/stuffToDownload/cn/index.json';
import Share from '../Share';
import './style.css';

const StuffToDownload = () => {
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
        className="stuff-to-download-gallery-content-img"
        src={require(`../../assets/img/material/${image.imageUrl}`)} 
        alt={image?.title}
      />
    ))
  );

  return (
    <section className="stuff-to-download-gallery-content-ctn">
      <div className="stuff-to-download-gallery-content-ctn-text">
        <h1 className="stuff-to-download-gallery-content-text-title">{language?.title}</h1>
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/materia-para-descargar/"
        urlPinterest = "https://visitmexico.com/materia-para-descargar/"
        urlTwitter = "https://visitmexico.com/materia-para-descargar/"
        urlWhatsapp = "https://visitmexico.com/materia-para-descargar/"
      />
      <div className="stuff-to-download-gallery-content-ctn-img">
        {getImages()}
      </div>
    </section>
  )
};

export default StuffToDownload;
