// src/App.js
import React from 'react';
import Header from './components/Header';
import MainImage from './components/MainImage';
import AboutSection from './components/AboutSection';
import MissionVision from './components/MissionVision';
import CounterSection from './components/CounterSection';
import Testimonials from './components/Testimonials';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainImage />
      <AboutSection />
      <MissionVision />
      <CounterSection />
      <Testimonials />
    </div>
  );
}

export default App;
