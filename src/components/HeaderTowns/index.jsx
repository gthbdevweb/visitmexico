import React, { useState, useEffect, useContext} from 'react';
import { Context } from '../../Context';
import dataEs from '../../assets/data/towns/es/index.json';
import dataEn from '../../assets/data/towns/en/index.json';
import dataFr from '../../assets/data/towns/fr/index.json';
import dataDe from '../../assets/data/towns/de/index.json';
import dataJp from '../../assets/data/towns/jp/index.json';
import dataPt from '../../assets/data/towns/pt/index.json';
import dataCn from '../../assets/data/towns/cn/index.json';
import './style.css';

const HeaderTowns = () => {
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
    <section className="towns-header-ctn">
      <div className="towns-header-back-img-ctn">
        <iframe
          loading='lazy'
          width="100%"
          height="100%"
          src={language?.videoTop}
          title={language?.title}
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        />
      </div>
    </section>
  )
};

export default HeaderTowns;
