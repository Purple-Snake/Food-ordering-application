import "./register.css"
import { Link } from "react-router-dom"

function RegisterFrom() {
    return ( 
        <div className="bg-[#B4846C] rounded-md w-1/4 m-20 p-5">
            <h1 className=""><b>Sign up</b></h1>
            <p>If you have an account. You can login
                <Link to="/login"> <b>Here!</b></Link>
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
                <input type="submit" value="Register" className="bg-[#000] text-white my-5 w-1/2 h-9 rounded-md"/>
            </form>
        </div>
     );
}

export default RegisterFrom;