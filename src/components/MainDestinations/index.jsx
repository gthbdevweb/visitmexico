import React, { useEffect, useState, useContext } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
// import { Link } from 'react-router-dom';
import dataEs from '../../assets/data/mainDestinations/es/index.json';
import dataEn from '../../assets/data/mainDestinations/en/index.json';
import dataFr from '../../assets/data/mainDestinations/fr/index.json';
import dataDe from '../../assets/data/mainDestinations/de/index.json';
import dataJp from '../../assets/data/mainDestinations/jp/index.json';
import dataPt from '../../assets/data/mainDestinations/pt/index.json';
import dataCn from '../../assets/data/mainDestinations/cn/index.json';
import Share from '../Share';
import './style.css';

const MainDestinations = () => {
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
    <section className="main-destinations-content-ctn">
      <div className="main-destinations-content-ctn-text">
      <h2 className="main-destinations-content-text-title">{language?.title}</h2>
        {language?.description?.map((info, index) => <p className="main-destinations-content-text-desc" key={index}>{info?.text}</p>)}
      </div>
      {/* <div className="main-destinations-content-ctn-img">
        <LazyLoadImage
          className="main-destinations-content-img"
          src={require(`../../assets/img/rutasGastronomicas/PUE-Puebla-Gastronomia-JoyasColoniales-FabianGarcilita-BC3_3712-_1_.webp`)} 
          alt={language?.title}
        />
      </div> */}
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

export default MainDestinations;
