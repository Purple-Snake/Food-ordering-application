import { Link } from "react-router-dom"

function RegisterFrom() {
    return ( 
        <div>
            <h1><b>Sign up</b></h1>
            <p>If you have an account. You can login
                <Link to="/login">Here!</Link>
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
                <label htmlFor="passwordConfirmInput">Confrim Password</label>
                <br />
                <input type="password" id="passwordConfirmInput" required/>
                <br />
                <input type="submit" value="Register"/>
            </form>
        </div>
     );
}

export default RegisterFrom;