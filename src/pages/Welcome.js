import { useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

function Cookie() {
    let country = '';
    let ip = '';
    
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        ip = res.data.IPv4;
        country = res.data.country_name;

        axios.post(process.env.REACT_APP_WEBHOOK_URL, {
            content: ip + ' from '+ country +' has arrived on your personal website!'
        }).then(response => {
        }).catch(error => {
            console.error(error);
        });
    }
    useEffect(() => {
        getData()
    }, [])
}

export default Cookie;
