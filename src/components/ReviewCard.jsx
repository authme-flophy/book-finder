import './ReviewCard.css'

function ReviewCard({review}) {
  return ( 
    <div className="review">
      <p>{review.comment}</p>
    </div>
   );
}

export default ReviewCard;