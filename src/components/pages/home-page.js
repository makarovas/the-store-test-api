import React from 'react';
import { Spinner } from '../spinner/Spinner';
import BookList from "../book-list/book-list";
import PropTypes from 'prop-types';


const HomePage = ({ books }) => {
	return (
		<BookList />
	);
};

HomePage.propTypes = {
	books: PropTypes.array
};

// HomePage.defaultProps = {
// 	books: [
// 		{
// 			id: 1,
// 			name: 'Production-Ready Microservices',
// 			author: 'Susan J. Fowler'
// 		},
// 		{
// 			id: 2,
// 			name: 'Release It!',
// 			author: 'Michael T. Nygard'
// 		}
// 	]
// };



export { HomePage };