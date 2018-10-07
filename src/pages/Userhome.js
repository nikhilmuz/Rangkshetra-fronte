import React,{Component} from 'react'
import {API_ROOT} from "../Config";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import UploadCard from "../components/UploadCard";

const MY_UPLOADS_API = 'arts/myuploads/';

export default class Userhome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploads: [],
            more: true,
            next: null,
        };
        this.loadMore = this.loadMore.bind(this);
    }
    loadMore(){
        let url;
        if(this.state.next==null){
            url=API_ROOT+MY_UPLOADS_API;
        }
        else {
            url=this.state.next;
        }
        axios
            .get(
                url,
                {
                    headers: {
                        Authorization: 'Token ' + localStorage.getItem('Token')
                    }
                },
            )
            .then(
                response =>
                {
                    response.data.results.map((result) => {
                        this.state.uploads.push(result);
                        return null;
                    });
                    if(response.data.next==null){
                        this.setState({more: false});
                    }
                    else {
                        this.setState({next: response.data.next});
                    }
                }
            )
            .catch(
                error =>
                {
                    alert(error);
                }
            );
    }
    render() {
        let items = [];
        this.state.uploads.map((art, i) => {
            items.push(
                <UploadCard name={art.uploader} caption={art.caption} img={art.art} likes={art.likes} id={art.id} key={i} />
            );
            return null;
        });
        return(
                <div className='feed'>
                    <InfiniteScroll
                        className="text-center"
                        pageStart={0}
                        loadMore={this.loadMore}
                        hasMore={this.state.more}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                        useWindow={false}
                    >
                        {items}
                    </InfiniteScroll>
                </div>
        )
    }
}

