import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Signup() {
    const [id, setId] = useState<string>();
    const [school, setSchool] = useState<string>();
    const [name, setName] = useState<string>();
    const [nickname, setNickname] = useState<string>();
    const [pw, setPw] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [birth, setBirth] = useState<string>();

    const { push } = useHistory();

    const handleId = (e: any) => {
        setId(e.target.value);
    }

    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }

    const handleSchool = (e: any) => {
        setSchool(e.target.value);
    }

    const handleName = (e: any) => {
        setName(e.target.value);
    }

    const handleNickname = (e: any) => {
        setNickname(e.target.value);
    }

    const handlePw = (e: any) => {
        setPw(e.target.value);
    }

    const handleBirth = (e: any) => {
        setBirth(e.target.value);
    }

    const Signup = async (e: any) => { // login function
        e.preventDefault();
        await axios.post("https://neon-dev.kro.kr:5083/api/v1/auth/signup", { // Request to login api with axios module
            id, nickname, name, email, school, password:pw, birth
        })
            .then(res => {
                push("/");
                alert("회원가입에 성공했습니다. 로그인을 진행해주세요.")
            })
            .catch(err => {
                console.log(err); // If you fail to login, Browser print error log.
                alert("회원가입에 실패했습니다.");
            })
    }
    return (
        <div className="container">
            <div className="header">
                <h1>회원가입</h1>
            </div>
            <form className="input-form" onSubmit={Signup}>
                <div className="form-box">
                    <input type="text" name="id" placeholder="아이디" value={id} onChange={handleId} />
                    <input type="text" name="name" placeholder="이름" value={name} onChange={handleName} />
                    <input type="text" name="nickname" placeholder="별명" value={nickname} onChange={handleNickname} />
                    <input type="text" name="email" placeholder="이메일 (example@example.com" value={email} onChange={handleEmail} />
                    <input type="password" name="password" placeholder="비밀번호" value={pw} onChange={handlePw} />
                    <input type="text" name="school" placeholder="학교" value={school} onChange={handleSchool} />
                    <input type="text" name="birth" placeholder="생일 (yyyy-mm-dd)" value={birth} onChange={handleBirth} />
                    <button type="submit" value="Submit">Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Signup;