// Required Dependencies
import React, { Component } from "react";
import { MDBContainer, MDBModalFooter, MDBModal, MDBModalHeader, MDBModalBody, MDBBtn} from 'mdbreact';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Required files
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import "./styles.css";

class SignupMDB extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: "",
            password: "",
            password2: '',
            errors: {}
        };

        // Bind the change
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
    }
    
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    
    
    onSubmit(event) {
        event.preventDefault();
        event.target.className += "was-validated";
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
    
        this.props.registerUser(newUser, this.props.history);
    }

    openOtherModal = () => {
        this.props.toggleOtherModal();
        this.props.toggle();
    }

    render() {
    const { errors } = this.state;
    return (
    <div className="register">
    <MDBContainer>
        <MDBModal isOpen={this.props.modal} toggle={this.props.toggle}>
          <MDBModalHeader className="justify-center-center" toggle={this.props.toggle}>Sign Up</MDBModalHeader>
            <MDBModalBody className="modal-body mx-4">
                <form className="needs-validation" onSubmit={this.onSubmit} noValidate>
                    <TextFieldGroup
                    placeholder="Name"
                    name="name"
                    type="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                />
                <TextFieldGroup
                    placeholder="Email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                    info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />
                <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                />
                <TextFieldGroup
                    placeholder="Confirm Password"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
                />
              
                <MDBBtn
                    type="submit"
                    className="btn blue-gradient btn-info btn-block btn-rounded z-depth-1a"
                >Submit </MDBBtn>
                <div className="font-small grey-text d-flex justify-content-end">
                        
                        Have an account?{" "}<p onClick={this.openOtherModal} className="blue-text ml-1 font-weight-bold"> Sign In{" "}</p>
                        </div>
                </form>
                    
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBContainer>
                            &copy; {new Date().getFullYear()} Copyright: <a href="/home"> TraveLife Road Warriors
                            </a>
                        </MDBContainer>
                    </MDBModalFooter> 
                </MDBModal>
            </MDBContainer>
            </div>
        );
    };
};

// Set the props object
registerUser.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
 
// Map the props to state
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

// Export the signup
export default connect(mapStateToProps, { registerUser })(withRouter(SignupMDB));
