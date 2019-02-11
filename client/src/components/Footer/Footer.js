// Required Dependencies
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Logo_small } from "../../images/Logo_small.png";
import { Worrier } from "../../images/worrier.png";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="text-center">
          {/* <img src={Logo_small} style={{ width: 200 }} alt="logosmall" />
          <img src={Worrier} style={{ width: 200, height: 100 }} alt="warrior" /> */}
          <MDBCol md="12">
            <ul className="social text-center">
              <h5 className="title">Follow</h5>
              <a href="#!"><li className="list fab fa-twitter fa-lg">
              </li></a>
              <a href="#!"><li className="list fab fa-facebook-square fa-lg"></li></a>
              <a href="#!"><li className="list fab fa-instagram fa-lg">
              </li></a>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/home"> TraveLife Road Warriors</a>
        </MDBContainer>
      </div>
    </ MDBFooter>
  );
};

export default Footer;

