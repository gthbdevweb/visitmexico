import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import dataEs from '../../assets/data/hero/es/index.json';
import dataEn from '../../assets/data/hero/en/index.json';
import './style.css';


const Hero = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  const heroBrand = () => (
    <div className='carousel-brand'>
      <p className='carousel-brand-text'>
        {language?.brand?.text}
      </p>
    </div>
  );

  const carouselItem = () => (
    language?.carousel?.map((lang, index) => (
      <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
        <LazyLoadImage 
          src={require(`../../assets/img/hero/${lang.url}`)} 
          className="hero-carousel-img"
          alt={lang.id}
        />
      </div>  
    ))
  );

  const carousel = () => (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {carouselItem()}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>  
  );

  const hero = () => (
    <div className="hero-text-ctn">
      <h1 className="hero-text-title">{language?.content?.title}</h1>
      <h2 className="hero-text-subtitle">{language?.content?.subtitle}</h2>
      <p className="hero-text-desc">{language?.content?.description}</p>
      <Link to={language?.actions?.button?.dir}>
        <button type="button" className="btn btn-outline-primary class-buton-hero">{language?.actions?.button?.text}</button>
      </Link>
    </div>
  );

  return (
    <section className="hero-ctn">
      {heroBrand()}
      {carousel()}
      {hero()}
    </section>
  )
}

export default Hero
