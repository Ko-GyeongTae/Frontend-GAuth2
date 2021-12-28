import { useEffect, useState } from 'react';
import axios from 'axios';
import './Auth/Login.css';
import { getAccessToken, setClientID } from '../utils';

function Home() {
    const [cid, setCid] = useState<string>(); // id State variable
    const [secret, setSecret] = useState<string>(); // password State variable

    const Generate = async (e: any) => { // login function
        console.log(getAccessToken())
        e.preventDefault();

        await axios.post("http://localhost:8080/api/v1/auth/genkey", {}, { // Request to login api with axios module
            headers: { "Authorization": getAccessToken() + ""}
        })
            .then(res => {
                console.log(res.data);
                setCid(res.data["clientId"]);
                setClientID(res.data["clientId"])
                setSecret(res.data["jwtSecret"]);
            })
            .catch(err => {
                console.log(err); // If you fail to login, Browser print error log.
                alert(err);
            })
    }

    useEffect(() => {
        console.log('refresh');
    })
    return (
        <div className="container">
            <div className="header">
                <h1>ClientID 발급</h1>
            </div>
            <div className="input-form">
                <div className="form-box">
                    <h1>Client ID</h1>
                    <p>{cid}</p>
                    <h1>jwtSecret</h1>
                    <p>{secret}</p>
                    <button onClick={Generate}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Home;