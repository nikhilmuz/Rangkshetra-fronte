import React,{Component} from 'react'
import './../css/contactus.css'
import NavBar from '../components/NavBar'
import Footer from './../components/Footer'
export default class Contact extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar/>
                </div>

                <form className="contactbox">
                    <h1 style={{ textAlign: 'center'}}>Contact Form</h1>
                    <div>
                        <label htmlFor="fname">Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your Full name.." required/>

                        <label htmlFor="Email Id">Email Id</label>
                        <input type="text" id="EmailId" name="Email Id" placeholder="Your Email Id.." required/>

                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="Subject" name="Subject" placeholder="Subject.."/>

                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" placeholder="Write something.." style={{height: '150px'}}
                                  required/>
                        <button type="submit" className="submitbtn">Submit</button>
                    </div>
                </form>
                <Footer/>
            </div>
        )
    }
}

