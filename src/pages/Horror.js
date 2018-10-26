import React,{Component} from 'react'
import '../css/New/comicHorror.css'
import cover from './../assets/cover.jpg'

import cover1 from './../assets/cover1.jpg'
import cover2 from './../assets/cover2.jpg'
import cover3 from './../assets/cover3.jpg'

export default class Horror extends Component {


    render() {
        return (


    <div>
            <div className="genre">
                <span> <a  name="Horror">Horror</a></span>
                <div className="genreImageContainer">
                    <div className="genreImage">
                        <a><img src={cover} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="genreImage">
                        <a><img src={cover1} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="genreImage">
                        <a><img src={cover2} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="genreImage">
                        <a><img src={cover3} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="genreImage">
                        <a><img src={cover} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="genreImage">
                        <a><img src={cover1} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="genreImage">
                        <a><img src={cover2} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="genreImage">
                        <a><img src={cover3} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                </div>

        </div>
            <div className="genre">
        <span><a   name="superhero">superhero</a></span>
        <div className="genreImageContainer">
            <div className="genreImage">
                <a><img src={cover} />
                    <div className="text1">comic<br/>name</div></a>
            </div>
            <div className="genreImage">
                <a><img src={cover1} />
                    <div className="text1">comic<br/>name</div></a>
            </div>
            <div className="genreImage">
                <a><img src={cover2} />
                    <div className="text1">comic<br/>name</div></a>
            </div>
            <div className="genreImage">
                <a><img src={cover3} />
                    <div className="text1">comic<br/>name</div></a>
            </div>
            <div className="genreImage">
                <a><img src={cover} />
                    <div className="text1">comic<br/>name</div></a>
            </div>
            <div className="genreImage">
                <a><img src={cover1} />
                    <div className="text1">comic<br/>name</div></a>
            </div>
            <div className="genreImage">
                <a><img src={cover2} />
                    <div className="text1">comic<br/>name</div></a>
            </div>
            <div className="genreImage">
                <a><img src={cover3} />
                    <div className="text1">comic<br/>name</div></a>
            </div>
        </div>
            </div>
</div>
        )
    }
}

