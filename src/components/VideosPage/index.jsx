import React, { useState, useEffect, useContext} from 'react';  
import { Context } from '../../Context';
import dataEs from '../../assets/data/videos/es/index.json';
import dataEn from '../../assets/data/videos/en/index.json';
import './style.css';

const VideosPage = () => {
  const { isLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const [valueSelected, setValueSelected] = useState();
  const [getVideoData, setVideoData] = useState();  

  useEffect(() => {
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs);
  }, [isLanguage]);

  // const languageSort = language?.videos?.sort(function(a, b){return b.id - a.id});
  // const getVideoTop = languageSort?.map((video, index) => index === 0 && video);
 
  const getVideoListSelect = () => (
    language?.videos?.map((video, index) => (
      <option value={video.name} key={index}>{video.name}</option>
    ))
  );

  const handleChange = (e) => {
    setValueSelected(e.target.value);
  };

  useEffect(() => {
    setVideoData(language?.videos?.find(el => el.name === valueSelected))
  }, [valueSelected]);

  useEffect(() => {
    setVideoData(language?.videos?.[0])
  }, [language]);

  return (
    <section className="videos-ctn sliceLeft">
      <iframe
        width="100%"
        height="100%"
        src={language?.urlVideoHeader}
        title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
        frameBorder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="videos-content-ctn-text">
        <h1 className="videos-content-text-title">{getVideoData?.name || 'Selecciona categoria'}</h1>
        <div>
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            onChange={(e) => handleChange(e)}
          >
            {getVideoListSelect()}
          </select>
        </div>
      </div>
      {getVideoData?.decription && <div className="videos-content-description-ctn">
        <h2 className="videos-content-description">{getVideoData?.decription || ''}</h2>
      </div>}
      <div className="videos-multiple-ctn">
        {getVideoData?.content?.map((video, index) => (
          <div className="video-individual-ctn" key={index}>
            <iframe
              width="100%"
              height="100%"
              src={video?.urlVideo}
              title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México."
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </section>
  )
};

export default VideosPage;
