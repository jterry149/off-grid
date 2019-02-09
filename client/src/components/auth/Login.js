// Required Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser  } from '../../actions/authActions';
import TextFieldGroup  from '../common/TextFieldGroup';

class Login extends Component {
    // Use a constructor to construct the login
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // ComponentDidMount function
    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    // ComponentWillRecieveProps function
    comonentWillRecieveProps(nextProps) {
        // Push the props to the dashboard
        if (nextProps.auth.isAuthenicated) {
            this.props.history.push('/dashboard');
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
        const user = {
            email: this.state.email,
            password: this.state.password
        };

        // Show user data for testing
        console.log(user);
    }

    // Event handler for onChange
    onChange(event) {
        this.setState({ [event.target.name]: event.target.vale});
    }

    // Render the Modal
    render(){
    // Object state to handle errors
    const { errors } = this.state;
    return (
    <div className="login">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Log In</h1>
                    <p className="lead text-center">
                        Sign in to your TraveLife account
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <TextFieldGroup 
                            placeholder="Email Address"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}
                        />
                        <TextFieldGroup
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}
                        />
                        <input type="submit" 
                        className="btn btn-info btn-block mt-4" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

// Set up object PropsTypes for the Login 
Login.propTypes = {
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
export default connect(mapStateToProps, { loginUser})(Login);
