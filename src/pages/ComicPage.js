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
                            <a>  <img   height={240} src={cover} />
                                <div className="text1">comic<br/> name</div></a>
                        </div>
                        <div className="image"><img   height={240} src={cover} />
                            <div className="text1">comic<br/> name</div>
                        </div>
                        <div className="image"><img   height={240} src={cover} />
                            <div className="text1">comic<br/> name</div>
                        </div>
                        <div className="image"><img   height={240} src={cover} />
                            <div className="text1">comic<br/> name</div>
                        </div>
                    </div>
               <div className="viewAll"><a href="/comicHome"> View all</a><br/></div>
                <br/>
                <hr/>

                 </div>

        )
    }
}

