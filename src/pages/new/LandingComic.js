import React,{ Component, Fragment } from 'react'
import landingComic from './../../css/New/landingComic.css'
import Login from "../../components/new/Login";
import CardComponent from "../../components/new/ComicCard";
import { Row, Col } from 'reactstrap';
import Grid from "@material-ui/core/Grid";

function Product(props){

    switch(props.product) {
        case 'HIN':
            return <div>HIN</div>;
        case 'ENG':
            return <div>ENG</div>;
        case 'MAR':
            return <div>MAR</div>;
        case 'TEL':
            return <div>TEL</div>;
        case 'BEN':
            return <div>BEN</div>;
        case 'KAN':
            return <div>KAN</div>;
    }
}

export default class LandingComic extends Component {


    constructor(props) {
        super(props);
        this.state = {
            active_product: 'HIN',
        };
        this.selectFirst = this.selectFirst.bind(this);
        this.selectSecond = this.selectSecond.bind(this);
        this.selectThird = this.selectThird.bind(this);
        this.selectFourth = this.selectFourth.bind(this);
        this.selectFifth = this.selectFifth.bind(this);
        this.selectSixth = this.selectSixth.bind(this);
    }
    selectFirst(){
        this.setState({active_product : 'HIN'})
    }
    selectSecond(){
        this.setState({active_product : 'ENG'})
    }
    selectThird(){
        this.setState({active_product : 'MAR'})
    }
    selectFourth(){
        this.setState({active_product : 'TEL'})
    }
    selectFifth(){
        this.setState({active_product : 'BEN'})
    }
    selectSixth(){
        this.setState({active_product : 'KAN'})
    }

    render() {
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
                            <a onClick={this.selectFirst}>Hindi</a>
                            <a onClick={this.selectSecond}>English</a>
                            <a onClick={this.selectThird}>Marathi</a>
                            <a onClick={this.selectFourth}>Telugu</a>
                            <a onClick={this.selectFifth}>Bengali</a>
                            <a onClick={this.selectSixth}>Kannada</a>
                    </div>
                </div>
                <Product className="product"
                    product={this.state.active_product}
                />
                <Grid container spacing={24} style={{margin:'0%'}}>
                    <Grid item xs={6} sm={2} >
                        <CardComponent
                            cover="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fno-limit.info%2Ftravel%2Fservices%2Fwp-content%2Fuploads%2F2014%2F12%2Fswitzerland_1.jpg&f=1"
                            title="Ved"
                            desc="Lorem Ipsum"
                        />
                    </Grid>
                    <Grid item xs={6} sm={2} >
                        <CardComponent
                            cover="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fno-limit.info%2Ftravel%2Fservices%2Fwp-content%2Fuploads%2F2014%2F12%2Fswitzerland_1.jpg&f=1"
                            title="Ved"
                            desc="Lorem Ipsum"
                        />
                    </Grid>
                    <Grid item xs={6} sm={2} >
                        <CardComponent
                            cover="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fno-limit.info%2Ftravel%2Fservices%2Fwp-content%2Fuploads%2F2014%2F12%2Fswitzerland_1.jpg&f=1"
                            title="Ved"
                            desc="Lorem Ipsum"
                        />
                    </Grid>
                    <Grid item xs={6} sm={2} >
                        <CardComponent
                            cover="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fno-limit.info%2Ftravel%2Fservices%2Fwp-content%2Fuploads%2F2014%2F12%2Fswitzerland_1.jpg&f=1"
                            title="Ved"
                            desc="Lorem Ipsum"
                        />
                    </Grid>
                    <Grid item xs={6} sm={2} >
                        <CardComponent
                            cover="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fno-limit.info%2Ftravel%2Fservices%2Fwp-content%2Fuploads%2F2014%2F12%2Fswitzerland_1.jpg&f=1"
                            title="Ved"
                            desc="Lorem Ipsum"
                        />
                    </Grid>
                    <Grid item xs={6} sm={2} >
                        <CardComponent
                            cover="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fno-limit.info%2Ftravel%2Fservices%2Fwp-content%2Fuploads%2F2014%2F12%2Fswitzerland_1.jpg&f=1"
                            title="Ved"
                            desc="Lorem Ipsum"
                        />
                    </Grid>
                    <Grid item xs={6} sm={2} >
                        <CardComponent
                            cover="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fno-limit.info%2Ftravel%2Fservices%2Fwp-content%2Fuploads%2F2014%2F12%2Fswitzerland_1.jpg&f=1"
                            title="Ved"
                            desc="Lorem Ipsum"
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

