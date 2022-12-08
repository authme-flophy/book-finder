import React from 'react';
import './BookCard.css'

function BookCard({title, desc, img}) {
    
  return ( 
      <div className="card">
         <img src={img} class="card-img-top" alt="..."/>
          <h1>{title}</h1>
          <p>{desc}</p>
      </div>
      // <img className="img" src="" alt=""/>
   );
}

export default BookCard;