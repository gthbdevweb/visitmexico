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

const Benefits = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const [show, setShow] = useState(false);
  const [languajeLimit, setLanguageLimit] = useState();

  const shortTowns = (data) => {
    const languageSort = data?.towns?.sort(function(a, b){return b.id - a.id});
    const deletedTowns = languageSort?.slice(0, 4);
    setLanguageLimit(deletedTowns)
  };

  const largeTowns = (data) => {
    const languageSort = data?.towns?.sort(function(a, b){return b.id - a.id});
    setLanguageLimit(languageSort)
  };

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
      : isLanguage === 'USA' ? setLanguage(dataEn)
      : isLanguage === 'FR' ? setLanguage(dataFr)
      : isLanguage === 'DE' ? setLanguage(dataDe)
      : isLanguage === 'JP' ? setLanguage(dataJp)
      : isLanguage === 'PT' ? setLanguage(dataPt)
      : isLanguage === 'CN' ? setLanguage(dataCn)
      : setLanguage(dataEs);

    
  }, [isLanguage]);

  useEffect(() => {
    show ? largeTowns(language) : shortTowns(language)
  }, [show]);

  useEffect(() => {
    language?.towns && shortTowns(language)
  }, [language]);

  const getTowns = () => (
    languajeLimit?.map((town, index) => (
      <div className="towns-benefits-card-ctn" key={index}>
        <iframe
          className="towns-benefits-card-img"
          width="100%" 
          height="100%" 
          src={`${town?.urlVideo}?rel=0;&autoplay=0`} 
          title={town.title}
          allowfullscreen
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <h4 className="towns-benefits-card-text-title">{town.title}</h4>
      </div>
    ))
  );

  const showMore = () => {
    setShow(!show)
  };

  return (
    <section className="towns-benefits-ctn">
      <h2 className="towns-benefits-text-title">{language?.subtitle}</h2>
      <div className="towns-benefits-cards-ctn">
        {getTowns()}
      </div>
      <button
        type="button"
        className="btn btn-primary towns-benefits-card-btn"
        onClick={showMore}
      > 
      {show ? language?.textShowLess : language?.texShowMore}
      </button>
    </section>
  )
};

export default Benefits;
