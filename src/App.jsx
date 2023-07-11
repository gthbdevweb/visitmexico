import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Layout from './components/Layout';
import Home from './views/Home';
import States from './views/States';
import State from './views/State';
import Blog from './views/Blog';
import Videos from './views/Videos';
import Tendencies from './views/Tendencies';
import Calendar from './views/Calendar';
import Events from './views/Events';
import Towns from './views/Towns';
import TrenMaya from './views/TrenMaya';
import Experiences from './views/Experiences';
import GastronomicRoutesContent from './views/GastronomicRoutesContent';
import RomanceContent from './views/RomanceContent';
import SolYPlayaContent from './views/SolYPlayaContent';
import AvisoDePrivacidad from './views/AvisoDePrivacidad';
import TuristicsGuides from './views/TuristicsGuides';
import StuffToDownloadContent from './views/StuffToDownload';
//Delete next
import './App.css';

function App() {
  const TRACKING_ID = "UA-273648726-1";
  ReactGA.initialize(TRACKING_ID);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destinos' element={<States />} />
          <Route path='/destino/:id' element={<State />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/materiales' element={<Tendencies />} />
          <Route path='/calendario' element={<Calendar />} />
          <Route path='/eventos' element={<Events />} />
          <Route path='/pueblos' element={<Towns />} />
          <Route path='/trenmaya' element={<TrenMaya />} />
          <Route path='/experiencias' element={<Experiences />} />
          <Route path='/rutas-gastronomicas' element={<GastronomicRoutesContent />} />
          <Route path='/romance' element={<RomanceContent />} />
          <Route path='/sol-y-playa' element={<SolYPlayaContent />} />
          <Route path='/aviso-de-privacidad' element={<AvisoDePrivacidad />} />
          <Route path='/guias-turisticas' element={<TuristicsGuides />} />
          <Route path='/materia-para-descargar' element={<StuffToDownloadContent />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
