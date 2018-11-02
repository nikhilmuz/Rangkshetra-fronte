import React,{Component} from 'react'
import '../../css/New/videoLanding.css'

export default class VideoLanding extends Component {

    render() {
        return (
            <div>
                <div className="videoContainer">

                    <div className="video">
                        <iframe src="https://player.vimeo.com/video/297460575" width="320" height="" frameBorder="0"
                                webkitallowfullscreen mozallowfullscreen allowFullScreen/>
                            <div className="text1">Video<br/>name</div>
                    </div>
                    <div className="video">
                        <iframe src="https://player.vimeo.com/video/297460312" width="320" height="" frameBorder="0"
                                webkitallowfullscreen mozallowfullscreen allowFullScreen/>
                        <div className="text1">Video<br/>name</div>
                    </div>
                    <div className="video">
                        <iframe src="https://player.vimeo.com/video/297460575" width="320" height="" frameBorder="0"
                                webkitallowfullscreen mozallowfullscreen allowFullScreen/>
                        <div className="text1">Video<br/>name</div>
                    </div>
                    <div className="video">
                        <iframe src="https://player.vimeo.com/video/297460312" width="320" height="" frameBorder="0"
                                webkitallowfullscreen mozallowfullscreen allowFullScreen/>
                        <div className="text1">Video<br/>name</div>
                    </div>
                </div>

                <a href="/videoHome" className="viewAll"> view all</a>
            </div>
        )
    }
}

