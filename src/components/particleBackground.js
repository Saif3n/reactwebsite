import React from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
 
function App() {
  const particlesInit = async (main) => {

 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {

  };
  return (
    <div className="App">
   
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
            background: {
              color: '#162747',
            },
            fpsLimit: 40,
            
            particles: {
              color: {
                value: "#8f8360"
              },
              number: {
    
                density: {
                  enable: true,
                  area: 2000
                },
                limit: 0,
                value: 500,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 3,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              shape: {
                type: 'circle',
                stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
       
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5
                },
                value: 2
              }
            }
          }}
      />  
  </div>
  );
}
 
export default App;