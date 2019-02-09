// Required Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Required Files
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

// Style the google maps
const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

export class CurrentLocation extends React.Component {
  // constructor for our props
  constructor (props) {
    super(props);

    // Get the lat and lng of the current location state
    const { lat, lng } = this.props.initalCenter;
    // Build the initial state object 
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }

  // Mount the component
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(pos => {
          // Variable for position coordinates
          const coords = pos.coords;
          
          // Object to load coordinates and set the state location
          this.setState({
            currentLocation: {
              lat: coords.lat,
              lng: coords.lng
            }
          });
        });
      }
    }
    // Load the map
    this.loadMap();
  }
  
  // Update the map component with current state of the map
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }
  
  // Load the map for the based on the location 
  loadMap() {
    if (this.props && this.props.google) {
      
      // checks if google is available 
      const { google } = this.props;
      // variable to reference the google map
      const maps = google.maps;
      // variable to be used for the dom
      const mapRef = this.refs.map;

      // reference to the actual Dom elemnt 
      const node = ReactDOM.findDOMNode(mapRef);

      // Variable object for the zoom function of the map
      let { zoom } = this.props;
      // Variable object for lat, lng of the currentlocation
      const { lat, lng } = this.state.currentLocation;
      // Variable to center the map accorcing to the coordinates
      const center = new maps.LatLng(lat, lng);
      
      // Variable for configurations of  the map
      const mapConfig = Object.assign({},
        {
          center: center,
          zoom: zoom
        }
      );
      // A constructor that instantiates the map using map.Map()
      this.map = new maps.Map(node, mapConfig);
    }
  }

  // Recenter the map
  recenterMap() {
    // Variable to reference the map
    const map = this.map;
    // Variable to reference the current location
    const current = this.state.currentLocation;
    // Variable to reference if googles is available
    const google = this.props.google;
    // Reference the maps of google
    const maps = google.maps;

    // Recenter the map 
    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  //Render Children props for the map
  renderChildren() {
    // Variable for the props object of children
    const { children } = this.props;

    // If no children return
    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    return (
    <div className="Site">
    <Navbar />
      <div className="Content">
        <div style={mapStyles } ref="map">
          Loading Map...
        </div>  
          {this.renderChildren()}
      </div>
    <Footer />  
    </div>
    );
  }
}
// Export the Current Location
export default CurrentLocation;

// The default Props settings
CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: 32.845292,
    lng:-96.782535 
  },
  centerAroundCurrentLocation: false,
  visible:true
};
  


