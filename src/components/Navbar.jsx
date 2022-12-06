import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Book Finder App</h1>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/books">Book</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/genre">Genre</Link>
           
            </div>
        </nav>
     );
}
 
export default Navbar;

