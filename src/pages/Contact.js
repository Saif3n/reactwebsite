import React from 'react';
import { Form, Button } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { send } from 'emailjs-com';
import DOMPurify from 'dompurify';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

function Contact() {

  const name = useRef("");
  const message = useRef("");
  const email = useRef("");

  const [value, setValue] = useState('');

  // if user tries xss, forces user back to previous page in their history



  useEffect(() => {
    axios.get("https://personalbackendreact.azurewebsites.net/GetLastUser").then((response) => {
      setValue(response.data.name + " was the last user to leave a message.");
    });
  }, []);
  

  const addUserHandler = (event) => {
    event.preventDefault();

    let payload = {

      Name: name.current.value,
      Message: message.current.value,
      Email: email.current.value,

    };

    for (let element in payload){

      if (payload[element] !== DOMPurify.sanitize(payload[element])){
        alert("Please leave, this site is not welcome to XSSers.")
        window.location.href = 'https://google.com';
        return;
      }
      payload[element] = DOMPurify.sanitize(payload[element]);
    }

    if (name.current.value.length > 0 && email.current.value.length > 0 && email.current.value.includes('@')) {
      
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
        }).catch((error) => {
          console.log('Azure post unsuccessful.', error.status, error.text);
        });

      alert("Thanks for leaving a message " + DOMPurify.sanitize(name.current.value) + ", I'll aim to get back to you as soon as possible!")
    }
  };

  return (
    <div className="bottom">
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
            <Form.Control placeholder=" Message" as="textarea" ref={message} />
          </Form.Group>

          <div className="space"></div>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="space"></div>
        <p className="footer">This website was created using a ReactJS frontend, and a C# WebAPI backend (hosted on Microsoft Azure).</p>

      </div>
      <div className="footerTest">
        <p>{value}</p>
      </div>
    </div>

  );

}

export default Contact;
