import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import ErrorBoundry from './components/error-boundry/ErrorBoundry'
import BookStoreService from './services/bookstore-service'
import { BookStoreServiceProvider } from './components/bookstore-service-context'
import { store } from './store';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';


const bookstoreService = new BookStoreService();



ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<BookStoreServiceProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookStoreServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
