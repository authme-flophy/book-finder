import BookCard from "./BookCard";
import './Book.css'

function Book() {
    let books=[{title:"The Passion Within", img:"https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", desc: "Romance"},{title: "The Passion Within", img:"https://images.pexels.com/photos/256443/pexels-photo-256443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", desc: "A Woman Journal"},{title:"Beauty And The Beast", img:"https://i.pinimg.com/564x/60/2d/1b/602d1be357fd719c857513bbc49118af.jpg", desc: "Fiction"}, {title:"Your Soul River", img:"https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", desc: "Soul"}, {title:"The Girl In The Tower", img:"https://i.pinimg.com/564x/39/44/84/394484db538111ba4ab5c205dce14096.jpg", desc: "Fiction"}, {title:"The Glass Woman", img:"https://i.pinimg.com/564x/26/f0/8e/26f08e81499f7f8957e7369ad9e1cdde.jpg", desc: "Fiction"},{title:"The Mixology Of AStrology", img:"https://i.pinimg.com/564x/ee/2e/02/ee2e020ed67cc120953dbbb5e791cfb6.jpg", desc: "AStrology"},{title: "Winnie The Pooh", img: "https://i.pinimg.com/564x/dd/28/20/dd2820a7348525f794a742d4a4586a91.jpg", desc: "Fiction"},{title: "Persuasion", img: "https://i.pinimg.com/564x/77/3d/d7/773dd7af275899c1ac715826fea7f2f9.jpg", desc: "Romance"}, {title: "The  Worst Girl In The School", img: "https://i.pinimg.com/564x/c9/51/2a/c9512ac9c167ca2360dfa62effee9ec3.jpg", desc: "Fiction"}]
    return ( 
        <div className="books">
            {books.map(book=><BookCard title={book.title} desc={book.desc} img={book.img}/>)}
        </div>
     );                            
}

export default Book;