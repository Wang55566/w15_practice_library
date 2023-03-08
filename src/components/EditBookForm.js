import { useParams } from 'react-router-dom';
import BookForm from './BookForm';
import { useSelector } from 'react-redux';

const EditBookForm = () => {
  const { bookId } = useParams();
  const books = useSelector(state => state.books)
  const book = books[bookId];

  return (
    <BookForm book={book} formType="Update Book" />
  );
}

export default EditBookForm;
