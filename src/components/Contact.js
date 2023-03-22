import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import React from 'react';

import contactImage from "../assets/img/coder.png";
import 'animate.css';
import axios from "axios";
import { send } from 'emailjs-com';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});


  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let payload = {

      Name: formDetails.firstName,
      Message: formDetails.message,
      Email: formDetails.email,

    };

    axios
        .post("https://personalbackendreact.azurewebsites.net/Register", payload)
        .then((response) => {
          console.log('Azure post successful.', response.status, response.text);
        }).catch((error) => {
          console.log('Azure post unsuccessful.', error.status, error.text);
        });

    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formDetails,
      process.env.REACT_APP_PUBLIC_KEY
    ).then((response) => {
      console.log('Successfully sent!', response.status, response.text);
      setStatus({success: true, message: "Message sent successfully."})
      setButtonText("Sent!")
    }).catch((error) => {
      console.log('Email service failed...', error);
      setStatus({success:false, message: "Sorry, that didn't work. Why not try reaching out on LinkedIn?" })
      setButtonText("Oops!")

    });
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
        <Col size={12} md={6} className="d-flex justify-content-center align-items-center text-center phone-center">
  <img className="animate__animated" src={contactImage} alt="Contact Us"/>
</Col>
          <Col size={12} md={6}>
       

                <div>
                <h2>Get In Touch!</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} required placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1">
                      <input type="email" value={formDetails.email} required placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>

                    <Col size={12} sm={12}className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>
   
          </Col>
        </Row>
      </Container>
    </section>
  )
}
