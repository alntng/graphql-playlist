import React, { Component } from "react";
import { graphql } from "react-apollo";
import flowright from "lodash.flowright";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery
} from "../queries/queries";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genre: "",
      authorId: ""
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    // console.log(this.props.addBookMutation);
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  render() {
    let authors = this.props.getAuthorsQuery.authors;

    return (
      <form id="add-book" onSubmit={this.submitForm}>
        <div className="field">
          <label>Book Name:</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={e => this.setState({ genre: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={e => this.setState({ authorId: e.target.value })}>
            <option>Select Author</option>
            {authors &&
              authors.map(author => {
                return (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                );
              })}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default flowright(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
