import React,{ Component, Fragment } from 'react'
import landingComic from './../../css/New/landingComic.css'
import Login from "../../components/new/Login";
import CardComponent from "../../components/new/ComicCard";
import { Row, Col } from 'reactstrap';
import Grid from "@material-ui/core/Grid";
import InfiniteScroll from "react-infinite-scroller";
import ArtCard from "../../components/ArtCard";
import {API_ROOT} from "../../Config";
import axios from "axios";

const COMIC_FEED_API = 'comics/list/';

export default class LandingComic extends Component {


    constructor(props) {
        super(props);
        this.state = {
            selected_lang: 'HIN',
            comics: [],
            more: true,
            next: null,
        };
        this.loadMore = this.loadMore.bind(this);
        this.handleLangChange = this.handleLangChange.bind(this);
    }
    handleLangChange(lang){
        this.setState({
            selected_lang : lang,
            comics: [],
            more: true,
            url: null,
        })
    }

    render() {
        let items = [];
        this.state.comics.map((comic, i) => {
            items.push(
                    <CardComponent
                        cover={comic.cover}
                        title={comic.title}
                        desc={comic.episodes}
                    />
            );
            return null;
        });
        return (
            <div  style={{ paddingTop:'50px'}}>
                <h1 style={{ textAlign:'center', position:'sticky'}}> Comics</h1>
                <div className="language" id="#DivForHoverItem">
                    <button className="langdropbtn">
                        <i className="fa fa-language"/> Language
                        <div id="hiddenArrow">
                        <i className="fa fa-angle-double-down"/>
                        </div>
                    </button>
                    <div className="language-content">
                            <a onClick={() => this.handleLangChange("HIN")}>Hindi</a>
                            <a onClick={() => this.handleLangChange("ENG")}>English</a>
                            <a onClick={() => this.handleLangChange("MAR")}>Marathi</a>
                            <a onClick={() => this.handleLangChange("TEL")}>Telugu</a>
                            <a onClick={() => this.handleLangChange("BEN")}>Bengali</a>
                            <a onClick={() => this.handleLangChange("KAN")}>Kannada</a>
                    </div>
                </div>
                <Grid container spacing={24} style={{margin:'0%'}}>
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
                </Grid>
            </div>
        )
    }
    loadMore(){
        let url;
        if(this.state.next==null){
            url=API_ROOT+COMIC_FEED_API+"?lang="+this.state.selected_lang;
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
                    response.data.results.map((result) => {
                        this.state.comics.push(result);
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
}

