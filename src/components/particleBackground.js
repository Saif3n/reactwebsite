import React, { useState, useEffect } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";

function App() {
  const [mode, setMode] = useState("dark"); 
  const [colour, setColour] = useState("#162747");
  const [particles, setParticles] = useState("#8f8360"); 
  const [symbol, setSymbol] = useState("#FFED00")

  const particlesInit = async (main) => {


    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it"s the easiest method for getting everything ready
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
      setSymbol("#FFED00");

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
      setParticles("#76CE12");
      setSymbol("#000000");

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
        <div className="sun">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <circle cx="12" cy="12" r="5" fill={symbol} />

            <path d="M 12 2 L 12 6" stroke={symbol} stroke-width="1.5" stroke-linecap="round" />
            <path d="M 12 18 L 12 22" stroke={symbol} stroke-width="1.5" stroke-linecap="round" />
            <path d="M 4.93 4.93 L 7.07 7.07" stroke={symbol} stroke-width="1.5" stroke-linecap="round" />
            <path d="M 16.93 16.93 L 19.07 19.07" stroke={symbol} stroke-width="1.5" stroke-linecap="round" />
            <path d="M 4.93 19.07 L 7.07 16.93" stroke={symbol} stroke-width="1.5" stroke-linecap="round" />
            <path d="M 16.93 7.07 L 19.07 4.93" stroke={symbol} stroke-width="1.5" stroke-linecap="round" />
            <path d="M 2 12 L 6 12" stroke={symbol} stroke-width="1.5" stroke-linecap="round" />
            <path d="M 18 12 L 22 12" stroke={symbol} stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>

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