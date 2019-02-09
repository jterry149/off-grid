// Required Dependencies
import React from "react";
<<<<<<< HEAD
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="./components/YouTube/YouTube">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="/youtube">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
=======
import { MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";


const Footer = () => {
  return (
    <MDBFooter color="indigo darken-4" className="font-small pt-4 mt-4"> 
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="text-center">
          <MDBCol md="12">
            <ul className="social text-center">
              <h5 className="title">Follow Us</h5>
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
>>>>>>> off-grid-jessica
  );
};

export default Footer;

