import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBBtn, MDBCol, MDBRow } from "mdbreact";

// Required Files
import { logoutUser } from '../../actions/authActions';
import Login from '../Login/LoginMDB';
import Signup from '../Signup/SignupMDB';
import Logo_small from '../../images/Logo_small.png';
import Worrier from '../../images/worrier.png';
import RoadWarrior from '../../images/roadwarriors_small.png'
// import RoadWarriorColor from '../../images/roadwarriors_small_yellow.png'

class Navbar extends Component {
  state = {
    loginModal: false,
    signupModal: false,

  };


  toggleLoginModal = () => {
    this.setState({
      loginModal: !this.state.loginModal
    });
  };

  toggleSignupModal = () => {
    this.setState({
      signupModal: !this.state.signupModal
    });
  };

  // Event function to handle logout
  onLogoutClick(event) {
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
            className={MDBNavLink}
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
        <div id="transparent">
          <MDBNavItem >
            <div id="red">
              <MDBBtn onClick={() => this.toggleSignupModal()}>Sign up</MDBBtn>
            </div>
          </MDBNavItem>
          <MDBNavItem>
            <MDBBtn onClick={() => this.toggleLoginModal()}>Log in</MDBBtn>
          </MDBNavItem>
        </div>
      </MDBNavbarNav>
    );
    return (
      <div>
        <Login modal={this.state.loginModal}
          toggle={this.toggleLoginModal}
          toggleOtherModal={this.toggleSignupModal}

        />
        <Signup
          modal={this.state.signupModal}
          toggle={this.toggleSignupModal}
          toggleOtherModal={this.toggleLoginModal}
        />
        {/* color="indigo darken-4" dark expand="md"> */}
        <MDBNavbar>
          <MDBRow>
            <MDBCol sm-3>
              <MDBNavbarBrand>
                <a class="nav-link Ripple-parent active" aria-current="page" href="/">
                  <img src={Logo_small} style={{ width: 200, marginTop: -7 }} /></a>
                <a class="nav-link Ripple-parent active" aria-current="page" href="/">
                  <img src={RoadWarrior} style={{ width: 300 }} /></a>
              </MDBNavbarBrand>
            </MDBCol>
            <MDBCol sm-3>
              <MDBNavbarBrand>

              </MDBNavbarBrand>
            </MDBCol>
            <MDBCol sm-6>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav>
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
                    <MDBNavLink to="/YouTube">Resources</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav>
                  {isAuthenticated ? authLinks : guestLinks}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBCol>
          </MDBRow>
        </MDBNavbar>
      </div >
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

