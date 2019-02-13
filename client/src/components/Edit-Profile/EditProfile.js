// Required Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {MDBContainer,MDBRow,MDBCol} from 'mdbreact';
// Required Files
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';

import { createProfile, getCurrentProfile } from '../../actions/profileActions';
import isEmpty from '../../validation/is-empty';




class CreateProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        displaySocialInputs: false,
        handle: '',
        location: '',
        bio: '',
        youtube: '',
        instagram: '',
        twitter: '',
        facebook: '',
        errors: {}
      };
  
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  
    componentDidMount() {
      this.props.getCurrentProfile();
    }
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }
  
      if (nextProps.profile.profile) {
        const profile = nextProps.profile.profile;
  
        // If profile field doesnt exist, make empty string
        profile.location = !isEmpty(profile.location) ? profile.location : '';
        
        profile.bio = !isEmpty(profile.bio) ? profile.bio : '';
        profile.social = !isEmpty(profile.social) ? profile.social : {};
        profile.youtube = !isEmpty(profile.social.youtube)
          ? profile.social.youtube
          : '';
        profile.instagram = !isEmpty(profile.social.instagram)
          ? profile.social.instagram
          : '';
        profile.twitter = !isEmpty(profile.social.twitter)
          ? profile.social.twitter
          : '';
        profile.facebook = !isEmpty(profile.social.facebook)
          ? profile.social.facebook
          : '';
  
        // Set component fields state
        this.setState({
          handle: profile.handle,
          location: profile.location,
          bio: profile.bio,
          youtube: profile.youtube,
          instagram: profile.instagram,
          twitter: profile.twitter,
          facebook: profile.facebook, 
        });
      }
    }
    
    // OnSubmit form change 
    onSubmit(event) {
      event.preventDefault();
  
      const profileData = {
        handle: this.state.handle,
        location: this.state.location,
        bio: this.state.bio,
        youtube: this.state.youtube,
        instagram: this.state.instagram,
        twitter: this.state.twitter,
        facebook: this.state.facebook, 
      };
  
      this.props.createProfile(profileData, this.props.history);
    }
  
    // Onchange event handler
    onChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
    
    // Render the social page
    render() {
        // Errors object
        const { errors, displaySocialInputs } = this.state;
        // socialInputs variable
        let socialInputs;
        
        // Display socialInputs group
        if (displaySocialInputs) {
        socialInputs = (
          <div>
              <InputGroup
              placeholder="YouTube Channel URL"
              name="youtube"
              icon="fab fa-youtube"
              value={this.state.youtube}
              onChange={this.onChange}
              error={errors.youtube}
            />
  
            <InputGroup
              placeholder="Instagram Page URL"
              name="instagram"
              icon="fab fa-instagram"
              value={this.state.instagram}
              onChange={this.onChange}
              error={errors.instagram}
            />
            <InputGroup
              placeholder="Twitter Profile URL"
              name="twitter"
              icon="fab fa-twitter"
              value={this.state.twitter}
              onChange={this.onChange}
              error={errors.twitter}
            />
  
            <InputGroup
              placeholder="Facebook Page URL"
              name="facebook"
              icon="fab fa-facebook"
              value={this.state.facebook}
              onChange={this.onChange}
              error={errors.facebook}
            />
  
            
          </div>
        );
    }
    
    return (
      <div classname="edit-profile">
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol md="8">
                <Link to="/dashboard" className="btn btn-light">
                  Go Back
                </Link>
                <h1 className="display-4 text-center">Edit Profile</h1>
                <small className="d-block pb-3">* = required fields</small>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    error={errors.handle}
                    info="A unique handle for your profile URL. Your full name, company name, nickname"
                  />
                  
                  <TextFieldGroup
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    error={errors.location}
                    info="City or city & state suggested (eg. Boston, MA)"
                  />
                  
                  <TextAreaFieldGroup
                    placeholder="Short Bio"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    error={errors.bio}
                    info="Tell us a little about yourself"
                  />
  
                  <div className="mb-3">
                    <button
                      type="button"
                      onClick={() => {
                        this.setState(prevState => ({
                          displaySocialInputs: !prevState.displaySocialInputs
                        }));
                      }}
                      className="btn btn-light"
                    >
                      Add Social Network Links
                    </button>
                    <span className="text-muted">Optional</span>
                  </div>
                  {socialInputs}
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      );
    }
}
// CreateProfile props
CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
// Map the state to props
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

// Export the Edit Profile with props
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
    withRouter(CreateProfile)
);
  