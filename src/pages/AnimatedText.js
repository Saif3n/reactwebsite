
import axios from "axios";
import React, { Component } from "react"
import logo from "./profile.png"
import Typewriter from 'typewriter-effect';
var output = "";

class AnimatedText extends Component {
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
            this.setState({
                name: output

            })

        });
    }

    render(){
        return (<div className="visited"><p>{[this.state.name]}, was the last user to leave a message.</p></div>)
    }

}
export default AnimatedText;