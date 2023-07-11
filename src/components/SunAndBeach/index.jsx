import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
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

const SunAndBeach = () => {
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
    <section className="sun-and-beach-content-ctn">
      <div className="sun-and-beach-content-ctn-img">
        <LazyLoadImage
          className="sun-and-beach-content-img"
          src={require(`../../assets/img/solYPlaya/Qroo_cancun_playa108.webp`)} 
          alt={language?.title}
        />
      </div>
      <div className="sun-and-beach-content-ctn-text">
        <h1 className="sun-and-beach-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => index === 0 && <p className="sun-and-beach-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/solyplaya/"
        urlPinterest = "https://visitmexico.com/solyplaya/"
        urlTwitter = "https://visitmexico.com/solyplaya/"
        urlWhatsapp = "https://visitmexico.com/solyplaya/"
      />
      <Link
        to='/sol-y-playa'
      >
        <button className='btn btn-outline-primary class-button-romance'>Más</button>
      </Link>
    </section>
  )
};

export default SunAndBeach;
