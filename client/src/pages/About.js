// Required Dependecies 
import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import Logo from "../images/traveLife_logo.png";
import Logo_small from "../images/Logo_small.png";
import Worrier from "../images/worrier.png";

const Jumbotron = () => {
    return (
        <MDBJumbotron fluid className="text-center jumbotron">
            <img src={Logo} alt="logo" />
            <MDBContainer className="aboutus">
                <h1>About Us</h1>
                <p>We are the WARRIORS of traveling and living on the road!<br></br>
                    The TraveLife Road Warriors help those going on short road trips all the way to those who have chosen to pack it up and live their lives on the road. We are a team made up of RV, TinyHome, Camper, Van, SUV, Sedan, (and even Horse) OWNERS and USERS. In addition to our expertise, we help people utilize the millions of other road travel resources available.<br></br>

                    Whatever path you choose, we can help you (brave) or (pave?) it!
                <br />

                </p>
                <p><img src={Logo_small} style={{ width: 200 }} alt="logosmall" />
                </p>
            </MDBContainer>
        </MDBJumbotron>
    );
}

// Export the Jumbotron
export default Jumbotron;
