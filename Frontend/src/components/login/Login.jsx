import { Link } from "react-router-dom";

function Login() {
    return ( 
        <div>
            <h1><b>Log in</b></h1>
            <p>If you don’t have an account register. You can Register
                <Link to="/register">Here!</Link>
            </p>
            <form >
                <label htmlFor="emailInput">Email</label>
                <br />
                <input type="email" id="emailInput" required/>
                <br />
                <label htmlFor="userNameInput">User name</label>
                <br />
                <input type="text" id="userNameInput" required/>
                <br />  
                <label htmlFor="passwordInput">Password</label>
                <br />
                <input type="password" id="passwordInput" required/>
                <br />
                <input type="submit" value="Log in"/>
            </form>
        </div>
     );
}

export default Login;