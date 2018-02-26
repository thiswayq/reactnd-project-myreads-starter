import React, { Component } from "react";
import "./App.css";
import BookInfo from "./BookInfo";

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfTitle} Teste</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <BookInfo />
        </li>
      </ol>
    </div>
  </div>
);

export default BookShelf;
