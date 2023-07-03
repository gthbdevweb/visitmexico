import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
// import { Link } from 'react-router-dom';
import dataEs from '../../assets/data/tipsForTraveling/es/index.json';
import dataEn from '../../assets/data/tipsForTraveling/en/index.json';
import dataFr from '../../assets/data/tipsForTraveling/fr/index.json';
import dataDe from '../../assets/data/tipsForTraveling/de/index.json';
import dataJp from '../../assets/data/tipsForTraveling/jp/index.json';
import dataPt from '../../assets/data/tipsForTraveling/pt/index.json';
import dataCn from '../../assets/data/tipsForTraveling/cn/index.json';
import Share from '../Share';
import './style.css';

const TipsForTraveling = () => {
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
    <section className="tips-for-traveling-content-ctn">
      <div className="tips-for-traveling-content-ctn-text">
        <div className="tips-for-traveling-content-ctn-img">
          <LazyLoadImage
            className="tips-for-traveling-content-img"
            src={require(`../../assets/img/solYPlaya/Qroo_cancun_playa108.webp`)} 
            alt={language?.title}
          />
        </div>
        <h2 className="tips-for-traveling-content-text-title">{language?.title}</h2>
        <div className={`tips-for-traveling-content-text-desc-${show ? 'show' : 'hide'}`}>
          <ul>
            {language?.description?.map((info, index) => <li key={index}>{info?.text}</li>)}
          </ul>
        </div>
      </div>
      <div>
        <Share 
          urlFaceboock = "https://visitmexico.com/"
          urlPinterest = "https://visitmexico.com/"
          urlTwitter = "https://visitmexico.com/"
          urlWhatsapp = "https://visitmexico.com/"
        />
        {/* <Link 
          to='/rutas-gastronomicas'
        >
          <button className='btn btn-outline-primary class-button-gastronomic'>
            Galeria
          </button>
        </Link> */}
      </div>
      <button
        className="tips-for-traveling-btn-show btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Ver {show ? 'menos' : 'más'}
      </button>
    </section>
  )
};

export default TipsForTraveling;
