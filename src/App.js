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
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/search" render={() => <Search />} />
          <Route
            exact
            path="/"
            render={() => <BookList books={this.state.books} />}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
