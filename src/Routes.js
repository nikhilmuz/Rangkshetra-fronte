import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthRoute } from 'react-router-auth';
import Home from './pages/rangkshetra/Home';
import Contact from "./pages/rangkshetra/Contact";
import Login from './pages/rangkshetra/Login'
import Dashboard from './pages/new/Dashboard'
import Dashboard1 from './pages/rangkshetra/Dashboard1'
import Upload1 from './pages/rangkshetra/Upload1'
import About from './pages/rangkshetra/About'
import Setting from "./components/Setting";
import PasswordChange from "./pages/rangkshetra/PasswordChange";
import Landing from "./pages/new/Landing";
import ComicLanding from "./pages/new/ComicLanding";
import ComicHome from "./pages/new/ComicHome"
import VideoHome from "./pages/new/VideoHome"
import Upload from "./pages/new/Upload";
import {PageNotFound} from "./pages/404";

const isLoggedIn = !(localStorage.getItem('Token') == null || localStorage.getItem('Token') === "");

export default class Routes extends Component{
    render(){
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={() => (<Landing authenticated={isLoggedIn} />)}/>
                <Route exact path='/user/upload' component={Upload} />
                <Route exact path='/user/dashboard' component={Dashboard} />
                <Route exact path='/videoHome' component={VideoHome} />
                <Route exact path='/comicHome' component={ComicHome} />
                <Route exact path='/comic' component={ComicLanding} />
                <Route path='/contact' component={Contact} />
                <Route path='/user/setting' component={Setting} />
                <Route path='/user/password' component={PasswordChange} />
                <Route exact path='/rangkshetra/' component={Home} />
                <Route path='/rangkshetra/user/dashboard' component={Dashboard1} />
                <Route path='/rangkshetra/user/upload' component={Upload1} />
                <Route path='/rangkshetra/about' component={About} />
                <Route path='*' component={PageNotFound} />
            </Switch>
            </BrowserRouter>
        )
    }
}