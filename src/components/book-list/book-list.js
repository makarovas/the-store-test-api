import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { BookListItem } from '../book-list-item';
import { withBookService } from '../hoc';
import { booksLoaded } from '../../actions';
class BookList extends Component {
  componentDidMount() {
    // 1 receive data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // 2 dispatch
  }

  render() {
    const { books } = this.props;
    this.props.booksLoaded(data);
    return (
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return { books }
};

const mapDispatchToProps = (dispatch) => {
  booksLoaded
}
export default withBookService()(
  connect(
    mapStateToProps,
    mapDispatchToProps)
    (BookList));
