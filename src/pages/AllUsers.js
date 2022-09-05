import axios from "axios";
import { useState, useEffect } from "react";

function AllUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://localhost:7024/GetAllUsers").then((response) => {
            setUsers((existingData) => {
                console.log(response.data[0].name)

                return response.data;
                
            });
        });
    }, []);

    return (<div>
        <h1>Name:</h1> {}
    </div>
    );
}


export default AllUsers;