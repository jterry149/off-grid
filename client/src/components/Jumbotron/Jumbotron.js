// Required Dependecies 
import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import Logo from "./traveLife_logo.png";
import Warrior from "../../images/worrier.png";

const Jumbotron = () => {
  return (
    <MDBJumbotron fluid className="text-center jumbotron">
      <MDBContainer>
        {/* <h1>TraveLife Road Warriors</h1> */}
        <img src={Logo} className="rounded mx-auto d-block" alt="logo" />
        <p>
          Home is where the open road leads you.
            <br />
          Discover everything you need to become a TraveLife Road Warrior.

          </p>
        <p>
          <img src={Warrior} className="rounded mx-auto d-block" alt="warrior" />
        </p>
      </MDBContainer>
    </MDBJumbotron>
  );
}

// Export the Jumbotron
export default Jumbotron;
