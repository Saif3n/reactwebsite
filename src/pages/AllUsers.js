
import axios from "axios";
import React, { Component } from "react"
import logo from "./profile.png"
import Typewriter from 'typewriter-effect';
var output = "";

class AllUsers extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        axios.get("https://personalbackendreact.azurewebsites.net/GetAllUsers").then((response) => {

            const users = response.data;
            output = response.data.name;
            console.log(this.state.name);
            this.setState({
                name: output

            })

        });
    }


    render() {
        return (<div><div class="break"></div><img class="profile" src={logo}></img>
            <br></br>

            <div class="type">    
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.changeDelay(40).typeString('Hey, my name\'s Nicholas Wu.')
                        .start();
                }} />
        
            </div>
            <div class="type2">
            <Typewriter
                class ="secondtype" onInit={(typewriter) => {
                    typewriter.
                        changeDelay(60)
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