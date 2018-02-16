import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Search from "./Search";
import BookList from "./BookList";
import { BrowserRouter as Router, Route } from "react-router-dom";

class BooksApp extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/search" render={() => <Search />} />
          <Route exact path="/" render={() => <BookList />} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
