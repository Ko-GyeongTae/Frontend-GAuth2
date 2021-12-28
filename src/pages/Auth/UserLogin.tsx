import { useState } from 'react';
import axios from 'axios';
import { setAccessToken } from '../../utils';
import { useHistory } from 'react-router-dom';
import './Login.css';

function UserLogin() {
    const [id, setId] = useState<string>(); // id State variable
    const [pw, setPw] = useState<string>(); // password State variable
    const { push } = useHistory();

    const handleId = (e: any) => {
        setId(e.target.value);
    }

    const handlePw = (e: any) => {
        setPw(e.target.value);
    }

    const Login = async (e: any) => { // login function
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/auth/login", { // Request to login api with axios module
            "id": id,
            "password": pw
        })
            .then(res => {
                console.log(res.data["accessToken"])
                setAccessToken(res.data["accessToken"]);
                localStorage.setItem("accessToken", res.data["accessToken"]);
                push("/");
                window.location.reload();
            })
            .catch(err => {
                console.log(err); // If you fail to login, Browser print error log.
                alert("Wrong Authentication");
            })
    }
    return (
        <div className="container">
            <div className="header">
                <h1>동아리원 로그인</h1>
            </div>
            <form className="input-form" onSubmit={Login}>
                <div className="form-box">
                    <input type="text" name="id" placeholder="아이디" value={id} onChange={handleId} />
                    <input type="password" name="password" placeholder="비밀번호" value={pw} onChange={handlePw} />
                    <button type="submit" value="Submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default UserLogin;