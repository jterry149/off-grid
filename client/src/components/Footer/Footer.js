// Required Dependencies
import React from "react";
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
  );
}

export default Footer;

