import BookCard from "./BookCard";
import './Book.css'

function Book() {
    let books=[{title:"ade", img:"https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", desc: "asda"},{title: "hfajh",desc: "afdgd"}]
    return ( 
        <div className="book">
            {books.map(book=><BookCard title={book.title} desc={book.desc} img={book.img}/>)}
        </div>
     );
}

export default Book;