import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from "./react.png"
import image2 from "./angular.jpeg"
import image3 from "./js.jpeg"


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel width={400}>
                <div>
                    <img src={image1} width={200} height={500}  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image2} width={200} height={500} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} width={200} height={500}  />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};


export default DemoCarousel 

