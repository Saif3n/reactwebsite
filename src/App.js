import React, { Component } from 'react';
import { Fragment, useState} from 'react';
import './App.css';
import ParticleBackground from './components/particleBackground';
import AllUsers from './pages/AllUsers';
import Contact from './pages/Contact';

import axios from 'axios';

function App() {
  
  return <div className="App">
    
    <ParticleBackground />
    <AllUsers></AllUsers>

    <div class="technical">
      <h1>About me</h1>
      <p id="text">Originally a Computer Systems Engineering student starting in 2021, I was exposed to equal parts software and hardware. I immediately realised my love for software development when I was exposed to my
        first Object Oriented Programming course - SOFTENG281.
        <div class="space"></div>
        From then on, I knew the direction I wanted my career
        to go, and the steps that could help me achieve it.
        <div class="space"></div>
        I'm now a penultimate Computer Science student passionate about backend languages/frameworks.

      </p>

      <div class="space"></div>

      <h1>Technical Skills</h1>
      <p id="text">Languages/Frameworks I'm comfortable coding in:</p>
      <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" class = "firstimg"></img>
      <img src="https://img.shields.io/badge/.net-512DB4?style=for-the-badge&logo=.net&logoColor=white"></img>
      <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"></img>
      <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></img>
      <img src="https://img.shields.io/badge/css-%23E34F26.svg?style=for-the-badge&logo=css3&logoColor=white"></img>

      <div class="spaceskill"></div>
      <p id="text">Languages/Frameworks I have prior experience in:</p>
      <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" class="firstimg"></img>
      <img src="https://img.shields.io/badge/c (Hardware)-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"></img>
      <img src="https://img.shields.io/badge/MATLAB-99230f?style=for-the-badge&logoColor=white"></img>
      
      <div class="spaceskill"></div>
      <p id="text">Currently learning/using:</p>
      <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" class="firstimg"></img>
      <img src="https://img.shields.io/badge/react-19B165?style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>

      <div class="space"></div>
      <strong>This website was created using a ReactJS frontend, and a C# WebAPI backend.</strong>
      <div class="space"></div>
    

    
    <Contact></Contact>
    </div>
    
    <div class="break"></div>



  </div>
  
}

export default App;
