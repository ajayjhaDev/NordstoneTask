import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function BasicExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        localStorage.setItem("token", userCredential.user.accessToken);
        console.log(userCredential.user.accessToken);
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("user does not exist");
      });

    setEmail("");
    setPassword("");
  };
  return (
    <div className="form mx-auto mt-5 pb-3">
      <Form onSubmit={signIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link to={"/forgot-password"}>
            <p style={{ color: "#47092b", cursor: "pointer" }} className="mt-4">
              forget password ?
            </p>
          </Link>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Login
        </Button>
      </Form>

      <div className="mt-5">
        <Link to={"/signup"}>
          <p>Don't have account ?</p>
        </Link>
      </div>
    </div>
  );
}

export default BasicExample;
