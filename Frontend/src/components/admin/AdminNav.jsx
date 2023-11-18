import { Link } from "react-router-dom";

function AdminNav() {
    return ( 
        <div>
            <Link to={"/adminFood"}>
                <div>Admin Food</div>
            </Link>
        </div>
     );
}

export default AdminNav;