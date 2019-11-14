import React, { Component } from 'react';
import { BookListItem } from '../book-list-item';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withBookService } from '../hoc';
class BookList extends Component {
    componentDidMount() {
        // 1 receive data
        const { bookstoreService } = this.props;
        const data = bookstoreService.getBooks();

        // 2 dispatch
    }

    render() {
        const { books } = this.props;

        return (
            <ul>
                {books.map((book) => {
                    return (
                        <li key={book.id}>{
                            <BookListItem book={book} />}
                        </li>)
                })}
            </ul>
        );
    }
}

const mapStateToProps = ({ books }) => {
    return { books }
}
export default withBookService()(connect(mapStateToProps)(BookList));