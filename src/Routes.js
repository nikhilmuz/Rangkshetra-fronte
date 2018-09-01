import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import {BrowserRouter} from 'react-router-dom'

export default class Routes extends Component{
    render(){
        return (
            <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
            </BrowserRouter>
        )
    }
}