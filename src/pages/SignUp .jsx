import React from "react";
import FormSignUp from "../components/FormSignUp";

const Splash = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#5c1b50",
        color: "white",
        height: "100vh",
      }}
    >
      <h1>Nordstone</h1>
      <hr />
      <p>Software Development</p>

      <FormSignUp />
    </div>
  );
};

export default Splash;
