// Required Dependencies and Files
import React, { Component } from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

import '../pages/Home';
class Home extends Component {

render() {
    return(
        <div className='Site'>
            <div className='Content'>
                <Jumbotron />
                <Carousel />
                <Card />
            </div>
      </div>  
    );
}
}

export default Home;