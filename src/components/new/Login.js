import React, {Component} from 'react'
import './../../css/New/slider.css'
import axios from 'axios';
import {API_ROOT} from "../../Config";
import Modal from "react-responsive-modal";
import Signup from "./Signup";

const LOGIN_API = 'users/login/';

export default class Login extends Component{
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        let storageToken=localStorage.getItem('Token');
        // if(storageToken!=null){
        //     window.location.href='/rangkshetra/user/dashboard';
        // }
    }
    handleUsernameChange(e){
        this.setState({username: e.target.value });
    }
    handlePwdChange(e){
        this.setState({password: e.target.value });
    }
    handleSubmit(){
        axios
            .post(
                API_ROOT+LOGIN_API,
                {
                    username: this.state.username,
                    password: this.state.password,
                }
            )
            .then(
                response =>
                {
                    // window.location.href = '/rangkshetra/user/dashboard';
                    // localStorage.setItem('Token', response.data.token );
                }
            )
            .catch(
                error =>
                {
                    alert(error);
                }
            )
    }
    render(){
        const { open } = this.state;
        return(
                <div className="loginContainer">

                    {/*<label htmlFor="Email Id" ><b>Email</b></label>*/}
                   <i className="fa fa-user"/> <input onChange={this.handleUsernameChange} type="text" placeholder="Enter Email" name="email" required/>
                    {/*<label><b>Password</b></label>*/}
                    <i className="fa fa-lock"/> <input onChange={this.handlePwdChange} type="password" placeholder="Enter Password" name="psw" required/>
                    <button onClick={this.handleSubmit} type="submit" className="loginBtn">Login</button>
                    <br/>
                    <p align="center"> <span >
                    <button onClick={this.onOpenModal}>create here</button>
                    <Modal open={open} onClose={this.onCloseModal} center>

                    </Modal>
                </span></p>
                </div>
        )
    }
}