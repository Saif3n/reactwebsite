import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React from 'react';

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Personal Portfolio",
      imgUrl: projImg2,
    },
    {
      title: "NZ Company Wait Times",
      description: "A website that allows kiwis to leave reviews about a company's wait time via phone.",
      imgUrl: projImg1,
      link: "https://saif3n.github.io/usertime/",

    },
    {
      title: "F1 Sponsor Stock Website",
      description: "(minimum viable product stage) This website allows you to see a graph of the closing price for each sponsor, and visual cues provide insight as to how much the price increased or decreased after each race.",
      imgUrl: projImg3,
      link: "https://saif3n.github.io/stockapp/",
    },
    {
      title: "Central C# Endpoints/webAPIs",
      description: "A repository containing some of C# endpoints used in my personal projects.",
      imgUrl: projImg4,
      link: "https://github.com/Saif3n/publiccs",
    },
    {
      title: "Linux Cybersecurity Tutorial Website",
      description: "(unfinished/in-development)",
      imgUrl: projImg5,
      link:"https://github.com/Saif3n/overthewire-passwords",
    },
    {
      imgUrl: projImg6,
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
                      <ProjectCard key={index} {...project} />
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
