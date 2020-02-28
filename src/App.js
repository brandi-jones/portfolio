import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {data} from './data';

//components
import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

function App() {
  
  return (
    <div className="AppContainer">
      <Nav/>
      <AboutMe data={data}/>
      <Skills data={data}/>
      <Portfolio data={data}/>
    </div>
  );
}

export default App;
