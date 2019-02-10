import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact';

class SignupMDB extends MDBModal {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    openOtherModal = () => {
        this.props.toggleOtherModal();
        this.props.toggle();
    }

    render() {

        // const SignupMDB = () => {
        return (
            <MDBContainer>
                <MDBModal isOpen={this.props.modal} toggle=
                    {this.props.toggle}>
                    <MDBModalBody>
                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard
                                    className="card-image"
                                    style={{
                                        backgroundImage:
                                            "url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)",
                                        width: "28rem"
                                    }}
                                >                        <MDBBtn onClick={this.props.toggle}>X</MDBBtn>

                                    <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                                        <div className="text-center">
                                            <h3 className="white-text mb-5 mt-4 font-weight-bold">
                                                <strong>SIGN</strong>
                                                <a href="#!" className="green-text font-weight-bold">
                                                    <strong> UP</strong>
                                                </a>
                                            </h3>
                                        </div>
                                        <MDBInput label="Your email" group type="text" validate />
                                        <MDBInput label="Your password" group type="password" validate />
                                        <div className="md-form pb-3">
                                            <div className="form-check my-4">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    id="defaultCheck17"
                                                />
                                                <label
                                                    className="form-check-label white-text"
                                                    htmlFor="defaultCheck17"
                                                >
                                                    Accept the
                    <a href="#!" className="green-text font-weight-bold">
                                                        Terms and Conditions
                    </a>
                                                </label>
                                            </div>
                                        </div>
                                        <MDBRow className="d-flex align-items-center mb-4">
                                            <div className="text-center mb-3 col-md-12">
                                                <MDBBtn
                                                    color="success"
                                                    rounded
                                                    type="button"
                                                    className="btn-block z-depth-1"
                                                >
                                                    Sign in
                  </MDBBtn>
                                            </div>
                                        </MDBRow>
                                        <MDBCol md="12">
                                            <p className="font-small white-text d-flex justify-content-end">
                                                Have an account?
                                                <p onClick={this.openOtherModal} className="green-text ml-1 font-weight-bold">
                                                    Log in
                  </p>
                                            </p>
                                        </MDBCol>
                                    </div>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBModalBody>
                </MDBModal>

            </MDBContainer>
        );
    };
};


export default SignupMDB;