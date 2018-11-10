import React,{ Component, Fragment } from 'react'
import Login from "../components/ModalForm";
import CardComponent from "../components/ComicCard";
import { Row, Col } from 'reactstrap';
import Grid from "@material-ui/core/Grid";
import InfiniteScroll from "react-infinite-scroller";
import {API_ROOT} from "../Config";
import axios from "axios";

const COMIC_FEED_API = 'comics/list/';

export default class FeaturedComics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lang_code: this.props.lang_code,
            lang_name: this.props.lang_name,
            comics:[],
        };
        this.loadComics();
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
                    <button className="langdropbtn">
                        {this.state.lang_name}
                    </button>
                <br/>
                <Grid justify="space-evenly" container md={12} xs={12} sm={12} spacing={24}>
                    {items}
                </Grid>
            </div>
        )
    }

    loadComics(){
        let url=API_ROOT+COMIC_FEED_API+"?lang="+this.state.lang_code;
        axios
            .get(
                url,
            )
            .then(
                response =>
                {
                    response.data.results.map((result) => {
                        this.state.comics.push(result);
                    });
                    window.location.href="#";
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
