import React from "react";
import "./App.css";
import BookInfo from "./BookInfo";

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <li key={book.title}>
            <BookInfo book={book} onUpdate={props.onUpdate} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default BookShelf;
