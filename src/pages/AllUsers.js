import React, { Component } from "react"
import logo from "./profile.png"
import Typewriter from 'typewriter-effect';


class AllUsers extends Component {

    render() {
        return (<div><div className="break"></div>
        <a href="https://www.linkedin.com/in/nicholas-wu-6b64b5233/">
        <img className="profile" src={logo}></img>
        </a>
            <br></br>

            <div className="type">    
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.changeDelay(40).typeString('Hey, my name\'s Nicholas Wu.')
                        .start();
                }} />
        
            </div>
            <div className="type2">
            <Typewriter
                className ="secondtype" onInit={(typewriter) => {
                    typewriter.changeDelay(60)
                        .typeString("I'm an aspiring Software Developer at the University of Auckland.")
                        .pauseFor(2500)
                        .deleteAll(60)
                        .typeString("Welcome to my website!")
                        .start();
                }} />
            </div>
        </div>

        )
    }

}



export default AllUsers;