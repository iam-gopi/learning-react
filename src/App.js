import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReadInput from "./components/ReadInput";

const App = () => {
  return (
    <Container>
      <h2 className="my-4">Todo</h2>
      <ReadInput />
    </Container>
  );
};

export default App;
