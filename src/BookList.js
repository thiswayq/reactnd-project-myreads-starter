import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const BookList = props => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      {Object.keys(props.books).map(shelf => (
        <BookShelf
          key={props.books[shelf].title}
          title={props.books[shelf].title}
          books={props.books[shelf].books}
        />
      ))}
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

export default BookList;
