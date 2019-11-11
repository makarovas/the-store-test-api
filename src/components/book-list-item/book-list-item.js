import React from 'react';
import PropTypes from 'prop-types';
import  styled from 'styled-components';


const BookListItem = ({book}) => {
    const {name, author} = book;
    return (
        <>
            <span>{name}</span>
            <span>{author}</span>
        </>
    );
};

BookListItem.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
};

BookListItem.defaultProps = {
    title: '',
    author: ''
};

export  {BookListItem};