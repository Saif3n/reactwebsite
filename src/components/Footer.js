import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import { useRef, useState, useEffect } from "react";
import DOMPurify from 'dompurify';
import axios from "axios";

export const Footer = () => {
  const [value, setValue] = useState('');
  useEffect(() => {
    axios.get("https://localhost:7024/GetLastUser").then((response) => {
      setValue(DOMPurify.sanitize(response.data.name) + " was the last user to leave a message.");
    });
  }, []);

  return (
    <>
    <p className="lastUser">{value}</p>
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon-footer">
              <a href="https://www.linkedin.com/in/nicholas-wu-lnkdin/"  target="_blank"><img src={navIcon1} alt="Icon" /></a>

            </div>
            <p>Nicholas Wu - 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}
