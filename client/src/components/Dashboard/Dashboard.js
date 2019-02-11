// Required Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Required Files
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import DashboardActions from './DashboardActions';

class Dashboard extends Component {
    // Mount the component props
    componentDidMount() {
      this.props.getCurrentProfile();
    }
    
    // Delete the account
    onDeleteClick(event) {
      this.props.deleteAccount();
    }
  
    render() {
      const { user } = this.props.auth;
      const { profile, loading } = this.props.profile;
  
      let dashboardContent;
  
      if (profile === null || loading) {
        dashboardContent = <Spinner />;
      } else {
        // Check if logged in user has profile data
        if (Object.keys(profile).length > 0) {
          dashboardContent = (
            <div>
              <p className="lead text-muted">
                Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
              </p>
              <DashboardActions />
              <div style={{ marginBottom: '60px' }} />
              <button
                onClick={this.onDeleteClick.bind(this)}
                className="btn btn-danger"
              >
                Delete My Account
              </button>
            </div>
          );
        } else {
          // User is logged in but has no profile
          dashboardContent = (
            <div>
              <p className="lead text-muted">Welcome {user.name}</p>
              <p>You have not yet setup a profile, please add some info</p>
              <Link to="/create-profile" className="btn btn-lg btn-info">
                Create Profile
              </Link>
            </div>
          );
        }
      }
  
      return (
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4">Dashboard</h1>
                {dashboardContent}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

// Dashboard props
Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};
  
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

// Export the Dashboard
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
    Dashboard
);
  
