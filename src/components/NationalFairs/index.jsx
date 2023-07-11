import React, { useEffect, useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/nationalFairs/es/index.json';
import dataEn from '../../assets/data/nationalFairs/en/index.json';
import dataFr from '../../assets/data/nationalFairs/fr/index.json';
import dataDe from '../../assets/data/nationalFairs/de/index.json';
import dataJp from '../../assets/data/nationalFairs/jp/index.json';
import dataPt from '../../assets/data/nationalFairs/pt/index.json';
import dataCn from '../../assets/data/nationalFairs/cn/index.json';
import Share from '../Share';
import './style.css';

const NationalFairs = () => {
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
    <section className="national-fairs-content-ctn">
      <div className="national-fairs-content-ctn-text">
        <div className="national-fairs-content-ctn-img">
          <LazyLoadImage
            className="national-fairs-content-img"
            src={require(`../../assets/img/solYPlaya/Qroo_cancun_playa108.webp`)} 
            alt={language?.title}
          />
        </div>
        <h2 className="national-fairs-content-text-title">{language?.title}</h2>
        <div className={`national-fairs-content-text-desc-${show ? 'show' : 'hide'}`}>
          {language?.description?.map((info, index) => <p key={index}>{info?.text}</p>)}
        </div>
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/"
        urlPinterest = "https://visitmexico.com/"
        urlTwitter = "https://visitmexico.com/"
        urlWhatsapp = "https://visitmexico.com/"
      />
      {/* <Link
        to='/sol-y-playa'
      >
        <button className='btn btn-outline-primary class-button-romance'>Más</button>
      </Link> */}
      <button
        className="national-fairs-btn-show btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Ver {show ? 'menos' : 'más'}
      </button>
    </section>
  )
};

export default NationalFairs;
