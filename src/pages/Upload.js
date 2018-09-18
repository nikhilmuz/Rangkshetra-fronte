import React,{Component} from 'react'
import './../css/upload.css'
import DashboardSidebar from './../components/DashboardSidebar'
import Footer from './../components/Footer'
import DropToUpload from 'react-drop-to-upload';

export default class Upload extends Component{
    handleDrop(files) {
        var data = new FormData();

        files.forEach((file, index) => {
            data.append('file' + index, file);
        });

        fetch('/upload', {
            method: 'POST',
            body: data
        });
    }
    render(){
        return(
            <div>
                <DashboardSidebar/>
                <div className = "content-wrapper">
                <div className = "content">
                    <DropToUpload
                        onDrop={ this.handleDrop }
                    >
                        Drop file here to upload
                    </DropToUpload>
                </div>
            </div>
                <Footer/>
            </div>
        );
    }
}