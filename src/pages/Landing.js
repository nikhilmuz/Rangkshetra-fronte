import React, {Component} from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow'

function Product(props){
    switch(props.product){
        case 1:
            return <div>First</div>;
        case 2:
            return <div>Second</div>;
        case 3:
            return <div>Third</div>;
    }
}

export default class Landing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active_product: 1,
        };
        this.selectFirst = this.selectFirst.bind(this);
        this.selectSecond = this.selectSecond.bind(this);
        this.selectThird = this.selectThird.bind(this);
    }
    onLeave(origin, destination, direction) {
        // arguments are mapped in order of fullpage.js callback arguments
        // do something with the event
    }
    selectFirst(){
        this.setState({active_product : 1})
    }
    selectSecond(){
        this.setState({active_product : 2})
    }
    selectThird(){
        this.setState({active_product : 3})
    }
    render(){
        return(
            <ReactFullpage
                anchors={['', 'products']}
                sectionsColor={['#282c34', '#ff5f45']}
                onLeave={this.onLeave.bind(this)}
                render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <div className="section">
                                <h3>Section 1</h3>
                            </div>
                            <div className="section">
                                <div onClick={this.selectFirst}>Select First</div>
                                <div onClick={this.selectSecond}>Select Second</div>
                                <div onClick={this.selectThird}>Select Third</div>
                                <Product product={this.state.active_product}/>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}