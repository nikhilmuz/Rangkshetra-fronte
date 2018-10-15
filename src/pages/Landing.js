import React, {Component} from 'react'
import ReactFullpage from '@fullpage/react-fullpage';
import 'fullpage.js/vendors/scrolloverflow'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";

/**
 * @return {null}
 */
function Product(props){
    switch(props.product){
        case 0:
            return <div>First</div>;
        case 1:
            return <div>Second</div>;
        case 2:
            return <div>Third</div>;
        default:
            return null;
    }
}

export default class Landing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            active_product: 0,
        };
        this.handleProductChange = this.handleProductChange.bind(this);
    }
    onLeave(origin, destination, direction) {
        // arguments are mapped in order of fullpage.js callback arguments
        // do something with the event
    }
    handleProductChange(event, value){
        this.setState({active_product : value})
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
                                <AppBar position="relative">
                                    <Tabs fullWidth value={this.state.active_product} onChange={this.handleProductChange}>
                                        <Tab label="Daily Comics" />
                                        <Tab label="Item Two" />
                                        <Tab label="RangKshetra"/>
                                    </Tabs>
                                </AppBar>
                                <Product product={this.state.active_product}/>
                            </div>
                        </ReactFullpage.Wrapper>
                    );
                }}
            />
        );
    }
}