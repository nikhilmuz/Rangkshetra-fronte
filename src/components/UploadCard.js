import React, {Component} from "react";
import "../css/feed.css"
import axios from "axios";
import {API_ROOT} from "../Config";

const DELETE_API = 'arts/delete/';

export default class UploadCard extends Component{
    handleDelete(e){
        const payload = new FormData();
        payload.append('id', e.target.value);
        axios
            .post(
                API_ROOT+DELETE_API,
                payload,
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('Token')
                    }
                },
            )
            .then(
                response =>
                {
                    window.location.reload();
                }
            )
            .catch(
                error =>
                {
                    alert(error);
                }
            );
    }
    render(){
        return(
            <div className="feedBox">
                <h3>{this.props.name}</h3>
                <p>{this.props.caption}</p>
                <img alt={this.props.caption} className='image' src={this.props.img} />
                <br/>
                <button type='submit' className='likebutton'><i className='fa fa-heart'></i> {this.props.likes} likes</button>&nbsp;
                <button onClick={this.handleDelete} value={this.props.id} className='deletebutton'><i className='fa fa-trash-o'></i> Delete</button>
            </div>
        )
    }
}