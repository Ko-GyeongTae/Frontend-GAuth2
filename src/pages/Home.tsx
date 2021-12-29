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

        await axios.post("https://neon-dev.kro.kr:5083/api/v1/auth/genkey", {}, { // Request to login api with axios module
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
                    <code>Request header에 clientId: value형태로 clientID를 추가해주세요.</code>
                    <h1>Client ID</h1>
                    <p>{cid}</p>
                    <code>사용할 서버의 jwtSecret을 밑에 값으로 설정해주세요.</code>
                    <h1>jwtSecret</h1>
                    <p>{secret}</p>
                    <button onClick={Generate}>Generate</button>
                </div>
            </div>
        </div>
    )
}

export default Home;