import React, {Component} from "react";
import tbs_logo from './../../assets/tbs_logo.png'
import Modal from "react-responsive-modal";
import Login from "./Login";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav, Navbar, NavbarBrand,
    NavbarToggler,
    UncontrolledDropdown
} from "reactstrap";

export default class LandingTopNav extends Component {
    state = {
        open: false,
        isOpen: false,
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
            <Navbar
                style={{backgroundColor:'#19215F', zIndex:100}}
                expand="md"
                light={true}
                fixed={true}
            >
                <NavbarBrand href="/">
                    <img style={{width: '10%', paddingLeft:'10px'}} src={tbs_logo} alt="TBS planet" />
                    <span style={{color:'white'}} > TBS Planet Comics</span>
                </NavbarBrand>
                <NavbarToggler onClick={()=>{this.state.isOpen?this.setState({isOpen:false}):this.setState({isOpen:true})}} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    {
    this.props.authenticated ? <UncontrolledDropdown nav inNavbar>
        <DropdownToggle style={{color:'white'}} nav caret>
                  <span>
                    Hello, {localStorage.getItem('short_name')}
                  </span>
        </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem href="/user/dashboard">
                My Account
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="#">
                <a onClick={this.logout}>Logout</a>
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
                        : <li style={{color:'white'}}><a style={{color:'inherit'}} href="#" onClick={this.onOpenModal}>Login / Sign up</a>
        <Modal open={open} onClose={this.onCloseModal} center>
            <Login/>
        </Modal></li>
}
                    </Nav></Collapse></Navbar>
        )
    }
}