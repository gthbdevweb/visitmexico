import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import dataEs from '../../assets/data/trends/es/index.json';
import dataEn from '../../assets/data/trends/en/index.json';
import Share from '../Share';
import './style.css';

const Slider = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});

  const getList = () => {
    setTimeout(() => {
      let items = document.querySelectorAll('.carousel-js .carousel-item-js');
    
      items.forEach((el) => {
        const minPerSlide = 3
        let next = el.nextElementSibling
        for (var i=1; i<minPerSlide; i++) {
          if (!next) {
            next = items[0]
          }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.children[0])
          next = next.nextElementSibling
        }
      })
    }, 0); 
  };

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  useEffect(() => {
    getList() 
  }, [language]);

  const listTrends = () => (
    language?.trends?.map((trend, index) => (
      <div className={`carousel-item carousel-item-js ${index === 0 && "active"}`} key={index} aria-label="slide">
        <div className="col-md-4">
          <div className="card slider-card-ctn">
            <div className="heading-card-img heading-slider-card-ctn-img">
              <Link to={trend.dir} rel="noopener noreferrer">
                <div className="heading-card-img heading-slider-card-img">
                  <iframe
                    width="100%"
                    height="100%"
                    src={trend?.urlVideo}
                    title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
                    frameBorder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading='lazy'
                  />
                </div>
                <h3 className="heading-slider-text-title">{trend?.title}</h3>
                {/*<img
                  src={require(`../../assets/img/trends/${trend.urlImg}`)} 
                  className="heading-card-img heading-slider-card-img"
                  alt={trend.title}
                  loading='lazy'
                />
                <h3 className="heading-slider-text-title">{trend.title}</h3>
                <p className="heading-slider-text-desc">{trend.description}</p>*/}
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))
  );

  return (
    <section className="slider-ctn">
      {language?.trends &&
      <div id="recipeCarousel" className="carousel carousel-js slide" data-bs-ride="carousel" data-ride="carousel">
        <div className="carousel-inner carousel-inner-js" role="listbox" aria-label="Recent slides">
          {listTrends()}
        </div>
        <a className="carousel-control-prev carousel-control-prev-js bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next carousel-control-next-js bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>}
      <Share
        urlFaceboock = "https://visitmexico.com/"
        urlPinterest = "https://visitmexico.com/"
        urlTwitter = "https://visitmexico.com/"
        urlWhatsapp = "https://visitmexico.com/"
      />
    </section>
  )
};

export default Slider;
