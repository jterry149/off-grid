// Required Dependencies
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Required Files
import { logoutUser } from '../../actions/authActions';
//import { clearCurrentProfile } from '../../actions/profileActions';

// Build the component
class Navbar extends Component {
  
  // Event function to handle logout
  onLogoutClick(event){
    event.preventDefault();
    //this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  
  // Render the navigation page  
  render() {
  
  // Object to check if user is authenticated
  const { isAuthenticated, user } = this.props.auth;

  // Authenticated Links
  const authLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/feed">
          Post Feed
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
            Profile Dashboard
        </Link>
      </li>
      <li className="nav-item">
          <a 
            href=" "
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: '25px', marginRight: '5px' }}
              title="You must have a Gravatar connected to your email to display an image"
            />{' '}
            Logout
          </a>
      </li>
    </ul>
  );

  // Guest user links
  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
  
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          TraveLife Road Warriors
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/map'>
              Journey
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/resources'>
            Resources
            </Link>
          </li>
        </ul>
        {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
  }
}

// Proptypes for the Navbar
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

// The state of the props
const mapStateProps = state => ({
  auth: state.auth
});
export default connect(mapStateProps, { logoutUser })(Navbar);
