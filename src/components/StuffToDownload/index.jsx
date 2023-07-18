import React, { useEffect, useState, useContext } from 'react';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import { Context } from '../../Context';
// import { Link } from 'react-router-dom';
import dataEs from '../../assets/data/stuffToDownload/es/index.json';
import dataEn from '../../assets/data/stuffToDownload/en/index.json';
import dataFr from '../../assets/data/stuffToDownload/fr/index.json';
import dataDe from '../../assets/data/stuffToDownload/de/index.json';
import dataJp from '../../assets/data/stuffToDownload/jp/index.json';
import dataPt from '../../assets/data/stuffToDownload/pt/index.json';
import dataCn from '../../assets/data/stuffToDownload/cn/index.json';
import Share from '../Share';
import './style.css';

const StuffToDownload = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const [galleryList, setGalleryList] = useState([]);
  const [category, setCategory] = useState();

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

  function downloadFile(url) {
    const nameImg = url;
    fetch(require(`../../assets/img/material/${url}`), { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', nameImg);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
  };

  const getImages = () => (
    galleryList?.map((image, index) => (
      <div className="stuff-to-download-gallery-content-img-ctn">
        <LazyLoadImage
          key={index}
          className="stuff-to-download-gallery-content-img"
          src={require(`../../assets/img/material/${image?.value}`)} 
          alt={image?.name}
        />
        <p className="stuff-to-download-gallery-content-img-p">{image?.name}</p>
        <button 
          className="stuff-to-download-gallery-btn"
          onClick={() => downloadFile(image?.value)}
        >
          Descargar
        </button>
      </div>
    ))
  );

  const options = [
    {name: 'Rutas Gastronómicas', value: 'rutas-gastronomicas'},
    {name: 'Sol y Playa', value: 'sol-y-playa'},
    {name: 'Bodas', value: 'bodas'},
  ];

  const handleSearch = (data) => {
    console.log('data: ', data);
    setCategory(data);
  };

  useEffect(() => {
    const getListCategories = language?.gallery?.map((item) => item.category === category ? item : null);
    const getFilterCategories = getListCategories?.filter(item => item !== null);
    console.log('getListCategories: ', getFilterCategories);
    setGalleryList(getFilterCategories);
  }, [category]);

  useEffect(() => {
    setGalleryList(language?.gallery)
  }, [language?.gallery]);

  return (
    <section className="stuff-to-download-gallery-content-ctn">
      <div className="stuff-to-download-gallery-content-ctn-text">
        <h1 className="stuff-to-download-gallery-content-text-title">{language?.title}</h1>
      </div>
      <Share 
        urlFaceboock = "https://visitmexico.com/materia-para-descargar/"
        urlPinterest = "https://visitmexico.com/materia-para-descargar/"
        urlTwitter = "https://visitmexico.com/materia-para-descargar/"
        urlWhatsapp = "https://visitmexico.com/materia-para-descargar/"
      />
      <div className="stuff-to-download-gallery-search-ctn">
        
        <div className="stuff-to-download-gallery-search-text">
          <h2 className="stuff-to-download-gallery-search-h2">{language?.subtitle}</h2>
          <p className="stuff-to-download-gallery-search-p">{language?.description}</p>
        </div>
        <div className="stuff-to-download-gallery-search-input">
          <SelectSearch 
            search={true}
            options={options}
            value=""
            name="search"
            placeholder="🔎 Buscar"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="stuff-to-download-gallery-content-ctn-img">
        <LazyLoadComponent>
          {getImages()}
        </LazyLoadComponent>
      </div>
    </section>
  )
};

export default StuffToDownload;
