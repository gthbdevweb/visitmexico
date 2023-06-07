import React, { useState, useEffect, useContext} from 'react';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import dataEs from '../../assets/data/menu/es/index.json';
import dataEn from '../../assets/data/menu/en/index.json';
import './style.css';

const Places = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  const placesContent = () => (
    language?.menu?.map((item, index) => (
      <div className="places-card" key={index} >
        <Link to={item.dir} className="places-card-link">
          <LazyLoadImage 
            className="places-card-img"
            src={require(`../../assets/img/places/${item.urlImg}`)} 
            alt={item.name}
          />
          <p className="places-card-text">{item.description}</p>
          <div className="places-card-hover">
            <p className="places-card-hover-text">{item.hover}</p>
          </div>
        </Link>
      </div>
    ))
  );

  return (
    <section className="places-ctn sliceLeft">
      <h2 className="places-text-title">{language?.header?.title}</h2>
      <p className="pĺaces-text-desciption">{language?.header?.description}</p>
      <div className="places-cards-ctn">
        {placesContent()}
      </div>
    </section>
  )
};

export default Places;
