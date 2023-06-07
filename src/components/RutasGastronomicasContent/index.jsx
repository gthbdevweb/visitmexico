import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/rutasGastronomicas/es/index.json';
import dataEn from '../../assets/data/rutasGastronomicas/en/index.json';
import dataFr from '../../assets/data/rutasGastronomicas/fr/index.json';
import dataDe from '../../assets/data/rutasGastronomicas/de/index.json';
import dataJp from '../../assets/data/rutasGastronomicas/jp/index.json';
import dataPt from '../../assets/data/rutasGastronomicas/pt/index.json';
import dataCn from '../../assets/data/rutasGastronomicas/cn/index.json';
import Share from '../Share';
import './style.css';

const RutasGastronomicasContent = () => {
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

  return (
    <section className="rutas-gastronomicas-content-ctn">
      <div className="rutas-gastronomicas-content-ctn-text">
      <h1 className="rutas-gastronomicas-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="rutas-gastronomicas-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="rutas-gastronomicas-content-ctn-img">
        <LazyLoadImage
          className="rutas-gastronomicas-content-img"
          src={require(`../../assets/img/rutasGastronomicas/Dgo_Ciudad_Durango421.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/rutasgastronomicas/"
        urlPinterest = "https://visitmexico.com/rutasgastronomicas/"
        urlTwitter = "https://visitmexico.com/rutasgastronomicas/"
        urlWhatsapp = "https://visitmexico.com/rutasgastronomicas/"
      />
    </section>
  )
};

export default RutasGastronomicasContent;
