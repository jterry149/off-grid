import React from "react";

import LoginTest from "./components/Login/LoginTest";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Carousel from "./components/Carousel";
import Card from "./components/Card";

import "./styles.css";

function App() {
  return (
    <div>
      <LoginTest />
      <Navbar />
      <Jumbotron />
      <Card />
      <Carousel />
    </div>
  );
}

export default App;
