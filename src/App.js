import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./Search";
import BookList from "./BookList";
import { BrowserRouter as Router, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: {
      currentlyReading: {
        title: "Currently Reading",
        books: []
      },
      read: {
        title: "Read",
        books: []
      },
      wantToRead: {
        title: "Want to read",
        books: []
      }
    }
  };

  componentWillMount() {
    BooksAPI.getAll().then(res => {
      this.setState(state => {
        state.books.currentlyReading.books = res.filter(
          book => book.shelf === "currentlyReading"
        );
        state.books.wantToRead.books = res.filter(
          book => book.shelf === "wantToRead"
        );
        state.books.read.books = res.filter(book => book.shelf === "read");
      });
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      this.setState(state => {
        Object.keys(state.books).map(
          shelf =>
            (state.books[shelf].books = state.books[shelf].books.filter(
              bookInShelf => bookInShelf.id !== book.id
            ))
        );
        if (shelf !== "none") state.books[shelf].books.push(book);
      });
    });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route
            path="/search"
            render={() => (
              <Search books={this.state.books} onUpdate={this.updateBook} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <BookList books={this.state.books} onUpdate={this.updateBook} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
