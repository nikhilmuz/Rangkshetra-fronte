import React from 'react';

 export default class Video extends React.Component {
     render() {

         return (
             <div className="videoBox">
                 <video className="video" width="300" height="168.75" controls>
                     <source src="https://www.youtube.com/embed/uFf2HNLc000" type="video/mp4"/>
                 </video>

                 <iframe className="video"width="300" height="168.75" src="https://www.youtube.com/embed/uFf2HNLc000" frameBorder="0"
                         allow="autoplay; encrypted-media" allowFullScreen/>
                 <iframe className="video"width="300" height="168.75" src="https://www.youtube.com/embed/epCnXwX7_aw" frameBorder="0"
                         allow="autoplay; encrypted-media" allowFullScreen/>
                 <iframe width="300" height="168.75" src="https://www.youtube.com/embed/6mofhG9q2Bg" frameBorder="0"
                         allow="autoplay; encrypted-media" allowFullScreen/>


             </div>
         );
     }

 }