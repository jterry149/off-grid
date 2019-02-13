// Required Dependecies 
import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";

const Jumbotron = () => {
  return (
    <MDBJumbotron fluid className="text-center jumbotron">
      <MDBContainer>
        <h1>TraveLife Road Warriors</h1>
        <p>
          Your home is where the open road leads you.
            <br />
          Discover everything you need to become a TraveLife Road Warrior.
          </p>
      </MDBContainer>
    </MDBJumbotron>
  );
}

// Export the Jumbotron
export default Jumbotron;
