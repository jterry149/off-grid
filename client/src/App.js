import React from "react";

// import Login from "./components/Login/Login";
import YouTube from "./components/YouTube/YouTube";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import MDBLogin from "./components/Login/MDBLogin";
import SignupMDB from "./components/Signup/SignupMDB";
import YouTubeCarousel from "./components/YouTube/YouTubeCarousel";

// import Signup from "./components/Signup/Signup";
import "./styles.css";

function App() {
  return (
    <div>
      <MDBLogin />
      <SignupMDB />
      <YouTubeCarousel />
      <YouTube />
      {/* <Signup /> */}
      <Navbar />
      <Jumbotron />
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
}

export default App;

// TANNER - NEED TO ADD MODALS FOR: SIGNUP, PLAN A TRIP (WITH DESTINATION AND STOP CHOICES, LINKED TO GOOGLEMAPS API//

//MODALS:
//PAGES/LINKS/DROPDOWNS - OWN YOUR OWN TINY HOME, RV, CAMPER; LEARN HOW TO CONVERT; RENT A VEHICLE; ROAD RULES //
// CAMPGROUND INFORMATION; WORKING ON THE ROAD; LIVE MAPS WITH TRAFFIC, DIRECTIONS; USER PAGE - UPDATE TRIP, WIFI, GAS STATIONS, //
//PARKING, TRAFFIC, SHOWERS, SHOPPING, DINING, PUBLIC / PRIVATE AREAS; SIGHTSEEING ALONG THE WAY;//
// ABOUT US/CONTACT US PAGE, FOOTER, FACEBOOK, TWITTER, INSTA LINKS; ARTICLES ON TRAVEL; WEBSITE SCRAPING FOR ARTICLES;
