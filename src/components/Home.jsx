import './Home.css'

function Home() {
    return ( 
        <div className="home">
          <div className="header_section">
            <h1 className="home_header">THE SHELVES ARE ALL BOOKED UP!</h1>
          </div>
          <div className="button_section">
              <div className="buttons">
                <button className="button" id="check_shelves">CHECK SHELVES</button>
                <button className="button" id="popular_books">POPULAR BOOKS</button>
              </div>
          </div>
        </div>
     );
}

export default Home;