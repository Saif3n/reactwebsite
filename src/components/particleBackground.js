import React, { useState, useEffect } from "react"
import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";

function App() {
  const [mode, setMode] = useState("dark"); // add mode state variable and set it to "light" by default
  const [colour, setColour] = useState("#162747"); // set initial colour state variable
  const [particles, setParticles] = useState("#8f8360"); // set initial particles state variable
  
  
  const particlesInit = async (main) => {


    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {

  };

  function triggerLightMode() {
    setMode(mode === "light" ? "dark" : "light"); // toggle the mode between "light" and "dark"

    console.log(mode)
    if (mode === "light") {
      setColour("#162747");
      setParticles("#8f8360");

      const element = document.querySelector(".bottom-toggle");
      const element2 = document.querySelector(".contactheader-toggle");
      const element3 = document.querySelector(".create-toggle");
      const content = document.querySelector(".technical-toggle");
      const type1 = document.querySelector(".type-toggle")
      const type2 = document.querySelector(".type2-toggle")

      element.classList.replace("bottom-toggle", "bottom");
      element2.classList.replace("contactheader-toggle", "contactheader");
      element3.classList.replace("create-toggle", "create");
      content.classList.replace("technical-toggle", "technical")
      type1.classList.replace("type-toggle", "type");
      type2.classList.replace("type2-toggle", "type2");

    } else {
      setColour("#DEE4F7");
      setParticles("#56960D");

      const element = document.querySelector(".bottom");
      const element2 = document.querySelector(".contactheader");
      const element3 = document.querySelector(".create");
      const content = document.querySelector(".technical");
      const type1 = document.querySelector(".type")
      const type2 = document.querySelector(".type2")


      element.classList.replace("bottom", "bottom-toggle");
      element2.classList.replace("contactheader", "contactheader-toggle");
      element3.classList.replace("create", "create-toggle");
      content.classList.replace("technical", "technical-toggle");
      type1.classList.replace("type", "type-toggle");
      type2.classList.replace("type2", "type2-toggle");

    }

  }

  // use the mode state variable to set the colour and particles variables
  useEffect(() => {
    
  }, [mode]);

  return (
    <div className="particles">
      <div className="button" onClick={triggerLightMode}>
        <p>hi</p>
      </div>
      <Particles
        style={{ zIndex: -1 }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: `${colour}`,
          },
          fpsLimit: 40,

          particles: {
            color: {
              value: `${particles}`,
            },
            number: {
              density: {
                enable: true,
                area: 2000,
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
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
            },
            size: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: 2,
            },
          },
        }}
      />
    </div>
  );
}

export default App;