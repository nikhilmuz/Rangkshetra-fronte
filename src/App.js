import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import './Config'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
        <Routes/>
    );
  }
}