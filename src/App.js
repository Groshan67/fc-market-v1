import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <h2>FC Market</h2>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
