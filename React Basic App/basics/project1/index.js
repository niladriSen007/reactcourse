// import {StrictMode} from 'react';
// import React from "react"
// import {createRoot} from 'react-dom/client';
// const Navbar = require("./Navbar.js")
import Navbar from './Navbar.js'
const rootCont= document.querySelector("#root");

// const root = createRoot(rootCont);
// const { Component } = React;
// const { render } = ReactDOM;

// const content = (
//     <div>
//         <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png"  width="100px" alt="react-logo" />
//         <h1 className="heading">Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100k starts on Github</li>
//             <li>Is maintained by Facebook</li>
//         </ul>
//     </div>
// )




function Heading(){
    return(<div>
      
        <h1>My Name is Niladri Sen</h1>
    </div>)
}

function Content()
{
    return(
        <div className="main-content">
                <Heading/>
                <h1 className="heading">Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k starts on Github</li>
                    <li>Is maintained by Facebook</li>
                </ul>
    </div>
    )
}

function Footer(){
    return(<div className="footer">
      
        <p>Thank you for reaching to us</p>
    </div>)
}

ReactDOM.render
(<>
  <Navbar />
  {/* <Heading/> */}
  <Content/>
  <Footer/>
</>
,rootCont);