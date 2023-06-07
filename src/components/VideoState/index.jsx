import React, { useState, useEffect, useContext} from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../../Context';
import dataEs from '../../assets/data/states/es/index.json';
import dataEn from '../../assets/data/states/en/index.json';
import dataFr from '../../assets/data/states/fr/index.json';
import dataDe from '../../assets/data/states/de/index.json';
import dataJp from '../../assets/data/states/jp/index.json';
import dataCn from '../../assets/data/states/cn/index.json';
import './style.css';

const VideoState = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const location = useLocation();
  const stateId = location?.pathname?.split('/')[2];
  const getStateInfo = language?.states?.filter(state => state.id === stateId);
  const data = getStateInfo?.[0];
  
  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : isLanguage === 'FR' ? setLanguage(dataFr)
    : isLanguage === 'DE' ? setLanguage(dataDe)
    : isLanguage === 'JP' ? setLanguage(dataJp)
    : isLanguage === 'CN' ? setLanguage(dataCn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  return (
    <section className="state-video-top-ctn">
      <iframe
        width="100%"
        height="100%"
        src={data?.urlVideoTop}
        title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading='lazy'  
      />
    </section>
  )
};

export default VideoState;
