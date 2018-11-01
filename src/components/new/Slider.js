import React, { Component } from 'react';
import '../../css/New/slider.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import IMG_4871 from "./../../assets/IMG_4871.jpg";
import IMG_4873 from "./../../assets/IMG_4873.JPG"
import Modal from "react-responsive-modal";
import Login from "../../components/new/Login";
import LandingTopNav from "./LandingTopNav";

export default class Slider extends Component {
    // state = {
    //     open: false
    // };
    //
    // onOpenModal = () => {
    //     this.setState({ open: true });
    // };
    //
    // onCloseModal = () => {
    //     this.setState({ open: false });
    // };



    render() {
        // const { open } = this.state;
        return (
            <div>
                {/*<span className="btnModal">*/}
                    {/*<button onClick={this.onOpenModal}>login</button>*/}
                    {/*<Modal open={open} onClose={this.onCloseModal} center>*/}
                       {/*<Login/>*/}
                    {/*</Modal>*/}
                {/*</span>*/}
               {/*<LandingTopNav/>*/}

                <div className='carousel'>
                    <Carousel
                    showThumbs={false}
                    dynamicHeight={1}
                    showStatus={0}
                    autoPlay={1}
                    interval={2000}
                    infiniteLoop={2}
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

                </div>
        );
    }
}


