// Required Dependencies
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Create the private route for authenticated users links if a valid user if not redirect back to the login page
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

// Props for the the privateRoute
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

// Variable to build the state
const mapStateToProps = state => ({
  auth: state.auth
});

// Export the route
export default connect(mapStateToProps)(PrivateRoute);
