import React, { Component } from 'react';
import '../css/New/slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IMG_4871 from "./../assets/IMG_4871.jpg";
import IMG_4873 from "./../assets/IMG_4873.JPG"


export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
            <div className="slider-wrapper">
                <h1 style={{color:'#ffffff'}}>Title</h1>


            </div>
            <Carousel
                      infiniteLoop={1}
                      showThumbs={false}
                      dynamicHeight={1}
                      showStatus={0}
                      autoPlay={1}
                      interval={2000}
            >
                <div className="slideImage">
                    <img src={IMG_4873} />
                </div>
                <div className="slideImage">
                    <img src={IMG_4871}  />

               </div>
                <div className="slideImage">
                    <img src={IMG_4873} />
                </div>
                <div className="slideImage">
                    <img src={IMG_4871}  />
                </div>

            </Carousel>
                </div>
        );
    }
}
