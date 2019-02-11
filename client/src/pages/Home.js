// Required Dependencies and Files
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron";
//import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";


class Home extends Component {

    render() {
        return (
            <div className='Site'>
                <div className='Content'>
                    <Jumbotron />
                    {/* <Carousel /> */}
                    {/* <Card /> */}
                </div>
            </div>
        );
    }
}

export default Home;