import React, { useState, useEffect, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Context } from '../../Context';
import dataEs from '../../assets/data/states/es/index.json';
import dataEn from '../../assets/data/states/en/index.json';
import dataFr from '../../assets/data/states/fr/index.json';
import dataDe from '../../assets/data/states/de/index.json';
import dataJp from '../../assets/data/states/jp/index.json';
import dataCn from '../../assets/data/states/cn/index.json';
import './style.css';

const StateKnown = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = language?.states?.filter(state => state.id === stateId);
  const data = getStateInfo?.[0];

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : isLanguage === 'FR' ? setLanguage(dataFr)
    : isLanguage === 'DE' ? setLanguage(dataDe)
    : isLanguage === 'JP' ? setLanguage(dataJp)
    : isLanguage === 'CN' ? setLanguage(dataCn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  return (
    <section className="state-known-ctn sliceLeft">
      <div className="state-known-text-ctn">
        <h2 className="state-known-text-title">{data?.titleTop}</h2>
        <p className="state-known-text-desc">{data?.descriptionTop} </p>
        <a
          href={data?.actions?.button?.dir}
          target="_blank"
          rel="noopener
          noreferrer"
          className="btn btn-outline-primary state-known-btn"
        >
          {data?.actions?.button?.text}
        </a>
      </div>
      <div className="state-known-img-ctn">
      {getStateInfo?.map((data, index) => (
        <LazyLoadImage
          className="state-known-img"
          src={require(`../../assets/img/states/${data.urlImg}`)}
          alt={data?.titleTop}
          key={index}
        />
      ))}
      </div>
    </section>
  )
};

export default StateKnown;
