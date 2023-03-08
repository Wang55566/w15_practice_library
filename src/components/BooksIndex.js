import { Link } from 'react-router-dom';
import BookIndexItem from './BookIndexItem';

import { useSelector,useDispatch } from 'react-redux';
import { resetBooks } from '../store/bookReducer';

const BooksIndex = () => {
  const objectOfBooks = useSelector(state => state.books)
  const books = Object.values(objectOfBooks);
  const dispatch = useDispatch();
  const resetBookData = (e) => {
    e.preventDefault();
    dispatch(resetBooks());
  };

  return (
    <section>
      <ul>
        {
          books.map(book => (
            <BookIndexItem
              book={book}
              key={book.id}
            />
          ))
        }
      </ul>
      <Link to="/books/new">Add New Book</Link>
      <button onClick={resetBookData}>Reset Book Data</button>
    </section>
  );
}

export default BooksIndex;
