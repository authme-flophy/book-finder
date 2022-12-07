
function BookCard({ bookImage, bookPrice, bookAuthor, bookCategory, book }) {
    const { handleOnClickBook, handleDeleteBook, handleUpdateBook } =
      useContext(BookContext);
    return (
      <div className="book-card">
        <img
          src={bookImage}
          alt={bookTitle}
          onClick={() => handleOnClickBook(book)}
        />
        <h4> {bookTitle}</h4>
        <p>{bookCategory}</p>
        <p>{bookAuthor}</p>
        <div className="action-btn">
          <button className="edit-btn" onClick={() => handleUpdateBook(book)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button className="delete-btn" onClick={() => handleDeleteBook(book)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
     );
}

export default BookCard;