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

const SustainableTourism = () => {
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
    <section className="sustainable-tourism-content-ctn">
      <div className="sustainable-tourism-content-ctn-img">
        <LazyLoadImage
          className="sustainable-tourism-content-img"
          src={require(`../../assets/img/turismoSostenible/CHIH_creel47-_1__11zon.webp`)} 
          alt={language?.title}
        />
      </div>
      <div className="sustainable-tourism-content-ctn-text">
        <h1 className="sustainable-tourism-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="sustainable-tourism-content-text-desc" key={index}>{info?.text}</p>)}
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

export default SustainableTourism;
