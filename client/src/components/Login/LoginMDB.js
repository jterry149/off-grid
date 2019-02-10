import React, { Component } from "react";
import { Modal, ModalBody } from "reactstrap";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "./styles.css";
import {
  MDBContainer,
  MDBBtnGroup,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";

class LoginMDB extends MDBModal {
  state = {
    email: "",
    password: ""
  };

  submitForm(e) {
    e.preventDefault();
    console.log(`Email: ${this.state.email}`);
  }
  openOtherModal = () => {
    this.props.toggleOtherModal();
    this.props.toggle();
  }
  render() {
    return (
      //   <button onClick={this.toggleModal}>Login or Register</button>,
      <MDBContainer>
        <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
          <MDBModalHeader toggle={this.props.toggle}>Sign In</MDBModalHeader>
          <MDBModalBody>

            {/* <!--Body--> */}

            <div className="modal-body mx-4">
              <div className="md-form mb-5">
                <input

                  type="email"
                  id="Form-email1"
                  className="form-control validate"
                />
                <label data-error="wrong" data-success="right" for="Form-email1">
                  Your email {" "}
                </label>
              </div>

              <div className="md-form pb-3">
                <input
                  type="password"
                  id="Form-pass1"
                  className="form-control validate"
                />
                <label data-error="wrong" data-success="right" for="Form-pass1">
                  Your password
              </label>
                <p className="font-small blue-text d-flex justify-content-end">
                  Forgot{" "}
                  <a href="#" className="blue-text ml-1">
                    Password?
                </a>
                </p>
                <div className="text-center mb-3">
                  <button
                    type="button"
                    className="btn blue-gradient btn-block btn-rounded z-depth-1a"
                  >
                    Sign in
                </button>
                </div>
                <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                  {" "}
                  or Sign in with:
              </p>

                <div className="row my-3 d-flex justify-content-center">
                  {/* <!--Facebook--> */}
                  <Button
                    type="button"
                    className="btn btn-white btn-rounded mr-md-3 z-depth-1a"
                  >
                    <i className="fab fa-facebook-f text-center" />
                  </Button>
                  {/* <!--Twitter--> */}
                  <button
                    type="button"
                    className="btn btn-white btn-rounded mr-md-3 z-depth-1a"
                  >
                    <i className="fab fa-twitter" />
                  </button>
                  {/* <!--Google +--> */}
                  <button
                    type="button"
                    className="btn btn-white btn-rounded z-depth-1a"
                  >
                    <i className="fab fa-google-plus-g" />
                  </button>
                </div>
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?{" "}
                  <p onClick={this.openOtherModal} className="green-text ml-1 font-weight-bold">
                    Sign Up{" "}
                  </p>{" "}
                </p>
              </div>
            </div>
          </MDBModalBody>
          {/* <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter> */}
        </MDBModal>
      </MDBContainer>
      //   <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
      //     <div
      //       className="modal fade"
      //       id="elegantModalForm"
      //       tabindex="-1"
      //       role="dialog"
      //       aria-labelledby="myModalLabel"
      //       aria-hidden="true"
      //     >
      //       <div className="modal-dialog" role="document">
      //         {/* <!--Content--> */}
      //         <div className="modal-content form-elegant">
      //           {/* <!--Header--> */}
      //           <div className="modal-header text-center">
      //             <h3
      //               className="modal-title w-100 dark-grey-text font-weight-bold my-3"
      //               id="myModalLabel"
      //             >
      //               <strong>Sign in</strong>
      //             </h3>
      //             <button
      //               type="button"
      //               className="close"
      //               data-dismiss="modal"
      //               aria-label="Close"
      //             >
      //               <span aria-hidden="true">&times;</span>
      //             </button>
      //           </div>
      //           {/* <!--Body--> */}
      //           <div className="modal-body mx-4">
      //             {/* <!--Body--> */}
      //             <div className="md-form mb-5">
      //               <input
      //                 type="email"
      //                 id="Form-email1"
      //                 className="form-control validate"
      //               />
      //               <label
      //                 data-error="wrong"
      //                 data-success="right"
      //                 for="Form-email1"
      //               >
      //                 Your email
      //               </label>
      //             </div>

      //             <div className="md-form pb-3">
      //               <input
      //                 type="password"
      //                 id="Form-pass1"
      //                 className="form-control validate"
      //               />
      //               <label
      //                 data-error="wrong"
      //                 data-success="right"
      //                 for="Form-pass1"
      //               >
      //                 Your password
      //               </label>
      //               <p className="font-small blue-text d-flex justify-content-end">
      //                 Forgot{" "}
      //                 <a href="#" className="blue-text ml-1">
      //                   Password?
      //                 </a>
      //               </p>
      //             </div>

      //           </div>
      //           {/* <!--Footer--> */}
      //           <div className="modal-footer mx-5 pt-3 mb-1">
      //             <p className="font-small grey-text d-flex justify-content-end">
      //               Not a member?
      //               <a href="#" className="blue-text ml-1">
      //                 Sign Up
      //               </a>
      //             </p>
      //           </div>
      //         </div>
      //         {/* <!--/.Content--> */}
      //       </div>
      //     </div>
      //   </Modal>
    );
  }
}

export default LoginMDB;
