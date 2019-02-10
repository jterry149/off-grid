// Required dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Required Files
import { registerUser } from '../../actions/authActions';
import TextFieldGroup  from '../common/TextFieldGroup';

class Register extends Component {
  // Construct the required elements for registration
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Component for the user dashboard
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  // Component to handle errors
  componentWillRecieveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  // onChange event handler
  onChange(event) {
    this.setState({ [ event.target.name]: event.target.value });
  }

  // onSumbit event handler
  onSumbit(event) {
    event.preventDefault();
    // Builde a new user state
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };

    this.props.registerUser(newUser, this.props.history);
  }

  // Render the Register page for the user
  render() {
    // Variable used for the errors
    const { errors } = this.state;
    
    return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Register</h1>
            <p className="lead text-center">
              Create your TraveLife account
            </p>
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Name"
                name="name"
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
                info="This site uses Gravatar for profile images so be sure to use a Gravatar email account"
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
                name="confirmPassword"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.onChange}
                error={errors.confirmPassword}
              />
              <input type="sumbit" className="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

// Proptypes
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

// Build the state
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

// Export the component
export default connect(mapStateToProps, { registerUser })(withRouter(Register));