import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookInfo from "./BookInfo";
class Search extends Component {
  state = {
    searchedBooks: [],
    errorMessage: false
  };
  makeSearch = query => {
    if (!query) {
      this.setState(state => {
        state.searchedBooks = [];
        state.errorMessage = false;
      });
    } else {
      BooksAPI.search(query).then(response => {
        if (!response.error) {
          response.map(searchedBook => {
            Object.keys(this.props.books).map(shelf =>
              this.props.books[shelf].books.map(book => {
                if (searchedBook.id === book.id) {
                  searchedBook.shelf = book.shelf;
                }
                if (!searchedBook.shelf) {
                  searchedBook.shelf = "none";
                }
              })
            );
          });
          this.setState(state => {
            state.searchedBooks = response;
            state.errorMessage = false;
          });
        } else {
          this.setState(state => {
            state.searchedBook = [];
            state.errorMessage = true;
          });
        }
      });
    }
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.makeSearch(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.errorMessage ? (
              <h1>Couldn't find the given book</h1>
            ) : (
              this.state.searchedBooks.map(book => (
                <li key={book.id}>
                  <BookInfo book={book} onUpdate={this.props.onUpdate} />
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
