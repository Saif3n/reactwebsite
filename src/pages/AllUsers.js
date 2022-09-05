
import axios from "axios";
import React, { Component } from "react"

var output = "";

class AllUsers extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        axios.get("https://localhost:7024/GetAllUsers").then((response) => {

            const users = response.data;
            const length = response.data.length;
            output = response.data[length-1].name;

            this.setState({
                name:output

            })

        });
    }

    render(){
        return <div>
            <h1>{[this.state.name]} last visited this site.</h1>
        </div>
    }

}





export default AllUsers;