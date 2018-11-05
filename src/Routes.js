import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthRoute } from 'react-router-auth';
import Contact from "./pages/rangkshetra/Contact";
import Userpage from './components/Userpage'
import Setting from "./components/Setting";
import PasswordChange from "./pages/rangkshetra/PasswordChange";
import Landing from "./pages/new/Landing";
import VideoHome from "./pages/new/VideoHome"
import {PageNotFound} from "./pages/404";
import LandingTopNav from "./components/new/LandingTopNav";

const isLoggedIn = !(localStorage.getItem('Token') == null || localStorage.getItem('Token') === "");

export default class Routes extends Component{
    render(){
        return (
            <div>
            <LandingTopNav authenticated={isLoggedIn}/>
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={() => (<Landing authenticated={isLoggedIn} />)}/>
                <AuthRoute authenticated={isLoggedIn} redirectTo='/' path='/user/dashboard' component={()=>(<Userpage page="Dashboard"/>)} />
                <AuthRoute authenticated={isLoggedIn} redirectTo='/' path='/user/upload' component={()=>(<Userpage page="Upload"/>)} />
                {/*<Route exact path='/videoHome' component={VideoHome} />*/}
                {/*<Route path='/contact' component={Contact} />*/}
                {/*<Route path='/user/setting' component={Setting} />*/}
                {/*<Route path='/user/password' component={PasswordChange} />*/}
                <Route path='*' component={PageNotFound} />
            </Switch>
            </BrowserRouter>
        </div>
        )
    }
}