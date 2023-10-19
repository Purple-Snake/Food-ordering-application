import "./register.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function login(e) {
        e.preventDefault();

        try {
            const registerData = {
                email,
                password
            };

            await axios.post("http://localhost:3000/api/login", registerData)

        } catch (err) {
            console.log(err);
        }
    }
    return ( 
        <div className="login rounded-md w-1/4 m-20 p-5">
            <h1><b>Log in</b></h1>
            <p>If you don’t have an account register. You can register
                <Link to="/register"> <b>Here!</b></Link>
            </p>
            <form onSubmit={login}>
                <label htmlFor="emailInput">Email</label>
                <br />
                <input type="email" id="emailInput" className="loginInput" onChange={(e) => setEmail(e.target.value)} defaultValue={email} required/>
                <br />  
                <label htmlFor="passwordInput">Password</label>
                <br />
                <input type="password" id="passwordInput" className="loginInput" onChange={(e) => setPassword(e.target.value)} defaultValue={password} required/>
                <br />
                <button type="submit" className="bg-[#000] text-white my-5 w-1/2 h-9 rounded-md">logIn</button>
            </form>
        </div>
     );
}

export default Login;