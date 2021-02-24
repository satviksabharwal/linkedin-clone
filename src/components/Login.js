import React from 'react';
import "../styles/Login.css";
import LoginLogo from "../loginlogo.png";

function Login() {

    const loginToApp = () => {}; 
    const register = () => {};
    return (
        <div className="login">
            <img src={LoginLogo}
            alt="Login logo"/>
            <form>
            <input type="text" placeholder="Full Name(Required if registering)" />  
            <input type="text" placeholder="Profile Pic URL(Optional)" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?{"  "}
            <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login
