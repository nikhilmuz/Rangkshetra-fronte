import React,{ Component, Fragment } from 'react'
import landingComic from '../css/New/landingComic.css'
import Login from "../components/ModalForm";
import CardComponent from "../components/ComicCard";
import { Row, Col } from 'reactstrap';
import Grid from "@material-ui/core/Grid";
import InfiniteScroll from "react-infinite-scroller";
import {API_ROOT} from "../Config";
import axios from "axios";
import FeaturedComics from "../components/FeaturedComics";

const COMIC_FEED_API = 'comics/list/';

export default class LandingComic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected_lang: 'ALL',
            selected_lang_name : 'Language',
            comics: [],
            more: true,
            next: null,
        };
        this.loadMore = this.loadMore.bind(this);
        this.handleLangChange = this.handleLangChange.bind(this);
    }
    handleLangChange(lang,lang_name){
        this.setState({
            selected_lang : lang,
            selected_lang_name : lang_name,
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
                    key={i}
                    cover={comic.cover}
                    title={comic.title}
                    desc={comic.episodes}
                    link={comic.link}
                />
            );
            return null;
        });
        return (
            <div>
                <Grid container xs={12} sm={12}>
                    <Grid item xs={2} sm={12} />
                    <Grid item xs={8} sm={12} >
                        <h1 style={{ textAlign:'center', position:'sticky'}}> Comics</h1>
                    </Grid>
                    <Grid item xs={2} sm={12} />
                </Grid>
                <Grid container xs={12} sm={12}>
                <FeaturedComics lang_name="हिंदी" lang_code="HIN"/><br/>
                <FeaturedComics lang_name="मराठी" lang_code="MAR"/><br/>
                <FeaturedComics lang_name="తెలుగు" lang_code="TEL"/><br/>
                <FeaturedComics lang_name="বাঙালি" lang_code="BEN"/><br/>
                <FeaturedComics lang_name="English" lang_code="ENG"/><br/>
                <FeaturedComics lang_name="ಕನ್ನಡ" lang_code="KAN"/>
                </Grid>
                    {/*<div className="language" id="#DivForHoverItem">*/}
                        {/*<button className="langdropbtn">*/}
                            {/*<i className="fa fa-language"/>*/}
                            {/*Hindi*/}
                            {/*<div id="hiddenArrow">*/}
                                {/*<i className="fa fa-angle-double-down"/>*/}
                            {/*</div>*/}
                        {/*</button>*/}
                        {/*<div className="language-content">*/}
                        {/*<a onClick={() => this.handleLangChange("HIN","हिंदी")}>हिंदी</a>*/}
                        {/*<a onClick={() => this.handleLangChange("ENG","English")}>English</a>*/}
                        {/*<a onClick={() => this.handleLangChange("MAR","मराठी")}>मराठी</a>*/}
                        {/*<a onClick={() => this.handleLangChange("TEL","తెలుగు")}>తెలుగు</a>*/}
                        {/*<a onClick={() => this.handleLangChange("BEN","বাঙালি")}>বাঙালি</a>*/}
                        {/*<a onClick={() => this.handleLangChange("KAN","ಕನ್ನಡ")}>ಕನ್ನಡ</a>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*<InfiniteScroll*/}
                    {/*style={{width:'100%'}}*/}
                    {/*className="text-center"*/}
                    {/*pageStart={0}*/}
                    {/*loadMore={this.loadMore}*/}
                    {/*hasMore={this.state.more}*/}
                    {/*loader={<div className="loader" key={0}>Loading ...</div>}*/}
                    {/*useWindow={false}*/}
                {/*>*/}
                    {/*<Grid container xs={12} sm={12} spacing={24} style={{margin:'0%', paddingLeft:'5%', paddingRight:'5%'}}>*/}
                        {/*{items}*/}
                    {/*</Grid>*/}
                {/*</InfiniteScroll>*/}
            </div>
        )
    }
    loadMore(){
        let url;
        if(this.state.next==null){
            if(this.state.selected_lang==="ALL"){
                url=API_ROOT+COMIC_FEED_API;
            }
            else {
                url=API_ROOT+COMIC_FEED_API+"?lang="+this.state.selected_lang;
            }
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
