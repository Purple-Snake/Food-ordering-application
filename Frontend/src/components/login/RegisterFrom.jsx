import "./register.css"
import { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"

function RegisterFrom() {
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordVerify, setPasswordVerify] = useState("")

    async function register(e) {
        e.preventDefault();

        try {
            const registerData = {
                email,
                userName,
                password,
                passwordVerify
            };

            await axios.post("http://localhost:3000/api/register", registerData)

        } catch (err) {
            console.log(err);
        }
    }
    return ( 
        <div className="register rounded-md w-1/4 m-20 p-5">
            <h1 className=""><b>Sign up</b></h1>
            <p>If you have an account. You can login
                <Link to="/login"> <b>Here!</b></Link>
            </p>
            <form onSubmit={register}>
                <label htmlFor="emailInput">Email</label>
                <br />
                <input type="email" id="emailInput" className="registerInput" onChange={((e) => setEmail(e.target.value))} defaultValue={email} required/>
                <br />
                <label htmlFor="userNameInput">User name</label>
                <br />
                <input type="text" id="userNameInput" className="registerInput" onChange={((e) => setUserName(e.target.value))} defaultValue={userName} required/>
                <br />  
                <label htmlFor="passwordInput">Password</label>
                <br />
                <input type="password" id="passwordInput" className="registerInput" onChange={((e) => setPassword(e.target.value))} defaultValue={password} required/>
                <br />
                <label htmlFor="passwordConfirmInput">Confrim Password</label>
                <br />
                <input type="password" id="passwordConfirmInput" className="registerInput" onChange={((e) => setPasswordVerify(e.target.value))} defaultValue={passwordVerify} required/>
                <br />
                <button type="submit" className="bg-[#000] text-white my-5 w-1/2 h-9 rounded-md">Register</button>
            </form>
        </div>
     );
}

export default RegisterFrom;