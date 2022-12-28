import React from 'react';

import './App.css';
import ParticleBackground from './components/particleBackground';
import AllUsers from './pages/AllUsers';
import Contact from './pages/Contact';
import Content from './pages/Content';

function App() {

  return <div className="App">

    <ParticleBackground/>
    <AllUsers/>
    <Content/>
    <Contact/>

  </div>

}

export default App;
