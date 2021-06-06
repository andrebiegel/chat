import React, { useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Login({ onIdSubmit }) {
  const nameRef = useRef();
  const mailRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onIdSubmit({ name: nameRef.current.value, id: mailRef.current.value });
  }
  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type="text" ref={nameRef} required />
          <Form.Label>Enter Your Email</Form.Label>
          <Form.Control type="text" ref={mailRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
      </Form>
    </Container>
  );
}
