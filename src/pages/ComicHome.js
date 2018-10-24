import React,{Component} from 'react'
import {Tabs,Tab} from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles'

function Product(props){
    switch(props.product){
        case 0:
            return;
        case 1:
            return ;
        case 2:
            return ;
        case 3:
            return ;

        default:

    }
}
export default class ComicHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active_product: 0,
        };
        this.handleProductChange = this.handleProductChange.bind(this);
    }
    handleProductChange(event, value){
        this.setState({active_product : value})
    }

    getStyles(){
        return {
            tabs: {
            },
            tab: {

                indicatorColor:'secondary',

                textColor:'#ffffff',
                textTransform: 'unset',
            }
        }
    }
    render() {
        return (
            <div>
            <div>
                <Tabs
                    fullWidth value={this.state.active_product}
                      onChange={this.handleProductChange}
                        indicatorColor='secondary'
                >
                    <Tab inkBarStyle={{ background: "#000", height: "5px", marginTop: "-5px" }} label="featured"/>
                    <Tab style={{color:'#ffffff'}} label="language"/>
                    <Tab style={{color:'#ffffff'}} label="genre"/>
                    <Tab style={{color:'#ffffff'}} label="featured"/>
                    {/*<Product product={this.state.active_product}/>*/}
                </Tabs>
            </div>




            </div>
        )
    }
}

