import React from 'react';
import  {BookStoreServiceConsumer}  from '../bookstore-service-context';

const withBookService = () => (Wrapped) => {
	return (props) => {
		return (
			<BookStoreServiceConsumer >
				{(bookStoreService) => {
					return (
						<Wrapped
							{...props}
							bookStoreService={bookStoreService}
						/>
					)
				}}
			</BookStoreServiceConsumer>
		)
	}
}
export { withBookService };