import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/romance/es/index.json';
import dataEn from '../../assets/data/romance/en/index.json';
import dataFr from '../../assets/data/romance/fr/index.json';
import dataDe from '../../assets/data/romance/de/index.json';
import dataJp from '../../assets/data/romance/jp/index.json';
import dataPt from '../../assets/data/romance/pt/index.json';
import dataCn from '../../assets/data/romance/cn/index.json';
import Share from '../Share';
import './style.css';

const Romance = () => {
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
    <section className="romance-content-ctn">
      <div className="romance-content-ctn-img">
        <LazyLoadImage
          className="romance-content-img"
          src={require(`../../assets/img/romance/Pareja-Queretaro-3.webp`)} 
          alt={language?.title}
        />
      </div>
      <div className="romance-content-ctn-text">
        <h1 className="romance-content-text-title">{language?.title}</h1>
        {language?.description?.map((info, index) => index === 0 && <p className="romance-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/romance/"
        urlPinterest = "https://visitmexico.com/romance/"
        urlTwitter = "https://visitmexico.com/romance/"
        urlWhatsapp = "https://visitmexico.com/romance/"
      />
      <Link
        to='/romance'
      >
        <button className='btn btn-outline-primary class-button-romance'>Más</button>
      </Link>
    </section>
  )
};

export default Romance;
