import React, { Component } from 'react';
import { Fragment, useState} from 'react';
import './App.css';
import ParticleBackground from './components/particleBackground';
import AllUsers from './pages/AllUsers';
import Contact from './pages/Contact';

function App() {
  
  return <div className="App">
    
    <ParticleBackground />
    <AllUsers></AllUsers>

    <div class="technical">
      <h1>About me</h1>
      <p class="text">I'm a penultimate Computer Science student passionate about full-stack languages and frameworks. I'm actively implementing these technologies into my own personal projects which I enjoy showing to friends and family.
        <div class="space"></div>
        In my free time I love playing badminton, walking my border collie, and exploring nifty cafes around Auckland.
        <div class="space"></div>


      </p>

      <div class="break"></div>
      
      <h1>Technical Skills</h1>
      <p class="text">Languages/Frameworks I'm comfortable coding in:</p>
      <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" class = "firstimg"></img>
      <img src="https://img.shields.io/badge/.net-512DB4?style=for-the-badge&logo=.net&logoColor=white"></img>
      <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"></img>
      <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></img>
      <img src="https://img.shields.io/badge/css-%23E34F26.svg?style=for-the-badge&logo=css3&logoColor=white"></img>

      <div class="spaceskill"></div>
      <p class="text">Languages/Frameworks I have prior experience in:</p>
      <img src="https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" class="firstimg"></img>
      <img src="https://img.shields.io/badge/c (Hardware)-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white"></img>
      <img src="https://img.shields.io/badge/MATLAB-99230f?style=for-the-badge&logoColor=white"></img>
      
      <div class="spaceskill"></div>
      <p class="text">Currently learning/using:</p>
      <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" class="firstimg"></img>
      <img src="https://img.shields.io/badge/react-19B165?style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>

    
    </div>

   <br></br>
    <div class="bottom"><Contact></Contact></div>


  </div>
  
}

export default App;
