import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function BasicExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        Navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert("Password should be at least 6");
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="form mx-auto mt-5 pb-3">
      <Form onSubmit={signUp}>
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
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          SignUp
        </Button>
      </Form>

      <div className="mt-5">
        <Link to={"/login"}>
          <p>Already have account ?</p>
        </Link>
      </div>
    </div>
  );
}

export default BasicExample;
