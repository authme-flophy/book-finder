function ReviewCard({review}) {
  return ( 
    <div className="review">
      <h3>{review.comment}</h3>
    </div>
   );
}

export default ReviewCard;