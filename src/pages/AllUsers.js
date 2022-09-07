
import axios from "axios";
import React, { Component } from "react"
import logo from "./profile.png"
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

            this.setState({
                name: output

            })

        });
    }

    render() {
        return (
            <div class="container">
                <h1>Hey, my name is Nicholas Wu.</h1>
                <h1>I'm an aspiring Software Developer at the University of Auckland.</h1>
                <h1>This site was last visited by {[this.state.name]}.</h1>
            </div>
        )
    }

}





export default AllUsers;