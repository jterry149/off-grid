// Required Dependencies and Files
import React, { Component } from "react";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Jumbotron from "../components/Jumbotron/Jumbotron";
// -rimport Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";


class Home extends Component {
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
    }
   
render() {
    return(
        <div className='Site'>
            <div className='Content'>
                <Jumbotron />
                {/* <Carousel /> */}
                <Card />
            </div>
      </div>  
    );
}
}

Home.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps)(Home);