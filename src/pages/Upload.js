import React,{Component} from 'react'
import './../css/upload.css'
import DashboardSidebar from './../components/DashboardSidebar'
import Footer from './../components/Footer'
import DropToUpload from 'react-drop-to-upload';
import DashboardTitlebar from "../components/DashboardTitlebar"

import axios from 'axios';
import {API_ROOT} from "../Config";

const UPLOAD_API = 'users/myuploads/';

export default class Upload extends Component{
    constructor(props) {
        super(props);
        this.state = {
            caption: '',
            file: '',
    };
        this.handleCaptionChange = this.handleCaptionChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleCaptionChange(e){
        this.setState({caption: e.target.value})
    }
    handleUpload(){
        axios.get('');
    }
    handleDrop(files) {
        var data = new FormData();

        files.forEach((file, index) => {
            data.append('file' + index, file);
        });
    }
    render(){
        return(
            <div>
                <DashboardTitlebar/>
                <DashboardSidebar/>
                <div className = "content-wrapper">
                <div className = "content">
                    <DropToUpload
                        onDrop={ this.handleDrop }>
                        <p id="filedrag" style={{ textAlign: 'center' , }}>
                            <i className = "fa fa-upload"/>  Drop file(s) here to upload!</p>
                    </DropToUpload>
                    <p>OR  <input type="file" name="pic" accept="image/*"/> </p>



                <br/>
                    <p>Caption: <input onChange={this.handleCaptionChange} type="text" name="caption" /></p>
                    <button className="uploadbtn" onClick={this.handleUpload} type="upload">Upload</button>
                </div>
            </div>
                <Footer/>
            </div>

        );
    }
}
