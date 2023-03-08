import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteBooks } from '../store/bookReducer';

const BookIndexItem = ({ book }) => {
  const dispatch = useDispatch();
  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(deleteBooks(book));
  };

  return (
    <li>
      <Link to={`/books/${book.id}`}>Book #{book.id}</Link>
      <Link to={`/books/${book.id}/edit`}>Edit</Link>
      <button onClick={deleteBook}>Delete</button>
    </li>
  );
};

export default BookIndexItem;
