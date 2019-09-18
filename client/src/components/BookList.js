import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from "../queries/queries";

class BookList extends Component {
  render() {
    let { data } = this.props;
    let books = data.books;
    return (
      <div>
        <ul id="book-list">
          {books &&
            books.map(book => {
              return <li key={book.id}>{book.name}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
