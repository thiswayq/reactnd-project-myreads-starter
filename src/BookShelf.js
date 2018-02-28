import React from "react";
import "./App.css";
import BookInfo from "./BookInfo";

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title} Teste</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <li key={book.title}>
            <BookInfo book={book} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default BookShelf;
