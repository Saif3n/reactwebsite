import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React from 'react';

import projImg1 from "../assets/img/project-img1.webp";
import projImg2 from "../assets/img/project-img2.webp";
import projImg3 from "../assets/img/project-img3.webp";
import projImg4 from "../assets/img/project-img4.webp";
import projImg5 from "../assets/img/project-img5.webp";
import projImg6 from "../assets/img/image.webp";

import colorSharp2 from "../assets/img/color-sharp2.webp";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../styles/projects.css";

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio",
      imgUrl: projImg2,
      languages: "React, C#",
    },
    {
      title: "NZ Company Wait Times",
      description: "Crowd-sourcing wait times of NZ companies via phone calls.",
      imgUrl: projImg1,
     
      languages: "React, C#",

    },
    {
      title: "F1 Sponsor Stock Website",
      description: "Visualise stock prices of F1 sponsors before and after each race.",
      imgUrl: projImg3,
  
      languages: "React, C#, SQL, d3.js",
    },
    {
      title: "Central C# Endpoints/webAPIs",
      description: "A repository containing some of C# endpoints used in my personal projects.",
      imgUrl: projImg4,
      languages: "C#",
    },
    {
      title: "Linux Cybersecurity Tutorial Website",
      description: "(unfinished/in-development)",
      imgUrl: projImg5,
      languages: "React, Linux",
    },
    {
      title:"Blackjack Project - Java",
      description: "A Java app which allows users to play blackjack against bots with pre-determined strategies.",
      imgUrl: projImg6,
      languages:"Java",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility={true} once>
              {({ isVisible }) => (
                <div className="project-wrapper">
                  <h2>Projects</h2>
                  <p><br></br></p>
                  <Row
                    style={{ display: isVisible ? 'flex' : 'none' }}
                    className={`animate__animated ${isVisible ? 'animate__backInLeft' : ''}`}
                  >
                    {projects.map((project, index) => (
                      <Col key={index} sm={6} md={4} className="project-col mb-4 d-flex">
                        <ProjectCard {...project} />
                      </Col>
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
  
}
