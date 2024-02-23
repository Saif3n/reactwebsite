import { Col } from "react-bootstrap";
import React, { useState } from 'react';

export const ProjectCard = ({ title, description, imgUrl, link, languages }) => {


  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx" onClick={() => {
          if (link) {
            window.open(link, '_blank');
          }
        }}>
          <h4>{title}</h4>
          <span>{description}</span>
          <h6>{languages}</h6>
        </div>
      </div>
    </Col>
  )
}
