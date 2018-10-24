import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import blue from '@material-ui/core/colors'


const theme=createMuiTheme({
    palette:{
        primary: blue,
        secondary:{
            main: '#2962FF',
            light:'#90CAF9',
            dark:'#1E88E5'
        }
    },
    type: 'dark'
});n

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'));

