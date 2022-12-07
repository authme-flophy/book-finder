import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    return ( 
        <div className="home">
          <div className="header_section">
            <h1 className="home_header">THE SHELVES ARE ALL BOOKED UP!</h1>
          </div>
          <div className="button_section">
              <div className="buttons">
                <Link className="button" to="/books" >CHECK SHELVES</Link>
                <Link className="button" to="/genres" >POPULAR BOOKS</Link>
              </div>
          </div>
        </div>
     );
}

export default Home;