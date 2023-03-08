import initialBooks from '../data/initial-books.json';

const DELETE_BOOKS = "book/deletebooks";
const CREATE_BOOK = "book/createbook";
const RESET_BOOKS = "book/resetbooks";
const CHECK_OUT = "book/checkout";

const copy_of_initialBooks = [...initialBooks];
const normalized_book = {};
copy_of_initialBooks.forEach( (obj) => {
  normalized_book[obj.id] = obj;
})

export const deleteBooks = (book) => {
  return {
    type: DELETE_BOOKS,
    book
  }
}

export const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    book
  }
}

export const resetBooks = () => {
  return {
    type: RESET_BOOKS
  }
}

export const checkOut = (book) => {
  return {
    type: CHECK_OUT,
    book
  }
}
const initialState = {...normalized_book};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BOOKS:
      const obj = {...state};
      delete obj[action.book.id];
      return obj
    case CREATE_BOOK:
      const obj2 = {...state};
      obj2[action.book.id] = action.book;
      return obj2;
    case RESET_BOOKS:
      return initialState;
    case CHECK_OUT:
      const obj3 = {...state};
      obj3[action.book.id].checkedOut ?
      obj3[action.book.id].checkedOut = false
      : obj3[action.book.id].checkedOut = true;
      return obj3;
    default:
      return state;
  }
}

export default bookReducer;
