import React, { useState, useEffect, useContext} from 'react';  
import { Context } from '../../Context';
import dataEs from '../../assets/data/videos/es/index.json';
import dataEn from '../../assets/data/videos/en/index.json';
import './style.css';

const HeaderVideos = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  return (
    <section className="videos-title-ctn">
      <h1 className="videos-title-text-title">{language?.title}</h1>
    </section>
  )
};

export default HeaderVideos;
