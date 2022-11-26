import React, { Component } from 'react';
import { Form, Button, Feedback } from "react-bootstrap";
import { useRef, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

function Contact() {
  const [validated, setValidated] = useState(false);

  const name = useRef("");
  const message = useRef("");
  const email = useRef("");

  const addUserHandler = (event) => {
    event.preventDefault();
    var payload = {

      Name: name.current.value,
      Message: message.current.value,
      Email: email.current.value,

    };

    if (name.current.value.length > 0 && email.current.value.length > 0 && email.current.value.includes('@')){

      axios
      .post("https://personalbackendreact.azurewebsites.net/Register", payload)
      .then((response) => {
        
      });
      alert("Thanks for leaving a message "+name.current.value+", I'll aim to get back to you as soon as possible!")
    }
  };

  return (
    
      <div className="contact">
      <h1 className="contactheader">Contact me:</h1>
      <Form onSubmit={addUserHandler}>
        <Form.Group>
          <Form.Control required type="text" placeholder=" Name*" ref={name} />
        </Form.Group>
        <br></br>
        <Form.Group>

          <Form.Control required type="email" placeholder=" Email Address*" ref={email} />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Control placeholder=" Message"  as="textarea" ref={message} />
        </Form.Group>

        <div className="space"></div>

      
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      <div className="space"></div>
      <p className="footer">This website was created using a ReactJS frontend, and a C# WebAPI backend (hosted on Microsoft Azure).</p>
      <div className="space"></div>
    </div>

  );

}

export default Contact;
