import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  addDoc,
  collection,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../firebase";

const Text = () => {
  const [text, setText] = useState("");

  const [textall, setTextAll] = useState([]);

  const addText = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        text: text,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setText("");
  };

  // const displayData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
  // };

  useEffect(() => {
    const q = query(collection(db, "users"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTextAll(todosArray);
    });
    return () => unsub();
  }, []);

  // useEffect(() => {
  //   displayData();
  // }, []);

  return (
    <div className="text-div" style={{ width: "40%" }}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Add Text</Form.Label>
        <Form.Control
          type="text"
          placeholder="Add text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </Form.Group>

      <Button variant="info" onClick={addText}>
        Add
      </Button>

      <ul className="list-group mt-5 text-info">
        {textall?.map((ele) => (
          <li className="list-group-item" key={ele.id}>
            {ele.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Text;
