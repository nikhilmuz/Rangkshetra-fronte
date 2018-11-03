import React, { Component } from 'react';
import '../../css/New/slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import tbsbanner2 from "./../../assets/tbsbanner2.jpg"
import tbsbanner1 from "./../../assets/tbsbanner1.jpg"
import tbsbanner5 from "./../../assets/tbsbanner5.jpg"
import tbsbanner3 from "./../../assets/tbsbanner3.jpg"
import tbsbanner4 from "./../../assets/tbsbanner4.jpg"

import tbsbanner6 from "./../../assets/tbsbanner6.jpg"
import Modal from "react-responsive-modal";
import Login from "../../components/new/Login";
import LandingTopNav from "./LandingTopNav";

export default class Slider extends Component {
    render() {
        return (
            <div>
                <div className='carousel'>
                    <Carousel
                    showThumbs={false}
                    dynamicHeight={1}
                    showStatus={0}
                    autoPlay={0}
                    interval={2000}
                    infiniteLoop={2}

                >
                        <div className="slideImage">
                        <img src={tbsbanner6} />
                    </div>
                        <div className="slideImage">
                        <img src={tbsbanner5}  />
                    </div>
                        <div className="slideImage">
                        <img src={tbsbanner2} />
                    </div>
                        <div className="slideImage">
                        <img src={tbsbanner1}  />
                        </div>
                        <div className="slideImage">
                            <img src={tbsbanner4} />
                        </div>
                    <div className="slideImage">
                        <img src={tbsbanner3} />
                    </div>

                    </Carousel>
                </div>
                </div>
        );
    }
}


