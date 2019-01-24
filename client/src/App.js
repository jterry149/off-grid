import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Carousel from './components/Carousel';
import Card from "./components/Card";

import './styles.css'

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Card />
      <Carousel />
    </div>
  );
}

export default App;
