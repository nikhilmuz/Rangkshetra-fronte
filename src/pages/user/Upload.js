import React,{Component} from 'react'
import '../../css/rangkshetra/upload.css'
import Dropzone from 'react-dropzone';
import axios from 'axios';

import {API_ROOT} from "../../Config";
import LandingTopNav from "../../components/new/LandingTopNav";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
const UPLOAD_API = 'comics/upload/';

export default class Upload extends Component{
    constructor(props) {
        super(props);
        this.state = {
            caption: '',
            comics: [],
        };
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }
    handleCaptionChange(e){
        this.setState({caption: e.target.value})
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
        payload.append('caption', this.state.caption);
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
                    console.log(response);
                    alert('success')
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
                        <p>Insert Caption Below: <input onChange={this.handleCaptionChange} type="text" name="caption" /></p>
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
