import { Link } from "react-router-dom";
import "./Navbar.css"


const Navbar = ( {user, setUser} ) => {

    const handleLogout = async (e) => {

      console.log('worked');

      const response = await fetch('/logout', {
        method: 'DELETE',
      })

      if (response.ok) {
        setUser(null)
      }

    }

    return ( 
        <nav className="navbar">
            
            {
              user ? (
                <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/books">Book</Link>
                <a className="link" onClick={(e) => handleLogout(e)}>Logout</a>
            </div>
              ) : (
                <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/books">Book</Link>
                  <Link className="link" to="/login">Login</Link>
                  <Link className="link" to="/signup">Sign Up</Link>
                </div>
              )
            }
           
        </nav>
     );
}
 
export default Navbar;

