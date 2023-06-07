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

const BottomTowns = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
  isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : isLanguage === 'FR' ? setLanguage(dataFr)
    : isLanguage === 'DE' ? setLanguage(dataDe)
    : isLanguage === 'JP' ? setLanguage(dataJp)
    : isLanguage === 'PT' ? setLanguage(dataPt)
    : isLanguage === 'CN' ? setLanguage(dataCn)
    : setLanguage(dataEs)
  }, [isLanguage]);

  return (
    <section className="towns-bottom-ctn">
      <div className="towns-bottom-img-ctn">
        <img
         className="towns-bottom-img"
         src={require(`../../assets/img/towns/Tlaxcala_Portada.webp`)}
         alt={language?.title}
       />
      </div>
      <div className="towns-bottom-text-ctn">
        <h3 className="towns-bottom-text-title">{language?.title}</h3>
        <p className="towns-bottom-text-desc">{language?.descriptionTop}</p>
      </div>
    </section>
  )
};

export default BottomTowns;
