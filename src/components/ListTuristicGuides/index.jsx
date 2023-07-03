import React, { useState, useEffect, useContext} from 'react';
import { Context } from '../../Context';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import { Link } from 'react-router-dom';
import dataEs from '../../assets/data/turisticsGuides/es/index.json';
import dataEn from '../../assets/data/turisticsGuides/en/index.json';
import dataFr from '../../assets/data/turisticsGuides/fr/index.json';
import dataDe from '../../assets/data/turisticsGuides/de/index.json';
import dataJp from '../../assets/data/turisticsGuides/jp/index.json';
import dataCn from '../../assets/data/turisticsGuides/cn/index.json';
import './style.css';

const ListTuristicGuides = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState();

  // const colors = [
  //   '166, 32, 140, .5',
  //   '229, 38, 25, .5',
  //   '236, 6, 139, .5',
  //   '253, 167, 0, .5',
  //   '136, 194, 67, .5',
  //   '3, 160, 175, .5'
  // ];

  function downloadFile(url) {
    const namePdf = url?.split('/')[1];
    fetch(require(`../../assets/img/turisticGuides/${url}`), { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
      .then(res => res.blob())
      .then(res => {
        const aElement = document.createElement('a');
        aElement.setAttribute('download', namePdf);
        const href = URL.createObjectURL(res);
        aElement.href = href;
        aElement.setAttribute('target', '_blank');
        aElement.click();
        URL.revokeObjectURL(href);
      });
  };

  const openModal = (state) => {
    setDataModal(state);
    setModalOpen(!modalOpen);
  };
  
  const closeModal = (state) => {
    setModalOpen(!modalOpen);
  };

  const ModalGuide = () => (
    <div className="list-turistic-guides-modal-ctn">
      <div className="list-turistic-guides-modal-content-ctn">
        <h2 className="list-turistic-guides-modal-title">{dataModal?.titleTop}</h2>
        <p className="list-turistic-guides-modal-description">{dataModal?.descriptionTop}</p>
        <div className="list-turistic-guides-modal-cards-ctn">
          {dataModal?.actions?.button?.map((btn, index) => (
            <div className="list-turistic-guides-modal-card">
              <LazyLoadImage
                className="list-turistic-guides-modal-img"
                src={require(`../../assets/img/turisticGuides/${dataModal.urlImg}`)}
                alt={dataModal?.titleTop}
              />
              <button 
                className="list-turistic-guides-modal-btn"
                onClick={() => downloadFile(btn.dir)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" className="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                  <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                </svg>
              </button>
              <p className="list-turistic-guides-modal-card-text">{btn?.text}</p>
            </div>
          ))}
        </div>
        <button 
          onClick={closeModal}
          className="btn btn-outline-primary btn-list-turistic-guides-close"
        >
          Cerrar
        </button>
      </div>
    </div>
  );

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : isLanguage === 'FR' ? setLanguage(dataFr)
    : isLanguage === 'DE' ? setLanguage(dataDe)
    : isLanguage === 'JP' ? setLanguage(dataJp)
    : isLanguage === 'CN' ? setLanguage(dataCn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  const listStates = () => (
    language?.states?.map((state, index) => (
      <li className="list-turistic-guides-card-ctn" key={index}>
        <button
          className="list-turistic-guides-open"
          onClick={() => openModal(state)}
        >
          <LazyLoadImage
            className="list-turistic-guides-card-img"
            src={require(`../../assets/img/turisticGuides/${state.urlImg}`)}
            alt={state?.titleTop}
          />
          <h5 className="list-turistic-guides-card-text-title">{state.titleTop}</h5>
        </button>
      </li>
    ))
  );

  return (
    <section className="list-turistic-guides-list-ctn sliceLeft">
      <h1 className="list-turistic-guides-list-title">{language?.titleState}</h1>
      <ul className="list-turistic-guides-list-cards-ctn">
        {listStates()}
      </ul>
      {modalOpen && ModalGuide()}
    </section>
  )
};

export default ListTuristicGuides;
