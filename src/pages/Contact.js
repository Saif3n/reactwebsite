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

  function addUserHandler() {
    var payload = {

      Name: name.current.value,
      Message: message.current.value,
      Email: email.current.value,

    };

    axios
      .post("https://personalbackendreact.azurewebsites.net/Register", payload)
      .then((response) => {

      });
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    
      <div class="contact">
      <h1 class="contactheader">Contact me:</h1>
      <Form NOvALIDATE validate={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="validationCustomUsername">
          <Form.Control required  type="text" placeholder=" Name*" ref={name} />
        </Form.Group>
        <br></br>
        <Form.Group>

          <Form.Control required type="email" placeholder=" Email Address*" ref={email} />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Control placeholder=" Message"  as="textarea" ref={message} />
        </Form.Group>

        <div class="space"></div>

      
      <Button variant="primary" type="submit" onClick={addUserHandler}>
        Submit
      </Button>
      </Form>
      <div class="space"></div>
      <p class="footer">This website was created using a ReactJS frontend, and a C# WebAPI backend (hosted on Microsoft Azure).</p>
      <div class="space"></div>
    </div>

  );

}

export default Contact;