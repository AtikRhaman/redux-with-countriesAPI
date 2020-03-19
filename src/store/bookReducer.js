import { BOOKS } from "../data/book";

const initialState = {
  books: BOOKS,
  selectedBook: null
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_BOOK":
      return { ...state, selectedBook: state.books[action.payload.index] };
    default:
      return state;
  }
};

export default bookReducer;
