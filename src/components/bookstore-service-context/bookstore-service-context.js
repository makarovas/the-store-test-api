import React, { createContext } from 'react';
import {
	Provider,
	Consumer
} from 'react-redux';

const {
	Provider: BookStoreServiceProvider,
	Consumer: BookStoreServiceConsumer
} = createContext();

const BookStoreServiceContext = () => {
	return (
		<div>

		</div>
	);
};

export { BookStoreServiceConsumer, BookStoreServiceProvider };