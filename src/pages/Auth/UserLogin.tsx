import { useEffect } from "react";
import axios from "axios";

function UserLogin(){
    function joinHandler(){
        try{
            let data = {id: "test", password: "test"};
            axios.post("http://localhost:4000/auth/signin" ,JSON.stringify(data), {
                headers: {
                  "Content-Type": `application/json`,
                }})
            .then(res =>{
                console.log("res.data.accessToken : " + res.data["accessToken"]);
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
         
            })
            .catch(ex=>{
                console.log("login requset fail : " + ex);
            })
            .finally(()=>{console.log("login request end")});
        }catch(e){
            console.log(e);
        }
        
        
    }

    useEffect(()=>{
        console.log("LoginPage render ... ");
    })
    return(
        <div>
            <span>Login Page</span>
            
            <button type="button" onClick={joinHandler}>Join</button>
        </div>
    )
}

export default UserLogin;