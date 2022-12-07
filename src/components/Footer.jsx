import './Footer.css'

function Footer() {
    return ( 
        <div className="footer">
            <div className="links">
            <a href="https://www.google.com" target="_blank" className="link" to="/contacts">Contacts</a>
            <a href="https://github.com/authme-flophy/book-finder-backend" target="_blank" className="link" to="/books">Github</a>
            </div>
        </div>
     );
}

export default Footer;