import React, {Component} from 'react'
import NavBar from '../components/NavBar'
import '../css/about.css'
import Footer from './../components/Footer'
export default class About extends Component{
    render(){
        return(
            <div>
                <NavBar/>
                <div className="aboutContainer">
                    <br/>
                    <p align="justify">Rangkshetra is an initiative by TBS Planet Comics to bring together all kinds of Indian artists,
                        comic creators and animators.
<br/><br/>
                        A lot of Indian artists today struggle to find a platform to showcase their talent,
                        their creations and their works. With so many different platforms, art is lost deep down and
                        it does not receive the appreciation that it deserves.
<br/><br/>
                        The word <b>"Rangkshetra"</b> is inspired from <b>"Rang"</b> and <b>"Rankshetra"</b> which mean color and
                        battlefield respectively and thus Rangkshetra is <b>"Battle of colors"</b>.
                        We love all kinds of art and would love to see whatever it is that you have done! Be it a small
                        doodle or a deep canvas painting or a digital artwork or a sketched portrait or a funny comic strip or
                        even a short or long animation - share it with us and we would help you take your artworks to
                        like-minded people through our platform.
                    <br/><br/>
                        Share your art! Spread the joy! Indulge in the festivity of colours - <b>Indulge in Rangkshetra!</b>
<br/><br/>
                        <b>About TBS Planet:</b>
<br/>   TBS Planet Comics is India's fastest growing comics and animation startup.
                        Started in July 2016 by IIT Roorkee Silver Medalist, Rajeev Tamhankar, TBS Planet is home to Indian superheroes
                        like Ved, Varun, Karma, Yug etc and has been official comics partners to Bollywood movies
                        like "Shivaay" and "A Flying Jatt". You can also try our comics for free on digital
                        subscription by subscribing here: <a href="http://www.tbsplanet.com">www.tbsplanet.com</a></p>
                </div>
                <div>
                    <br/><br/>
                    <Footer/>
                </div>
            </div>

        )
    }
}