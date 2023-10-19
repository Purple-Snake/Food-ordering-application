import "./register.css"
import { Link } from "react-router-dom";

function Login() {
    return ( 
        <div className="login rounded-md w-1/4 m-20 p-5">
            <h1><b>Log in</b></h1>
            <p>If you don’t have an account register. You can register
                <Link to="/register"> <b>Here!</b></Link>
            </p>
            <form >
                <label htmlFor="emailInput">Email</label>
                <br />
                <input type="email" id="emailInput" className="loginInput" required/>
                <br />  
                <label htmlFor="passwordInput">Password</label>
                <br />
                <input type="password" id="passwordInput" className="loginInput" required/>
                <br />
                <input type="submit" value="Log in" className="bg-[#000] text-white my-5 w-1/2 h-9 rounded-md"/>
            </form>
        </div>
     );
}

export default Login;