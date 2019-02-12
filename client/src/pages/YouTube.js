import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";
const YouTubePage = () => {
  return (
    <MDBCard
      className="my-5 px-5 mx-auto"
      style={{ fontWeight: 300, maxWidth: "90%" }}
    >
      <MDBCardBody style={{ paddingTop: 0 }}>
        <h2 className="h1-responsive font-weight-bold my-5 text-center">
          Latest News...
          </h2>
        <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
          Whether you’re downsizing or thrill-seeking—or anything in between—find out if the RV lifestyle is right for you, and learn how to transition from a life of traditional home-ownership to one on the road.
          </p>
        <MDBRow>
          <MDBCol lg="6" md="12">
            <div style={{
              borderBottom: "1px solid #e0e0e0",
              marginBottom: "1.5rem"
            }}>
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <div className="d-flex justify-content-between">
                <a href="#!" className="light-blue-text">
                  <h6 className="font-weight-bold">
                    <MDBIcon icon="plane" className="pr-2" />
                    Travels
                    </h6>
                </a>
                <p className="font-weight-bold dark-grey-text">
                  <MDBIcon far icon="clock" className="pr-2" />
                  20/08/2018
                  </p>
              </div>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                <a href="#!">Title of the news</a>
              </h3>
              <p className="dark-grey-text">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere
                possimus, omnis voluptas assumenda est, omnis dolor
                repellendus.
                </p>
            </div>
            <div style={{
              borderBottom: "1px solid #e0e0e0",
              marginBottom: "1.5rem"
            }}>
              <MDBRow>
                <MDBCol md="3">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/photo8.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol md="9">
                  <p className="font-weight-bold dark-grey-text">
                    19/08/2018
                    </p>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="dark-grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit
                        </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
            <div style={{
              borderBottom: "1px solid #e0e0e0",
              marginBottom: "1.5rem"
            }}>
              <MDBRow>
                <MDBCol md="3">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/54.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol md="9">
                  <p className="font-weight-bold dark-grey-text">
                    18/08/2018
                    </p>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="dark-grey-text">
                        Soluta nobis est eligendi optio cumque nihil impedit
                        quo minus
                        </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
            <div className="mb-4">
              <MDBRow>
                <MDBCol md="3">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol md="9">
                  <p className="font-weight-bold dark-grey-text">
                    17/08/2018
                    </p>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="dark-grey-text">
                        Voluptatem accusantium doloremque
                        </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>
          <MDBCol lg="6" md="12">
            <div style={{
              borderBottom: "1px solid #e0e0e0",
              marginBottom: "1.5rem"
            }}>
              <MDBView hover rounded className="z-depth-1-half mb-4">
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" className="waves-light" />
                </a>
              </MDBView>
              <div className="d-flex justify-content-between">
                <a href="#!" className="pink-text">
                  <h6 className="font-weight-bold">
                    <MDBIcon icon="home" className="pr-2" />
                    Lifestyle
                    </h6>
                </a>
                <p className="font-weight-bold dark-grey-text">
                  <MDBIcon far icon="clock" className="pr-2" />
                  24/08/2018
                  </p>
              </div>
              <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                <a href="#!">Title of the news</a>
              </h3>
              <p className="dark-grey-text">
                Sed ut perspiciatis unde voluptatem omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae.
                </p>
            </div>
            <div style={{
              borderBottom: "1px solid #e0e0e0",
              marginBottom: "1.5rem"
            }}>
              <MDBRow>
                <MDBCol md="3">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol md="9">
                  <p className="font-weight-bold dark-grey-text">
                    23/08/2018
                    </p>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="dark-grey-text">
                        Itaque earum rerum hic tenetur a sapiente delectus
                        </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
            <div style={{
              borderBottom: "1px solid #e0e0e0",
              marginBottom: "1.5rem"
            }}>
              <MDBRow>
                <MDBCol md="3">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol md="9">
                  <p className="font-weight-bold dark-grey-text">
                    22/08/2018
                    </p>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="dark-grey-text">
                        Soluta nobis est eligendi optio cumque nihil impedit
                        quo minus
                        </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
            <div className="mb-4">
              <MDBRow>
                <MDBCol md="3">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(56).jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol md="9">
                  <p className="font-weight-bold dark-grey-text">
                    21/08/2018
                    </p>
                  <div className="d-flex justify-content-between">
                    <MDBCol size="11" className="text-truncate pl-0 mb-3">
                      <a href="#!" className="dark-grey-text">
                        Maiores alias consequatur aut perferendis
                        </a>
                    </MDBCol>
                    <a href="#!">
                      <MDBIcon icon="angle-double-right" />
                    </a>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}
export default YouTubePage;