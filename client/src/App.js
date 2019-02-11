// Required Dependencies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
//import { clearCurrentProfile } from './actions/profileActions';

// Redux and our store
import { Provider } from 'react-redux';
import store from './store';

// Import our private route component
import PrivateRoute from './components/common/PrivateRoute';

// Required Files
import Home from './pages/Home';
//import CurrentLocation from './components/Map/Map';
import Navbar from './components/Navbar/NavbarMDB';
import Footer from './components/Footer/Footer';
import YouTube from './pages/YouTube';
import about from './pages/about';
//import Register from './components/auth/Register';
// import Login from './components/auth/Login'
import Signup from './components/Signup/SignupMDB'
import Login from './components/Login/LoginMDB'
//import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/Create-Profile/CreateProfile';
//import EditProfile from './components/edit-profile/EditProfile';
//import AddVehicle from './components/add-credentials/AddVehicle';
//import AddEducation from './components/add-credentials/AddEducation';
//import Profiles from './components/profiles/Profiles';
//import Profile from './components/profile/Profile';
//import Posts from './components/posts/Posts';
//import Post from './components/post/Post';
//import NotFound from './components/not-found/NotFound';

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



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/YouTube" component={YouTube} />
            <Route exact path="/about" component={about} />

            <div className="container">
              {/* <Route exact path="/map" component={CurrentLocation} /> */}
              <Route exact path="/register" component={Signup} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/profile/:handle" component={Profile} />
              <Switch>
                  <PrivateRoute exact path="/dashboard" component= {Dashboard} />
              </Switch> */}
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              {/* <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch> */}
              {/* <Switch>
                <PrivateRoute exact path="/feed" component={Posts} />
              </Switch> */}
              {/* <Switch>
                <PrivateRoute exact path="/post/:id" component={Post} />
              </Switch> */}
              {/* <Route exact path="/not-found" component={NotFound} /> */}
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
