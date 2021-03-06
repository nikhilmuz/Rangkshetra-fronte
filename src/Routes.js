import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthRoute } from 'react-router-auth';
import Userpage from './components/Userpage'
import Landing from "./pages/Landing";
import VideoHome from "./pages/new/VideoHome"
import {PageNotFound} from "./pages/404";
import LandingTopNav from "./components/LandingTopNav";
import NewLanding from "./pages/new1/NewLanding"

const isLoggedIn = !(localStorage.getItem('Token') == null || localStorage.getItem('Token') === "");

export default class Routes extends Component{
    render(){
        return (
            <div>
            {/*<LandingTopNav authenticated={isLoggedIn}/>*/}
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={NewLanding} />
                <Route exact path='/Landing' component={() => (<Landing authenticated={isLoggedIn} />)}/>
                <AuthRoute authenticated={isLoggedIn} redirectTo='/' path='/user/dashboard' component={()=>(<Userpage page="Dashboard"/>)} />
                <AuthRoute authenticated={isLoggedIn} redirectTo='/' path='/user/upload' component={()=>(<Userpage page="Upload"/>)} />
                {/*<Route exact path='/videoHome' component={VideoHome} />*/}
                <Route path='*' component={PageNotFound} />
            </Switch>
            </BrowserRouter>
        </div>
        )
    }
}