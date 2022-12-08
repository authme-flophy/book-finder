import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css'

function BookCard({book}) {

  const book_id = book.id

  return ( 
      <div className="card">
         <img src={book.image_url} class="card-img-top" alt="..."/>
          <div className="content">
            <h1>{book.title}</h1>
            <p>{book.likes} likes</p>
            <Link to="/reviews" state={{ book_id: book_id }} >Review</Link>
          </div>
      </div>
   );
}

export default BookCard;