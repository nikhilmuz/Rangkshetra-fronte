import React, {Component} from "react";


export default class ArtCard extends Component{
    render(){
        return(
            <div className="feedBox">
                <h3>{this.props.name}</h3>
                <p>{this.props.caption}</p>
                <img alt={this.props.caption} className='image' src={this.props.img} />
                <br/>
                {/*<button onClick={this.handleLike} type='submit' className='likebutton'>*/}
                    {/*<i className='fa fa-heart'/> {this.state.likes} likes</button>*/}
            </div>
        )
    }
}