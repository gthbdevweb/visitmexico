import React, { useEffect, useState, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/toDo/es/index.json';
import dataEn from '../../assets/data/toDo/en/index.json';
import dataFr from '../../assets/data/toDo/fr/index.json';
import dataDe from '../../assets/data/toDo/de/index.json';
import dataJp from '../../assets/data/toDo/jp/index.json';
import dataPt from '../../assets/data/toDo/pt/index.json';
import dataCn from '../../assets/data/toDo/cn/index.json';
import Share from '../Share';
import './style.css';

const ToDo = () => {
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
    <section className="to-do-content-ctn">
      <div className="to-do-content-ctn-text">
        <div className="to-do-content-ctn-img">
          <LazyLoadImage
            className="to-do-content-img"
            src={require(`../../assets/img/solYPlaya/Qroo_cancun_playa108.webp`)} 
            alt={language?.title}
          />
        </div>
        <h2 className="to-do-content-text-title">{language?.title}</h2>
        <div className={`to-do-content-text-desc-${show ? 'show' : 'hide'}`}>
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
        <button className='btn btn-outline-primary class-button-romance'>Galería</button>
      </Link> */}
      <button
        className="to-do-btn-show btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Ver {show ? 'menos' : 'más'}
      </button>
    </section>
  )
};

export default ToDo;
