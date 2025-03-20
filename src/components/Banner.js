import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [type, setType] = useState(null);


  return (
    <section className="banner" id="home" style={{ transition: "height 0.3s ease" }}>
      <Container>
        <Row className="aligh-items-center">
          <h1 style={{ transition: "height 0.3s ease" }}>{`Hi! I'm Nicholas Wu.`}
          

            <TrackVisibility>

              {({ isVisible }) => {

                if (!isVisible && type){
                  type.stop();
                }else if (type){
                  type.start();
                }
                return (
                  <Typewriter style={{ transition: "height 0.3s ease" }}
                    className="secondtype"
                    onInit={(typewriter) => {
                      setType(typewriter)
                      typewriter
                        .changeDelay(60)
                        .typeString("I'm a software developer.")
                        .pauseFor(1600)
                        .deleteChars(20)
                        .typeString("n avid F1 fan.")
                        .pauseFor(1600)
                        .deleteChars(25)
                        .typeString("An analyst at Deloitte.")
                        .pauseFor(1600)
                        .deleteAll(60)
                        .typeString("Welcome to my website!")
                        .start();
                    }}
                  />
                );
              }}
            </TrackVisibility>

          </h1>
          <Col xs={12} md={6} xl={7}>


            <div>

              <p>I'm an Analyst at Deloitte, within the Software Engineering team; passionate about full-stack development, building projects using cloud services, and experimenting with new frameworks. <br></br><br></br>In my free time I love playing badminton, walking my border collie, and going for a walk around beautiful areas of Sydney.</p>
              <button onClick={() => {
                console.log('connect');
                window.location.hash = '#connect';
              }}>Let’s Connect <ArrowRightCircle size={25} /></button>
            </div>

          </Col>
          <Col xs={12} md={6} xl={5}>


            <div className="animate__animated animate__zoomIn">

            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}
