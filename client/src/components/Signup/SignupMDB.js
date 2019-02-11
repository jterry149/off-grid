import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBModalFooter, MDBInput, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact';

class SignupMDB extends Component {
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

    return (
    <MDBContainer>
        <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
          <MDBModalHeader className="justify-center-center" toggle={this.props.toggle}>Sign Up</MDBModalHeader>
            <MDBModalBody>
                <form className="modal-body mx-4">
                    <MDBInput icon="user" label="Your Name" group type="text" validate />
                    <MDBInput icon="envelope"label="Your Email Address" group type="email" validate />
                    <MDBInput icon="lock" label="Your Password" group type="password" validate />
                    <MDBInput icon="lock"label="Confirm Password" group type="password" validate />
                        <div className="md-form pb-3">
                            <div className="form-check my-4">
                                <MDBInput className="form-check-input" 
                                        group type="checkbox" 
                                        value=""              
                                        id="defaultCheck17"/>
                                                
                                <p> Accept the <a href="#!" className="blue-text font-weight-bold">
                                                        Terms and Conditions</a></p> 
                    
                            </div>
                        </div>
                        <div className="text-center mb-3 col-md-12">
                            <MDBBtn
                                type="button"
                                className="btn blue-gradient btn-block btn-rounded z-depth-1a"
                                onSubmit={this.onSubmit}
                                onClick={this.onChange}
                            >
                                Sign Up 
                            </MDBBtn>
                        </div>
                            <div className="font-small grey-text d-flex justify-content-end">
                                Have an account?{" "}
                                <p onClick={this.openOtherModal} className="blue-text ml-1 font-weight-bold">
                                Sign In{" "}
                                </p>{" "}
                        </div>
                </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a href="/home"> TraveLife Road Warriors</a>
                        </MDBContainer>
                    </MDBModalFooter> 
                </MDBModal>
            </MDBContainer>
        );
    };
};


export default SignupMDB;