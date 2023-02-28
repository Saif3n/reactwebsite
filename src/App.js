import React from 'react';

import './App.css';
import ParticleBackground from './components/particleBackground';
import AllUsers from './pages/AllUsers';
import Contact from './pages/Contact';
import Content from './pages/Content';
import Welcome from './pages/Welcome';

function App() {

  return <div className="App">
    <ParticleBackground/>
    <Welcome/>
    <AllUsers/>
    <Content/>
    <Contact/>

  </div>

}

export default App;
