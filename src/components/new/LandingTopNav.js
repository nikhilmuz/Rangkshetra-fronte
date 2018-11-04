import React, {Component} from "react";

import './../../css/New/landingtopnav.css'
import tbs_logo from './../../assets/tbs_logo.png'
import Modal from "react-responsive-modal";
import Login from "./Login";

export default class LandingTopNav extends Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div className="landingTopNav" >
                <img className="brandLogo" src={tbs_logo}  />
                <ul>
                    <li>
                    <a onClick={this.onOpenModal}>Login / Sign up</a>
                    <Modal open={open} onClose={this.onCloseModal} center>
                       <Login/>
                    </Modal>
                </li>
                </ul>
            </div>
        )
    }
}