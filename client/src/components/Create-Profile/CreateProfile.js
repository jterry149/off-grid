// Required Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

// Required component files
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import { createProfile } from '../../actions/profileActions';


class CreateProfile extends Component {
    // Construct our props state
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
  
    // Component to recieve props
    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }
    }
  
    // On submit event handler function
    onSubmit(event) {
        event.preventDefault();
        // Build our profileDate
        const profileData = {
            handle: this.state.handle,
            location: this.state.location,
            bio: this.state.bio,
            youtube: this.state.youtube,
            instagram: this.state.instagram,
            twitter: this.state.twitter,
            facebook: this.state.facebook,      
        };
        
        // Create the profile when submitted
        this.props.createProfile(profileData, this.props.history);
    }
  
    // Our onChange event handler
    onChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    // Render our create profile page
    render() {
        // Variable to object for the state
        const { errors, displaySocialInputs } = this.state;
        
        // Variable for our social inputs
        let socialInputs;
        
        // If statement to display social inputs
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
  
      // Render our created profile page for the user to input data
        return (
        <div className="create-profile">
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol md="8">
                    <h1 className="display-4 text-center">Create Your TraveLife Road Warriors Profile</h1>
                    <p className="lead text-center">
                        Make your profile stand out
                    </p>
                    <small className="d-block pb-3">* = required fields</small>
                <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                        placeholder="* Profile Handle"
                        name="handle"
                        value={this.state.handle}
                        onChange={this.onChange}
                        error={errors.handle}
                        info="A unique handle for your profile URL."
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
                    <MDBBtn
                        type="button"
                        onClick={() => {
                        this.setState(prevState => ({
                            displaySocialInputs: !prevState.displaySocialInputs
                        }));
                      }}
                      className="btn btn-light"
                    >
                      Add Social Network Links
                    </MDBBtn>
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

// Create our propsTypes object
CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

// Variable for our props to state
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

// Export the CreateProfile 
export default connect(mapStateToProps, { createProfile })(
    withRouter(CreateProfile)
);
  