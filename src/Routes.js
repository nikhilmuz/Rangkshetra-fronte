import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Contact from "./pages/Contact";
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Upload from './pages/Upload'
import About from './pages/About'
import Setting from "./components/Setting";
import PasswordChange from "./pages/PasswordChange";

export default class Routes extends Component{
    render(){
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/user/dashboard' component={Dashboard} />
                <Route path='/user/upload' component={Upload} />
                <Route path='/user/setting' component={Setting} />
                <Route path='/about' component={About} />
                <Route path='/settings/pwdchange' component={PasswordChange} />
            </Switch>
            </BrowserRouter>
        )
    }
}