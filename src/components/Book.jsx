import BookCard from "./BookCard";
import './Book.css'
import { useEffect, useState } from "react";

function Book() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch("/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data)
      });
  }, []);
  

    return ( 
        <div className="books">
            {books.map(book => <BookCard book={book} />)}
        </div>
     );                            
}

export default Book;