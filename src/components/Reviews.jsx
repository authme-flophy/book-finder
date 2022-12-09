import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Reviews.css"
import ReviewCard from "./ReviewCard";
import Login from "./Login";

function Reviews({user, setUser}) {

  
  const [book, setBook] = useState({})
  const [reviews, setReviews] = useState([])
  const [comment, setComment] = useState("")
  const [error, setErrors] = useState("")

  const location = useLocation()
  const { book_id } = location.state

  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/books/${book_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBook(data)
        if (data.reviews.length >= 1) {
          setReviews(data.reviews)
        }
        console.log(data.reviews)
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      book_id: book.id,
      comment: comment
    }
    const response = await fetch('/reviews', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    
    const returnedData = await response.json()

    if (response.ok) {
      console.log(data);
      e.target.parentElement.childNodes[1].value = ""
    } else (
      setErrors(returnedData.errors)
    )

  }
  
  if (!user) {
    return <Login user={user} setUser={setUser} />
  }

  return ( 
    <div className="reviews">

      <div className="book_details">
        <div className="book_info">
          <img src={book.image_url} alt="this is a book image" />
          <h1>{ book.title }</h1>
          <h3>{ book.author }</h3>
          <p>{ book.likes } likes</p>
        </div>
      </div>

      <div className="review_form">
        <form id="form">
          <h3>Post a review</h3>
          <input type="text" required name="comment" id="comment" onChange={e => setComment(e.target.value)} />
          <button type="submit" onClick={e => handleSubmit(e)}>POST</button>
        </form>
        <div className="book_reviews">
          {
            reviews.map( review => <ReviewCard review={review}/>)
          }
        </div>
      </div>

    </div>
   );
}

export default Reviews;