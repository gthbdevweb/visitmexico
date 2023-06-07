import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import SolYPlaya from './views/SolYPlaya';
import RutasGastronomicas from './views/RutasGastronomicas';
import TurismoSostenible from './views/TurismoSostenible';
import Bienestar from './views/Bienestar';
import TurismoDeAventura from './views/TurismoDeAventura';
//Delete next
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/estados' element={<States />} />
          <Route path='/estado/:id' element={<State />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/videos' element={<Videos />} />
          <Route path='/materiales' element={<Tendencies />} />
          <Route path='/calendario' element={<Calendar />} />
          <Route path='/eventos' element={<Events />} />
          <Route path='/pueblos' element={<Towns />} />
          <Route path='/trenmaya' element={<TrenMaya />} />
          <Route path='/solyplaya' element={<SolYPlaya />} />
          <Route path='/rutasgastronomicas' element={<RutasGastronomicas />} />
          <Route path='/turismosostenible' element={<TurismoSostenible />} />
          <Route path='/bienestar' element={<Bienestar />} />
          <Route path='/turismodeaventura' element={<TurismoDeAventura />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
