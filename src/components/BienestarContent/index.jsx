import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/bienestar/es/index.json';
import dataEn from '../../assets/data/bienestar/en/index.json';
import dataFr from '../../assets/data/bienestar/fr/index.json';
import dataDe from '../../assets/data/bienestar/de/index.json';
import dataJp from '../../assets/data/bienestar/jp/index.json';
import dataPt from '../../assets/data/bienestar/pt/index.json';
import dataCn from '../../assets/data/bienestar/cn/index.json';
import Share from '../Share';
import './style.css';

const BienestarContent = () => {
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
    <section className="bienestar-content-ctn">
      <div className="bienestar-content-ctn-text">
        <h1 className="bienestar-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => <p className="bienestar-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <div className="bienestar-content-ctn-img">
        <LazyLoadImage
          className="bienestar-content-img"
          src={require(`../../assets/img/bienestar/MOR_Tepoztlan_HotelDosPiedras_LGBT-33.webp`)} 
          alt={language?.title}
        />
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/bienestar/"
        urlPinterest = "https://visitmexico.com/bienestar/"
        urlTwitter = "https://visitmexico.com/bienestar/"
        urlWhatsapp = "https://visitmexico.com/bienestar/"
      />
    </section>
  )
};

export default BienestarContent;
