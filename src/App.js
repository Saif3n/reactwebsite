
import './App.css';
import ParticleBackground from './components/p\articleBackground';

function App() {
  return <div className="App">
    <ParticleBackground/>
    <div class="container">
            <h1>Hey, my name is Nicholas Wu.</h1>
            <h1>I'm an aspiring Software Developer at the University of Auckland.</h1>
        </div>

        <div class="technical">
            <h1>About me</h1>
            <p id="text">Originally a Computer Systems Engineering student, I was exposed to equal parts hardware and
                equal parts software. I immediately realised my love for software development when I was exposed to my
                first Object Oriented Programming course. 
                <div class = "space"></div>
                From then on, I knew the direction I wanted my career
                to go, and the steps I had to take to get to it.
                <div class = "space"></div>
                I'm now a penultimate Computer Science student passionate about learning all things full-stack!
        
            </p>
        </div>

  </div>
}

export default App;
