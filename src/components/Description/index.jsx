import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/description/es/index.json';
import dataEn from '../../assets/data/description/en/index.json';
import dataDe from '../../assets/data/description/de/index.json';
import dataFr from '../../assets/data/description/fr/index.json';
import dataPt from '../../assets/data/description/pt/index.json';
import dataJp from '../../assets/data/description/jp/index.json';
import dataCn from '../../assets/data/description/cn/index.json';
import Share from '../Share';
import './style.css';

const Description = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : isLanguage === 'DE' ? setLanguage(dataDe)
    : isLanguage === 'FR' ? setLanguage(dataFr)
    : isLanguage === 'PT' ? setLanguage(dataPt)
    : isLanguage === 'JP' ? setLanguage(dataJp)
    : isLanguage === 'CN' ? setLanguage(dataCn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="description-ctn">
      <div className="description-ctn-text">
        <h2 className="description-text-title">{language?.title}</h2>
        <p className="description-text-desc">{language?.description}</p>
        {/*<div className="description-ctn-badge">
          <p className="description-badge-text">{language?.actions?.button?.text}</p>
        </div>*/}
      </div>
      <div className="description-ctn-img">
        <LazyLoadImage
          className="description-img"
          src={require(`../../assets/img/solYPlaya/Qroo_cancun_playa108.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/"
        urlPinterest = "https://visitmexico.com/"
        urlTwitter = "https://visitmexico.com/"
        urlWhatsapp = "https://visitmexico.com/"
      />
    </section>
  )
};

export default Description;
