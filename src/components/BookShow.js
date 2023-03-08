import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { checkOut } from '../store/bookReducer';

const BookShow = () => {
  const { bookId } = useParams();
  const books = useSelector(state => state.books)
  const book = books[bookId];
  const dispatch = useDispatch();

  const changeCheckOut = (e) => {
    e.preventDefault();
    dispatch(checkOut(book));
  };

  return (
    <section>
      ID: {book.id}
      <br/>
      Title: {book.title}
      <br/>
      Author: {book.author}
      <br/>
      <button onClick={changeCheckOut}>
        {book.checkedOut === true && "Return"}
        {book.checkedOut === false && "Check Out"}
      </button>
      <br/>
      <Link to="/">Back to Books List</Link>
    </section>
  );
}

export default BookShow;
