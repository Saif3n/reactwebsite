
import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { render } from '@testing-library/react';

function Contact() {
  const name = useRef("");
  const message = useRef("");
  const email = useRef("");



  const navigate = useNavigate();

  function addUserHandler() {
    var payload = {

      Name: name.current.value,
      Message: message.current.value,
      Email: email.current.value,

    };

    axios
      .post("https://localhost:7273/Register", payload)
      .then((response) => {
        navigate("/");
      });
  }
  return (
    <div>
      <legend>Contact</legend>
      <form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={name} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" ref={message} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control as="textarea" rows={3} ref={email} />
        </Form.Group>

      </form>
      <Button variant="primary" type="button" onClick={addUserHandler}>
        Submit
      </Button>
    </div>
  );

 }

      export default Contact;