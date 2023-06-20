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

const GastronomicRoutes = () => {
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
    <section className="gastronomic-routes-content-ctn">
      <div className="gastronomic-routes-content-ctn-text">
      <h1 className="gastronomic-routes-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="gastronomic-routes-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="gastronomic-routes-content-ctn-img">
        <LazyLoadImage
          className="gastronomic-routes-content-img"
          src={require(`../../assets/img/rutasGastronomicas/Dgo_Ciudad_Durango421.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/experiencias/"
        urlPinterest = "https://visitmexico.com/experiencias/"
        urlTwitter = "https://visitmexico.com/experiencias/"
        urlWhatsapp = "https://visitmexico.com/experiencias/"
      />
    </section>
  )
};

export default GastronomicRoutes;
