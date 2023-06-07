import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/solYPlaya/es/index.json';
import dataEn from '../../assets/data/solYPlaya/en/index.json';
import dataFr from '../../assets/data/solYPlaya/fr/index.json';
import dataDe from '../../assets/data/solYPlaya/de/index.json';
import dataJp from '../../assets/data/solYPlaya/jp/index.json';
import dataPt from '../../assets/data/solYPlaya/pt/index.json';
import dataCn from '../../assets/data/solYPlaya/cn/index.json';
import Share from '../Share';
import './style.css';

const SolYPlayaContent = () => {
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
    <section className="sol-y-playa-content-ctn">
      <div className="sol-y-playa-content-ctn-text">
        <h1 className="sol-y-playa-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="sol-y-playa-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="sol-y-playa-content-ctn-img">
        <LazyLoadImage
          className="sol-y-playa-content-img"
          src={require(`../../assets/img/solYPlaya/Qroo_cancun_playa108.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/solyplaya/"
        urlPinterest = "https://visitmexico.com/solyplaya/"
        urlTwitter = "https://visitmexico.com/solyplaya/"
        urlWhatsapp = "https://visitmexico.com/solyplaya/"
      />
    </section>
  )
};

export default SolYPlayaContent;
