import React,{Component} from 'react'
import '../../css/rangkshetra/upload.css'
import Dropzone from 'react-dropzone';
import axios from 'axios';

import {API_ROOT} from "../../Config";
import LandingTopNav from "../../components/new/LandingTopNav";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
const UPLOAD_API = 'comics/upload/';

export default class Upload extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            language: '',
            genre: '',
            comics: [],
        };
        this.handleUpload = this.handleUpload.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }
    handleDrop(files) {
        var file = files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            console.log(event.target.result);
            this.setState({comics: files[0]});
        };
        reader.readAsDataURL(file);
    }
    handleUpload(){
        const payload = new FormData();
        payload.append('title', this.state.title);
        payload.append('desc', this.state.desc);
        payload.append('genre', this.state.genre);
        payload.append('language', this.state.language);
        payload.append('comics', this.state.comics);
        axios
            .post(
                API_ROOT+UPLOAD_API,
                payload,
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('Token'),
                        'content-type': 'multipart/form-data',
                    }
                }
            )
            .then(
                response =>
                {
                    alert("Comics Successfully Submitted for Review");
                    window.location.href="/user/dashboard";
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
        return(
            <div>
                <div className = "content-wrapper">
                    <div className = "content">
                        <Dropzone
                            multiple={false}
                            accept="image/*"
                            onDrop={this.handleDrop}
                            style={{width: '100%'}}
                        >
                            <p id='filedrag' style={{ textAlign: 'center' }}> <i className = "fa fa-upload"/>  Drop your comics here or click to upload!</p>
                        </Dropzone>
                        <br/>
                        <TextField
                            fullWidth={true}
                            id="title-input"
                            label="Title"
                            value={this.state.title}
                            onChange={(e)=>{this.setState({title: e.target.value})}}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            fullWidth={true}
                            id="desc-input"
                            label="Description"
                            placeholder="Description"
                            multiline
                            margin="normal"
                            value={this.state.desc}
                            onChange={(e)=>{this.setState({desc: e.target.value})}}
                        />
                        <br/>
                        <FormControl>
                            <InputLabel htmlFor="language-select">Language</InputLabel>
                            <Select
                                value={this.state.language}
                                onChange={(e)=>{this.setState({language: e.target.value})}}
                                inputProps={{
                                    name: 'language',
                                    id: 'language-select',
                                }}
                            >
                                <MenuItem value={'ENG'}>English</MenuItem>
                                <MenuItem value={'HIN'}>Hindi</MenuItem>
                                <MenuItem value={'TEL'}>Telugu</MenuItem>
                                <MenuItem value={'MAR'}>Marathi</MenuItem>
                                <MenuItem value={'BEN'}>Bengali</MenuItem>
                                <MenuItem value={'KAN'}>Kannada</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <FormControl>
                            <InputLabel htmlFor="genre-select">Genre</InputLabel>
                            <Select
                                value={this.state.genre}
                                onChange={(e)=>{this.setState({genre: e.target.value})}}
                                inputProps={{
                                    name: 'genre',
                                    id: 'genre-select',
                                }}
                            >
                                <MenuItem value={'SHR'}>Superhero Fantasy</MenuItem>
                                <MenuItem value={'HRR'}>Horror</MenuItem>
                                <MenuItem value={'HNM'}>History and Mythology</MenuItem>
                            </Select>
                        </FormControl>
                        <br/>
                        <br/>
                        <br/>
                        <Button onClick={this.handleUpload} variant="contained" color="default">
                            Upload
                            <CloudUploadIcon />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}
