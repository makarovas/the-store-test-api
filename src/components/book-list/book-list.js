import React, {Component} from 'react';
import {BookListItem} from '../book-list-item';
import styled from 'styled-components';

class BookList extends Component {
    componentDidMount() {
    }

    render() {
        const {books} = this.props;

        return (
            <ul>
                {books.map((book)=>{
                    return (<li key={book.id}>{<BookListItem book={book}/>}</li>)
                })}
            </ul>
        );
    }
}

export  {BookList};