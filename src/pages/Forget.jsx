import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const Forget = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setShow(true);
        setEmail("");
      })
      .catch((error) => {
        alert("Your Email is Wrong !");
      });
  };

  return (
    <div
      className="text-center reset mx-auto"
      style={{ width: "40%", alignItems: "center" }}
    >
      <h1 className="mb-5">Reset Password</h1>

      {show && (
        <Alert variant={"primary"}>
          Check your inbox for further instructions and Make Sure check your
          Span as Well
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>

      <div className="mt-4">
        <Link to={"/login"}>
          <p>Want to Login ?</p>
        </Link>
      </div>
    </div>
  );
};

export default Forget;
