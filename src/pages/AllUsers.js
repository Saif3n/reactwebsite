import axios from "axios";
import { useState, useEffect } from "react";

function AllUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://localhost:8080/api/GetAllUsers").then((response) => {
            setUsers((existingData) => {
                return response.data;
            });
        });
    }, []);
    return <></>
}


export default AllUsers;