import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/books">Book</Link>
            <Link className="link" to="/login">Login</Link>
            <Link className="link" to="/signup">Sign Up</Link>
            <Link className="link" to="/genre">Genre</Link>
           
            </div>
        </nav>
     );
}
 
export default Navbar;

