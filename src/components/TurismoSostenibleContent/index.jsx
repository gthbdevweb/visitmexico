import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/turismoSostenible/es/index.json';
import dataEn from '../../assets/data/turismoSostenible/en/index.json';
import dataFr from '../../assets/data/turismoSostenible/fr/index.json';
import dataDe from '../../assets/data/turismoSostenible/de/index.json';
import dataJp from '../../assets/data/turismoSostenible/jp/index.json';
import dataPt from '../../assets/data/turismoSostenible/pt/index.json';
import dataCn from '../../assets/data/turismoSostenible/cn/index.json';
import Share from '../Share';
import './style.css';

const TurismoSostenibleContent = () => {
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
    <section className="turismo-sostenible-content-ctn">
      <div className="turismo-sostenible-content-ctn-text">
        <h1 className="turismo-sostenible-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="turismo-sostenible-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="turismo-sostenible-content-ctn-img">
        <LazyLoadImage
          className="turismo-sostenible-content-img"
          src={require(`../../assets/img/turismoSostenible/BCS_tiburonballena.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/turismosostenible/"
        urlPinterest = "https://visitmexico.com/turismosostenible/"
        urlTwitter = "https://visitmexico.com/turismosostenible/"
        urlWhatsapp = "https://visitmexico.com/turismosostenible/"
      />
    </section>
  )
};

export default TurismoSostenibleContent;
