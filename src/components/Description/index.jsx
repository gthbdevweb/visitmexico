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
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="100%" xmlSpace="preserve" className='animate-text-ctn'>
          <defs style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', margin: '0 auto' }}>
            <pattern id="water" width=".25" height=".5" patternContentUnits="objectBoundingBox">
              <path fill="#000f4d" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"/>
            </pattern>
            <text id="text" transform="translate(1,100)" fontFamily="'Roboto'">{language?.title}</text>
            <mask id="text-mask">
              <use x="0" y="0" xlinkHref="#text" opacity="1" fill="#ffffff" />
            </mask>
            <g id="eff">
              <use x="0" y="0" xlinkHref="#text" fill="#a2a3a5"/>
              <rect className="water-fill" mask="url(#text-mask)" fill="url(#water)" x="-300" y="50" width="1200" height="200" opacity="0.3">
                <animate attributeType="xml" attributeName="x" from="-300" to="0" repeatCount="indefinite" dur="2s"/>
              </rect>
              <rect className="water-fill" mask="url(#text-mask)" fill="url(#water)" y="45" width="1600" height="200" opacity="0.3">
                <animate attributeType="xml" attributeName="x" from="-400" to="0" repeatCount="indefinite" dur="3s"/>
              </rect>
              <rect className="water-fill" mask="url(#text-mask)" fill="url(#water)" y="55" width="800" height="200" opacity="0.3">
                <animate attributeType="xml" attributeName="x" from="-200" to="0" repeatCount="indefinite" dur="1.4s"/>
              </rect>
                  <rect className="water-fill" mask="url(#text-mask)" fill="url(#water)" y="55" width="2000" height="200" opacity="0.3">
                <animate attributeType="xml" attributeName="x" from="-500" to="0" repeatCount="indefinite" dur="2.8s"/>
              </rect>
            </g>
          </defs>
            <use xlinkHref="#eff" opacity="0.9" style={{ mixBlendMode: 'color-burn' }}/>
        </svg>
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
