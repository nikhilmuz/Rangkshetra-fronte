import React,{Component} from 'react'
import '../../css/New/comicnav.css'
import ComicLanding from "./ComicLanding";


export default class ComicNav extends Component {

    render() {
        return (
            <div>
            <div className="comicNavBox">
                        <ul>
                            <li><a>New release</a></li>
                            <li><a>genre</a></li>
                            <li><a>Popular</a></li>
                        </ul>

                <div className="comicCard">
                </div>

            </div>   </div>
        )
    }
}

