import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.webp"
import React from 'react';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p></p>
              <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2500} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <i className="devicon-typescript-plain"></i>
                  <h5>Typescript</h5>
                </div>

                <div className="item">
                  <i className="devicon-csharp-line"></i>
                  <h5>C#</h5>
                </div>

                <div className="item">
                  <i className="devicon-dotnetcore-plain"></i>
                  <h5>.NET</h5>
                </div>

                <div className="item">
                  <i class="devicon-amazonwebservices-plain-wordmark"></i>
                  <h5>AWS</h5>
                </div>


                <div className="item">
                  <i className="devicon-react-original"></i>
                  <h5>React</h5>
                </div>

                <div className="item">
                  <i className="devicon-javascript-plain"></i>
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <i className="devicon-java-plain"></i>
                  <h5>Java</h5>
                </div>

                <div className="item">
                  <i class="devicon-python-plain"></i>
                  <h5>Python</h5>
                </div>

                <div className="item">
                  <i className="devicon-html5-plain"></i>
                  <h5>HTML</h5>
                </div>

                <div className="item">
                  <i className="devicon-css3-plain"></i>
                  <h5>CSS</h5>
                </div>

                <div className="item">
                  <i className="devicon-mysql-plain"></i>
                  <h5>MySQL</h5>
                </div>


              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
