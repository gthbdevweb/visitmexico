import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
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
      <h2 className="tips-for-traveling-content-text-title">{language?.title}</h2>
      <ul>
        {language?.description?.map((info, index) => <li className="tips-for-traveling-content-text-desc" key={index}>{info?.text}</li>)}
      </ul>
      </div>
      {/*<div className="tips-for-traveling-content-ctn-img">
        <LazyLoadImage
          className="tips-for-traveling-content-img"
          src={require(`../../assets/img/rutasGastronomicas/PUE-Puebla-Gastronomia-JoyasColoniales-FabianGarcilita-BC3_3712-_1_.webp`)} 
          alt={language?.title}
        />
      </div>*/}
      <div>
        <Share 
          urlFaceboock = "https://visitmexico.com/"
          urlPinterest = "https://visitmexico.com/"
          urlTwitter = "https://visitmexico.com/"
          urlWhatsapp = "https://visitmexico.com/"
        />
        {/*<Link 
          to='/rutas-gastronomicas'
        >
          <button className='btn btn-outline-primary class-button-gastronomic'>
            Galeria
          </button>
        </Link>*/}
      </div>
    </section>
  )
};

export default TipsForTraveling;
