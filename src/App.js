
import { Fragment, useState} from 'react';
import './App.css';
import ParticleBackground from './components/particleBackground';
import AllUsers from './pages/AllUsers';

import axios from 'axios';

function App() {
  const[firstName, setFirstName] = useState("");
  const[comment, setComment] = useState("");

  const handleSubmit=(e)=>{
    const data={
      UserName : firstName,
      UserComment : comment,
      Type: "Add"
    }
    axios
    .post('#{url}/api/Register')

  }

  return <div className="App">
    
    <ParticleBackground />
    <div class="container">
      <h1>Hey, my name is Nicholas Wu.</h1>
      <h1>I'm an aspiring Software Developer at the University of Auckland.</h1>
    </div>

    <div class="technical">
      <h1>About me</h1>
      <p id="text">Originally a Computer Systems Engineering student, I was exposed to equal parts software and hardware. I immediately realised my love for software development when I was exposed to my
        first Object Oriented Programming course - SOFTENG281.
        <div class="space"></div>
        From then on, I knew the direction I wanted my career
        to go, and the steps that could help me achieve it.
        <div class="space"></div>
        I'm now a penultimate Computer Science student passionate about backend languages/frameworks.

      </p>

      <div class="break"></div>
      
      <AllUsers></AllUsers>

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
      <p id="text">Currently learning:</p>
      <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" class="firstimg"></img>
      <img src="https://img.shields.io/badge/react-19B165?style=for-the-badge&logo=react&logoColor=%2361DAFB"></img>


      <div class="break"></div>

    <Fragment>
      <input type="text" value={firstName} placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)}/>
      <div class="spaceskill"></div>
      <input type="text" value={comment} placeholder="Enter Comment" onChange={(e) => setComment(e.target.value)}/>
      <div class="spaceskill"></div>
      <button onClick ={(e)=> handleSubmit(e)}>Submit</button>
      <div class="spaceskill"></div>
    </Fragment>
    </div>
    <div class="break"></div>



  </div>
}

export default App;
