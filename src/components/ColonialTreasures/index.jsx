import React, { useEffect, useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/colonialTreasures/es/index.json';
import dataEn from '../../assets/data/colonialTreasures/en/index.json';
import dataFr from '../../assets/data/colonialTreasures/fr/index.json';
import dataDe from '../../assets/data/colonialTreasures/de/index.json';
import dataJp from '../../assets/data/colonialTreasures/jp/index.json';
import dataPt from '../../assets/data/colonialTreasures/pt/index.json';
import dataCn from '../../assets/data/colonialTreasures/cn/index.json';
import Share from '../Share';
import './style.css';

const ColonialTreasures = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const [show, setShow] = useState(false);

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
    <section className="colonial-treasures-content-ctn">
      <div className="colonial-treasures-content-ctn-text">
        <div className="colonial-treasures-content-ctn-img">
          <LazyLoadImage
            className="colonial-treasures-content-img"
            src={require(`../../assets/img/solYPlaya/Qroo_cancun_playa108.webp`)} 
            alt={language?.title}
          />
        </div>
        <h1 className="colonial-treasures-content-text-title">{language?.title}</h1>
        <div className={`colonial-treasures-content-text-desc-${show ? 'show' : 'hide'}`}>
          {language?.description?.map((info, index) => <p key={index}>{info?.text}</p>)}
        </div>
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/"
        urlPinterest = "https://visitmexico.com/"
        urlTwitter = "https://visitmexico.com/"
        urlWhatsapp = "https://visitmexico.com/"
      />
      {/*<Link
        to='/sol-y-playa'
      >
        <button className='btn btn-outline-primary class-button-romance'>Galería</button>
      </Link>*/}
      <button
        className="colonial-treasures-btn-show btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Ver {show ? 'menos' : 'más'}
      </button>
    </section>
  )
};

export default ColonialTreasures;
