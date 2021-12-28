import { useState } from 'react';
import axios from 'axios';
import { setAccessToken } from '../../utils';
import { useHistory } from 'react-router-dom';
import './Login.css';

const baseURL = 'http://localhost:4000';

function AdminLogin() {
    const [id, setId] = useState<string>(); // id State variable
    const [pw, setPw] = useState<string>(); // password State variable
    const { push } = useHistory();

    const handleId = (e: any) => {
        setId(e.target.value);
    }

    const handlePw = (e: any) => {
        setPw(e.target.value);
    }

    const Login = async () => { // login function
        console.log("window");
        await axios.post(baseURL + "/auth/signin/admin", { // Request to login api with axios module
            "id": id,
            "password": pw
        })
            .then(res => {
                console.log("window");
                console.log(res.data["accessToken"])
                setAccessToken(res.data["accessToken"]);
                localStorage.setItem("accessToken", res.data["accessToken"]);
                push("/");
            })
            .catch(err => {
                console.log("window");
                console.log(err); // If you fail to login, Browser print error log.
                alert("Wrong Authentication");
            })
    }
    return (
        <div className="container">
            <div className="header">
                <h1>동아리장 로그인</h1>
            </div>
            <form className="input-form" onSubmit={Login}>
                <div className="form-box">
                    <input type="text" name="id" placeholder="ID" value={id} onChange={handleId} />
                    <input type="password" name="password" placeholder="Password" value={pw} onChange={handlePw} />
                </div>
                <button type="submit" value="Submit">Login</button>
            </form>
        </div>
    )
}

export default AdminLogin;