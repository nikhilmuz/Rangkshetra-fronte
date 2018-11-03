import React,{Component} from 'react'
import '../../css/rangkshetra/upload.css'
import DashboardSidebar from './../../components/DashboardSidebar'
import Footer from './../../components/Footer'
import Dropzone from 'react-dropzone';
import DashboardTitlebar from "../../components/DashboardTitlebar"
import axios from 'axios';

import {API_ROOT} from "../../Config";
const UPLOAD_API = 'arts/upload/';

export default class Upload1 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            caption: '',
            art: [],
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
            this.setState({art: files[0]});
        };
        reader.readAsDataURL(file);
    }
    handleUpload(){
        const payload = new FormData();
        payload.append('caption', this.state.caption);
        payload.append('art', this.state.art);
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
                <DashboardTitlebar/>
                <DashboardSidebar/>
                <div className = "content-wrapper">
                <div className = "content">
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.handleDrop}
                        style={{width: '100%'}}
                    >
                        <p id='filedrag' style={{ textAlign: 'center' }}> <i className = "fa fa-upload"/>  Drop your art here or click to upload!</p>
                    </Dropzone>

                <br/>
                    <p>Insert Caption Below: <input onChange={this.handleCaptionChange} type="text" name="caption" /></p>
                    <button className="uploadbtn" onClick={this.handleUpload} type="upload">Upload</button>
                </div>
            </div>
                <Footer/>
            </div>

        );
    }
}
