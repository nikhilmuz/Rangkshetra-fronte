import React,{Component} from 'react'
import '../css/New/comicpage.css'
import cover from'../assets/cover.jpg'

export default class ComicPage extends Component {

    render() {
        return (
            <div>
                <h3>(genre)</h3>
                    <div className="imageContainer">
                        <div className="image">
                            <a>  <img   width={150} src={cover} />
                                <div className="text1">comic<br/> name</div></a>
                        </div>
                        <div className="image"><img   width={150} src={cover} />
                            <div className="text1">comic<br/> name</div>
                        </div>
                        <div className="image"><img   width={150} src={cover} />
                            <div className="text1">comic<br/> name</div>
                        </div>
                        <div className="image"><img   width={150} src={cover} />
                            <div className="text1">comic<br/> name</div>
                        </div>
                    </div>
                    <hr/>
                 </div>
        )
    }
}

