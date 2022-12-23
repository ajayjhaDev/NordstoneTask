import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Cal = () => {
  const [data, setData] = useState({
    a: "",
    b: "",
    op: "",
  });

  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleCal = () => {
    axios
      .post("https://cyan-kind-jellyfish.cyclic.app/cal", data)
      .then((response) => {
        setVal(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });

    setData({
      a: "",
      b: "",
      op: "",
    });
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: "50%" }}
    >
      <input
        type={"number"}
        placeholder={"First Number"}
        onChange={handleChange}
        value={data.a}
        name="a"
        className="mt-3"
      />
      <input
        type={"number"}
        placeholder={"Second Number"}
        onChange={handleChange}
        value={data.b}
        name="b"
        className="mt-3"
      />
      <select onChange={handleChange} name="op" className="mt-3">
        <option value={""}>choose operator</option>
        <option value={"+"}>add(+)</option>
        <option value={"-"}> Sub(-)</option>
        <option value={"*"}>Multiply(*)</option>
      </select>

      <Button variant="secondary" className="mt-5" onClick={handleCal}>
        Calculate
      </Button>

      <h1 className="mt-5">{val}</h1>
    </div>
  );
};

export default Cal;
