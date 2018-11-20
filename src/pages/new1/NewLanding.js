import React, {Component} from "react";
import newlanding from "./../../css/new1/newlanding.css"
import tbs_logo from "./../../assets/tbs_logo.png"
import MediaQuery from 'react-responsive';
import {SectionsContainer, Section} from 'react-fullpage';


export default class NewLanding extends Component{
    render(){
        return(


            <div>
                    <div className='shortcuts'>
                        <ul >
                            <li><a>Favourites </a></li>
                            <li><a>Ved</a></li>
                            <li><a> barf</a></li>
                            <li><a>yug</a></li>
                        </ul>
                    </div>
                    {/*<MediaQuery minDeviceWidth={700}>*/}
                    {/*{(matches) => {*/}
                    {/*if (matches) {*/}
                    {/*return <div>Media query matches!</div>;*/}
                    {/*} else {*/}
                    {/*return <div>Media query does not match!</div>;*/}
                    {/*}*/}
                    {/*}}*/}
                    {/*</MediaQuery>*/}
                    <div className='userOptions'>
                        <ul className="left">
                            <li><a>login </a></li>
                            <li><a>signup</a></li>
                            <li><a> <i className="fa fa-shopping-cart"/></a></li>
                            <li><a>library</a></li>

                            <div className="right">
                                <li>
                                    <input type="search" className="search" placeholder="&#61442; search"/>
                                    <a></a>
                                </li>

                            </div>
                        </ul>
                    </div>
                    <div className='languages'>
                        <ul>
                            <li><a>हिंदी</a></li>
                            <li><a>मराठी</a></li>
                            <li><a>বাংলা</a></li>
                            <li><a>తెలుగు</a></li>
                            <li><a>ಕನ್ನಡ</a></li>
                            <li><a>English</a></li>
                        </ul>
                    </div>
                    <div className="logo"> <a href="">
                        <img src={tbs_logo} alt="TBS PLANET" height="80px"/>
                    </a></div>

                <div className="section1">
                </div>
                <div className="section2">
                </div>
                <div className="pageEnd">
                    <span>
                        <h2>Advance Search</h2>
                    </span>
                    <input type="text" placeholder="Enter search term"/>
                    <select type="format" name="select format" >
                        <option value="0">Select format:</option>
                            <option value="1">Paperback</option>
                            <option value="2">Digital</option>
                    </select>
                    <select type="genre" name="select genre">
                        <option value="0">Select genre:</option>
                        <option value="1">Horror</option>
                        <option value="2">Superhero</option>
                        <option value="3">Mythology</option>
                        <option value="4">All</option>
                    </select>
                    <button>Go!</button>
                </div>
            </div>
        )
    }
}