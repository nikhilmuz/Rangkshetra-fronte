import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/rangkshetra/Home'
import Contact from "./pages/rangkshetra/Contact";
import Login from './pages/rangkshetra/Login'
import Signup from './pages/rangkshetra/Signup'
import Dashboard from './pages/rangkshetra/Dashboard'
import Upload from './pages/rangkshetra/Upload'
import About from './pages/rangkshetra/About'
import Setting from "./components/Setting";
import PasswordChange from "./pages/rangkshetra/PasswordChange";
import Landing from "./pages/new/Landing";
import Slider from "./components/new/Slider";
import ComicLanding from "./pages/new/ComicLanding";
import ComicHome from "./pages/new/ComicHome"
import VideoHome from "./pages/new/VideoHome"
import ComicGenreNav from "./pages/new/ComicGenreNav";

export default class Routes extends Component{
    render(){
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path='/comicHome/genre' component={ComicGenreNav} />
                <Route exact path='/videoHome' component={VideoHome} />
                <Route exact path='/comicHome' component={ComicHome} />
                <Route exact path='/comic' component={ComicLanding} />
                <Route exact path='/' component={Landing} />
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/user/setting' component={Setting} />
                <Route path='/user/password' component={PasswordChange} />
                <Route exact path='/rangkshetra/' component={Home} />
                <Route path='/rangkshetra/user/dashboard' component={Dashboard} />
                <Route path='/rangkshetra/user/upload' component={Upload} />
                <Route path='/rangkshetra/about' component={About} />
            </Switch>
            </BrowserRouter>
        )
    }
}