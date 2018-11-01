import React,{ Component, Fragment } from 'react'
import landingComic from '../../css/New/landingComic.css'
import Horror from "./Horror";


function Product(props){

    switch(props.product) {
        case 1:
            return <div>1</div>;
        case 2:
            return <div>2</div>;
        case 3:
            return <div>3</div>;
        case 4:
            return <div>4</div>;
        case 5:
            return <div>5</div>;
        case 6:
            return <div>6</div>;
    }
}

export default class LandingComic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_product: 1,
        };

        // this.state = {
        //     options: [
        //         {
        //             name: 'language'
        //         },
        //         {
        //             name: 'A',
        //             value: 'a',
        //         },
        //         {
        //             name: 'B',
        //             value: 'b',
        //         },
        //         {
        //             name: 'C',
        //             value: 'c',
        //         },
        //     ],
        //     value: '?',
        // };
        this.selectFirst = this.selectFirst.bind(this);
        this.selectSecond = this.selectSecond.bind(this);
        this.selectThird = this.selectThird.bind(this);
        this.selectFourth = this.selectFourth.bind(this);
        this.selectFifth = this.selectFifth.bind(this);
        this.selectSixth = this.selectSixth.bind(this);
    }
    onLeave(origin, destination, direction) {
        // arguments are mapped in order of fullpage.js callback arguments
        // do something with the event
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    selectFirst(){
        this.setState({active_product : 1})
    }
    selectSecond(){
        this.setState({active_product : 2})
    }
    selectThird(){
        this.setState({active_product : 3})
    }
    selectFourth(){
        this.setState({active_product : 4})
    }
    selectFifth(){
        this.setState({active_product : 5})
    }
    selectSixth(){
        this.setState({active_product : 6})
    }

    render() {
        // const { options, value } = this.state;
        return (
            <div  style={{ paddingTop:'50px'}}>
                <h1 style={{ textAlign:'center', position:'sticky'}}> Comics</h1>

                <div className="language">
                    <button className="langdropbtn"><i className="fa fa-angle-double-down"/> language<i className="fa fa-arrow-down"/></button>
                    <div className="language-content">
                        <ul>
                            <li onClick={this.selectFirst}>Hindi</li>
                              <li onClick={this.selectSecond}>English</li>
                             <li onClick={this.selectThird} >Marathi</li>
                              <li onClick={this.selectFourth}>Telugu</li>
                             <li onClick={this.selectFifth}>Bengali</li>
                            <li onClick={this.selectSixth} >Kannada</li>
                        </ul>

                    </div>

                </div>
                <div className="language">
                    <button className="langdropbtn"><i className="fa fa-language"/> language<i className="fa fa-arrow-down"/></button>
                    <div className="language-content">
                        <ul>
                            <li onClick={this.selectFirst}>Hindi</li>
                              <li onClick={this.selectSecond}>English</li>
                             <li onClick={this.selectThird} >Marathi</li>
                              <li onClick={this.selectFourth}>Telugu</li>
                             <li onClick={this.selectFifth}>Bengali</li>
                            <li onClick={this.selectSixth} >Kannada</li>
                        </ul>
                    </div>
                </div>
                <Product product={this.state.active_product}/>

            </div>
        )
    }
}

