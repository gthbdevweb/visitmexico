import React, { useState, useEffect, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'
import { Context } from '../../Context';
import Logo from '../../assets/img/logos/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import dataEs from '../../assets/data/menu/es/index.json';
import dataEn from '../../assets/data/menu/en/index.json';
import './style.css';

const Header = () => {
  const { isLanguage, selectedLanguage } = useContext(Context);
  const [language, setLanguage] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth);
  const [isChecked, setIscheked] = useState(false);
  const [changeUrl, setChangeUrl] = useState(false);
  const classNavWraper = isChecked ? "nav-wrapper nav-show" : "nav-wrapper";
  const navigate = useNavigate();
  const [redirectUrl, setredirectUrl] = useState('/');

  const changeChecked = () => {
    setIscheked(!isChecked);
  };

  const changeState = () => {
    if (isMobile < 744) {
      setChangeUrl(!changeUrl);
      document.getElementById('nav-active').checked = false;
    }
  };

  const changeStateHome = () => {
    if (isMobile < 744) {
      setChangeUrl(false);
      document.getElementById('nav-active').checked = false;
    }
  };

  const changeLanguage = (e) => {
    selectedLanguage(e.target.value);
  }; 

  useEffect(() => (
    isLanguage === 'MX' ? setLanguage(dataEs)
    : isLanguage === 'USA' ? setLanguage(dataEn)
    : setLanguage(dataEs)
  ), [isLanguage]);

  useEffect(() => {
    changeUrl && changeChecked();
    changeUrl && setChangeUrl(!changeUrl);
  }, [changeUrl]);

  useEffect(() => {
    const reportWindowSize = () => {
      setIsMobile(window.innerWidth);
    }
    window.onresize = reportWindowSize;
  }, []);

  useEffect(() => {
    navigate(redirectUrl)
  }, [redirectUrl]);

  const options = [
    {name: 'Tren Maya', value: '/trenmaya'},
    {name: 'Destinos', value: '/destinos'},
    {name: 'Eventos Internacionales', value: '/eventos'},
    {name: 'Experiencias', value: '/experiencias'},
    {name: 'Calendario', value: '/calendario'},
    {name: 'Blog', value: '/blog'},
    {name: 'Videos', value: '/videos'},
    {name: 'Guías Turísticas', value: '/guias-turisticas'},
    {name: 'Material para Descargar', value: '/materia-para-descargar'},
    {name: 'Rutas Gastronómicas', value: '/rutas-gastronomicas'},
    {name: 'Sol y Playa', value: '/sol-y-playa'},
    {name: 'Bodas', value: '/romance'},
  ];

  const menuOptions = () => (
    language?.menu?.map((item, index) => (
      <li key={index}>
        <Link 
          key={index}
          to={item.dir}
          onClick={changeState}
        >
          {item.name}
        </Link>
      </li>
    ))
  );

  const handleSearch = (data) => {
    setredirectUrl(data);
  };

  return (
    <>
      <header className="header-ctn">
        
        <Link
          to='/' 
          className="header-a" 
          onClick={changeStateHome}
        >
          <LazyLoadImage src={Logo} alt="visitmexico-logo" className="header-logo" />
        </Link>
      </header>
      <div className="header-searcher searcher-desktop">
        <SelectSearch 
          search={true}
          options={options}
          value=""
          name="search"
          placeholder="🔎 Buscar"
          onChange={handleSearch}
        />
      </div>
      <div className="header-back"></div>
      <label className='header-select' htmlFor="selectLanguage">
        <select name="selectedCountry" className="header-select-input" onChange={(e) => changeLanguage(e)} id="selectLanguage">
          <option value="MX">🇲🇽ES</option>
          <option value="USA">🇺🇸EN</option>
          <option value="FR">🇫🇷FR</option>
          <option value="DE">🇩🇪DE</option>
          <option value="PT">🇵🇹PT</option>
          {/*<option value="IT">🇮🇹IT</option>*/}
          <option value="JP">🇯🇵JP</option>
          <option value="CN">🇨🇳CN</option>
        </select>
      </label>
      <nav className="nav-ctn" id="nav-ctn">
        <input type="checkbox" id="nav-active" onChange={changeChecked}/>
        <label htmlFor="nav-active" className="nav-menu-btn"><span></span></label>
      </nav>
      <div className={classNavWraper}  id="nav-wrapper">
        <ul className="nav-menu-options">
          {menuOptions()}
          <li key="8">
            <Link 
              to="guias-turisticas"
              onClick={changeState}
            >
              Guías Turísticas
            </Link>
          </li>
          <li key="9">
            <Link 
              to="materia-para-descargar"
              onClick={changeState}
            >
              Material para Descargar
            </Link>
          </li>
        </ul>
        <div className="navbar-menu-video">
          <iframe loading='lazy' width="100%" height="100%" src={`https://www.youtube.com/embed/A5G3t-2FEys?rel=0&mute=1&autoplay=${isChecked ? 1 : 0}`} title="Conoce las Ciudades Mexicanas Patrimonio Mundial. Visit México." frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </>
  )
};

export default Header;

