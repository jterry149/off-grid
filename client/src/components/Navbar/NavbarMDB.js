import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, } from "mdbreact";

// Required Files
import { logoutUser } from '../../actions/authActions';


class Navbar extends Component {
    state = {
        isOpen: false
    };

     // Event function to handle logout
    onLogoutClick(event){
        event.preventDefault();
        //this.props.clearCurrentProfile();
        this.props.logoutUser();
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        // Object to check if user is authenticated
        const { isAuthenticated, user } = this.props.auth;

        // Authenticated Links
  const authLinks = (
    <MDBNavbarNav>
      <MDBNavItem >
        <MDBNavLink to="/feed">
          Post Feed
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem >
        <MDBNavLink to="/dashboard">
            Profile Dashboard
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem >
          <a 
            href=" "
            onClick={this.onLogoutClick.bind(this)}
            className= {MDBNavLink}
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
      </MDBNavItem>
    </MDBNavbarNav>
  );
  // Guest user links
  const guestLinks = (
    <MDBNavbarNav >
      <MDBNavItem >
        <MDBNavLink to="/register">
          Sign Up
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="/login">
          Login
        </MDBNavLink>
      </MDBNavItem>
    </MDBNavbarNav>
  );
        return (
            <MDBNavbar color="indigo darken-4" dark expand="md">
                <MDBNavbarBrand>
                    <strong className="white-text">TraveLife Road Warriors</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/about">About</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/map">Journey</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/resources">Resources</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        {isAuthenticated ? authLinks : guestLinks}     
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
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
  