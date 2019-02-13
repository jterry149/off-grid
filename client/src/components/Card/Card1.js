import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol } from
  "mdbreact";

import rv from "../../Images/rv.png";
import rv2 from "../../Images/AdobeStock_13707734.jpeg";
import rv3 from "../../Images/AdobeStock_145186489.jpeg";
import rv4 from "../../Images/AdobeStock_164017005.jpeg";
import rv5 from "../../Images/AdobeStock_42823965.jpeg";
import rv6 from "../../Images/AdobeStock_95737511.jpeg";
import rv7 from "../../Images/coffee.png";
import rv8 from "../../Images/rv8.jpg";
// import rv9 from "../../Images/road_ocean.jpeg";
import rv10 from "../../Images/treesAndRV.jpg"



const Card = () => {
  return (
    <MDBContainer>
      <MDBCarousel activeItem={3} length={3} slide={true} showControls={true} showIndicators={true} >
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={rv} />
                  <MDBCardBody>
                    {/* <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol >
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={rv5} />
                  <MDBCardBody>
                    {/* <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={rv3} />
                  <MDBCardBody>
                    {/* <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem >
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={rv2} />
                  <MDBCardBody>
                    {/* <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={rv4} />
                  <MDBCardBody>
                    {/* <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={rv6} />
                  <MDBCardBody>
                    {/* <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={rv8} />
                  <MDBCardBody>
                    {/* <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={rv10} />
                  <MDBCardBody>
                    {/* <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="clearfix d-none d-md-block">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src={rv7} />
                  <MDBCardBody>
                    {/* <MDBCardTitle>MDBCard title</MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn color="primary">MDBBtn</MDBBtn> */}
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow >
        </MDBCarouselInner >
      </MDBCarousel >
    </MDBContainer >
  );
}

export default Card;
