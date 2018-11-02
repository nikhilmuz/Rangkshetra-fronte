import React,{Component} from 'react'
import '../../css/New/comicLanding0.css'
import cover from'../../assets/cover.jpg'

export default class ComicLanding extends Component {


    render() {
        return (
            <div>
                <div className="imageContainer">
                        <h2 style={{ color:'#ffffff'}}>genre</h2>
                    <div className="image">
                        <a><img src={cover} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="image">
                        <a><img src={cover} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="image">
                        <a><img src={cover} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="image">
                        <a><img src={cover} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="image">
                        <a><img src={cover} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="image">
                        <a><img src={cover} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="image">
                        <a><img src={cover} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="image">
                        <a><img src={cover} />
                            <div className="text1">comic<br/>name</div></a>
                    </div>
                    <div className="image">
                    <a><img src={cover} />
                        <div className="text1">comic<br/>name</div></a>
                </div>
                    <div className="image">
                    <a><img src={cover} />
                        <div className="text1">comic<br/>name</div></a>
                </div>
                    <div className="image">
                    <a><img src={cover} />
                        <div className="text1">comic<br/>name</div></a>
                </div>

                </div>

                <a href="/comicHome" className="viewAll"> view all</a>
                 </div>
        )
    }
}

