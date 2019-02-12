// Required Dependencies
import React, { Component } from "react";
import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBBtn
} from "mdbreact";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Required Files
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";
import "./styles.css";

class LoginMDB extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // ComponentDidMount function
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  // ComponentWillReceiveProps function
  comonentWillReceiveProps(nextProps) {
    // Push the props to the dashboard
    if (nextProps.auth.isAuthenicated) {
      this.props.history.push("/dashboard");
    }

    // Handle the errors of the props
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  // Event handler for onSubmit
  onSubmit(event) {
    event.preventDefault();

    // Variable object for the user
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);

    // Show user data for testing
    console.log(userData);
  }
  // Event handler for onChange
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Open model
  openOtherModal = () => {
    this.props.toggleOtherModal();
    this.props.toggle();
  };

  render() {
    // Object state to handle errors
    const { errors } = this.props;
    console.log(this.props);
    return (
      <MDBContainer>
        <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
          <MDBModalHeader className="text-center" toggle={this.props.toggle}>
            Sign In
          </MDBModalHeader>
          <MDBModalBody className="modal-body mx-4">
            {/* <!--Body--> */}
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Email Address"
                name="email"
                type="email"
                icon="envelope"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
              />
              <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                icon="lock"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              />
              <input
                type="submit"
                className="btn blue-gradient btn-info btn-block btn-rounded z-depth-1a"
              />
            </form>

            <div className="text-center mb-3">
              {/* <MDBBtn
                    type="button"
                    className="btn blue-gradient btn-block btn-rounded z-depth-1a"
                    onSubmit={this.onSubmit}
                    onClick={this.onChange}
                  > */}
              <p className="font-small blue-text d-flex justify-content-end">
                {" "}
                <a href="!#" className="blue-text ml-1">
                  Forgot Password?
                </a>
              </p>

              {/* </MDBBtn> */}
            </div>

            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
              {" "}
              or Sign in with:
            </p>

            <div className="row my-3 d-flex justify-content-center">
              {/* <!--Facebook--> */}
              <button
                type="button"
                className="btn btn-white btn-rounded mr-md-3 z-depth-1a"
              >
                <i className="fab fa-facebook-f text-center" />
              </button>
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
            <div className="font-small grey-text d-flex justify-content-end">
              Not a member?{" "}
              <p
                onClick={this.openOtherModal}
                className="blue-text ml-1 font-weight-bold"
              >
                Sign Up{" "}
              </p>{" "}
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="/home"> TraveLife Road Warriors</a>
            </MDBContainer>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
// Set up object PropsTypes for the Login
LoginMDB.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

// Build our mapStateToProps
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

// Export the Login
export default connect(
  mapStateToProps,
  { loginUser }
)(LoginMDB);
