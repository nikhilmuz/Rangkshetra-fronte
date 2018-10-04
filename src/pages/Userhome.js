import React,{Component} from 'react'
import './../css/userhome.css'
import ArtCard from "../components/ArtCard";


export default class Userhome extends Component {
    render() {
        return (
            <div>
            <div className="responsive">
                <div className="gallery">
                    <div className="caption">caption of the image </div>
                    <a target="_blank" href="">
                        <img src="" alt="" width="600" height="400"/>
                    </a>

                </div>
            </div>
                <div className="responsive">
                    <div className="gallery">
                        <div className="caption">caption of the image </div>
                        <a target="_blank" href="">
                            <img src="" alt="" width="600" height="400"/>
                        </a>

                    </div>
                </div>

                <div className="responsive">
                    <div className="gallery">
                        <div className="caption">caption of the image </div>
                        <a target="_blank" href="">
                            <img src="" alt="" width="600" height="400"/>
                        </a>

                    </div>
                </div>

            </div>
        )
    }
}

