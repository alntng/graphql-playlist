import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from "../queries/queries";

class AddBook extends Component {
  render() {
    let { data } = this.props;
    let authors = data.authors;
    return (
      <form id="add-book">
        <div className="field">
          <label>Book Name:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" />
        </div>

        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select Author</option>
            {authors &&
              authors.map(author => {
                return (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                );
              })}
            {/* <option>Select Author</option> */}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default graphql(getAuthorsQuery)(AddBook);
