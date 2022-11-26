import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import {send} from 'emailjs-com';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

function Contact() {

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
      
      send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        payload,
        process.env.REACT_APP_PUBLIC_KEY
        
      ).then((response) => {
        console.log('Successfully sent!', response.status, response.text);
      }).catch((error) => {
        console.log('Email service failed...', error);
      });

      axios
      .post("https://personalbackendreact.azurewebsites.net/Register", payload)
      .then((response) => {
        console.log('Azure post successful.', response.status, response.text);
      }).catch((error) =>{
        console.log('Azure post unsuccessful.', error.status, error.text);
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
