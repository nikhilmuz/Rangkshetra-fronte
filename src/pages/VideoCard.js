import React,{Component} from 'react'
import '../css/New/videocard.css'

export default class VideoCard extends Component {

    render() {
        return (
            <div>
                <div className="videoContainer">
                    <h3>{this.props.name}</h3>
                    <div className="video">
                        <iframe src="https://player.vimeo.com/video/295525907" width="320" height="" frameBorder="0"
                                allowFullScreen/>
                            <div className="text1">Video<br/>name</div>
                    </div>
                    <div className="video">
                        <iframe src="https://player.vimeo.com/video/295525907" width="320" height="" frameBorder="0"
                                allowFullScreen/>
                        <div className="text1">Video<br/>name</div>
                    </div>
                    <div className="video">
                        <iframe src="https://player.vimeo.com/video/295525907" width="320" height="" frameBorder="0"
                                allowFullScreen/>
                        <div className="text1">Video<br/>name</div>
                    </div>
                    <div className="video">
                        <iframe src="https://player.vimeo.com/video/295525907" width="320" height="" frameBorder="0"
                                allowFullScreen/>
                        <div className="text1">Video<br/>name</div>
                    </div>
                </div>
            </div>
        )
    }
}

