import React,{Component} from 'react'
import '../css/New/comicpage.css'
import cover from'../assets/cover.jpg'

export default class ComicPage extends Component {

    render() {
        return (
            <div>
                <h2 style={{ color:'#ffffff'}}>(genre)</h2>
                    <div className="imageContainer">
                        <div className="image">
                            <a>  <img   width={50} src={cover} />
                                <div className="text1">comic<br/> name</div></a>
                        </div>
                        <div className="image"><img   width={50} src={cover} />
                            <div className="text1">comic<br/> name</div>
                        </div>
                        <div className="image"><img   width={50} src={cover} />
                            <div className="text1">comic<br/> name</div>
                        </div>
                        <div className="image"><img   width={50} src={cover} />
                            <div className="text1">comic<br/> name</div>
                        </div>
                    </div>
                    <hr/>
                 </div>
        )
    }
}

