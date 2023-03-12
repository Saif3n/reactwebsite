import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Typewriter from 'typewriter-effect';
import 'animate.css';


export const Banner = () => {





  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <h1>{`Hi! I'm Nicholas Wu.`} <Typewriter
            className="secondtype" onInit={(typewriter) => {
              typewriter.changeDelay(60)
                .typeString("I'm an avid F1 fan.")
                .pauseFor(1600)
                .deleteChars(14)
                .typeString(" software developer.")
                .pauseFor(1600)
                .deleteChars(25)
                .typeString("A student at the University of Auckland.")
                .pauseFor(1600)
                .deleteAll(60)
                .typeString("Welcome to my website!")
                .start();
            }} /></h1>
          <Col xs={12} md={6} xl={7}>

   
              <div>

                <p>I'm a final year Computer Science student passionate about full-stack languages and frameworks. <br></br><br></br>In my free time I love playing badminton, walking my border collie, and exploring nifty cafes around Auckland.</p>
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
