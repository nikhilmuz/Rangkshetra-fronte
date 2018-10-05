import React,{Component} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ArtCard from "../components/ArtCard";
import InfiniteScroll from 'react-infinite-scroller';
import axios from "axios";
import {API_ROOT} from "../Config";

const FEED_API = 'arts/feeds/';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            arts: [],
            more: true,
            next: null,
        };
        this.loadMore = this.loadMore.bind(this);
    }
    loadMore(){
        let url;
        if(this.state.next==null){
            url=API_ROOT+FEED_API;
        }
        else {
            url=this.state.next;
        }
        axios
            .get(
                url,
            )
            .then(
                response =>
                {
                    if(response.data.next==null){
                        this.setState({more: false});
                    }
                    else {
                        this.setState({next: response.data.next});
                    }
                    response.data.results.forEach(result=>{
                        this.state.arts.push(result);
                    });
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
        var items = [];
        this.state.arts.map((art, i) => {
            items.push(
                <ArtCard name={art.uploader} caption={art.caption} img={art.art} />
            );
        });
        return(
            <div>
                <NavBar/>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMore}
                    hasMore={this.state.more}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {items}
                </InfiniteScroll>
                <Footer/>
            </div>
        )
    }
}