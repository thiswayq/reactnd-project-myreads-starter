import React from "react";
import "./App.css";

class BookInfo extends React.Component {
  handleChange = event => {
    this.props.onUpdate(this.props.book, event.target.value);
  };
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <img
            className="book-cover"
            src={this.props.book.imageLinks.thumbnail}
          />
          <div className="book-shelf-changer">
            <select value={this.props.book.shelf} onChange={this.handleChange}>
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default BookInfo;
