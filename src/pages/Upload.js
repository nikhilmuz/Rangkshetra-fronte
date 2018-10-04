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
    }
    function handleUpload(){
            // var payload = {
            //     caption: this.state.Caption,
            //
            // };
        }
        // axios
        //     .post
        //             (API_ROOT+UPLOAD_API,)
        //     .then((response)  => {
        //     console.log(response);
        //     window.location.href = '/user/dashboard';
        // })




    }
    handleDrop(files) {
        var data = new FormData();

        files.forEach((file, index) => {
            data.append('file' + index, file);
        });

        //fetch('/upload', {
          //  method: 'POST',
            //body: data
        //});
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
                            <i className = "fa fa-download"/>  Drop file(s) here to upload!</p>
                    </DropToUpload>
                    <p>OR  <input type="file" name="pic" accept="image/*"/> </p>



                <br/>
                    <p>CAPTION: <input type="text" name="caption" /></p>

                    <button className="uploadbtn" onClick={this.handleUpload}type="upload">Upload</button>
                </div>
            </div>
                <Footer/>
            </div>

        );
    }
}
