// Required Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
//import { clearCurrentProfile } from './actions/profileActions';

// Redux and our store
import { Provider } from 'react-redux';
import store from './store';

// Required Files
import Home from "./pages/Home";
//import CurrentLocation from './components/Map/Map';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login'

// Imported styles sheet
import "./styles.css";

// Check for token for our user
if (localStorage.jwtToken) {
  // Set auth token header to auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and expire date
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user as isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired tokens
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}



class  App extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <div className="container">
              {/* <Route exact path="/map" component={CurrentLocation} /> */}
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

// TANNER - NEED TO ADD MODALS FOR: SIGNUP, PLAN A TRIP (WITH DESTINATION AND STOP CHOICES, LINKED TO GOOGLEMAPS API//

//MODALS:
//PAGES/LINKS/DROPDOWNS - OWN YOUR OWN TINY HOME, RV, CAMPER; LEARN HOW TO CONVERT; RENT A VEHICLE; ROAD RULES //
// CAMPGROUND INFORMATION; WORKING ON THE ROAD; LIVE MAPS WITH TRAFFIC, DIRECTIONS; USER PAGE - UPDATE TRIP, WIFI, GAS STATIONS, //
//PARKING, TRAFFIC, SHOWERS, SHOPPING, DINING, PUBLIC / PRIVATE AREAS; SIGHTSEEING ALONG THE WAY;//
// ABOUT US/CONTACT US PAGE, FOOTER, FACEBOOK, TWITTER, INSTA LINKS; ARTICLES ON TRAVEL; WEBSITE SCRAPING FOR ARTICLES;
