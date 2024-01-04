import React from "react";
import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function signInHandler() {
        setMessage("Lording")
        if(email === "ahla@gmail.com" && password === "test@123") {
            setTimeout(() => {
                setMessage("Successfully LoggedIn"); 
            }, 3000);
            
        } else {
            setTimeout(() => {
                setMessage("Invalid Username or Password");
            }, 3000);
        }
    }

    return <div>
                <h1>Login</h1>
                <input type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/><br/>
                <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} /><br/>
                <button onClick={signInHandler}>SingIn</button>
                {message && <p>{message}</p>}
            </div>
}