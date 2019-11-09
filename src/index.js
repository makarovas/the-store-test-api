import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { ErrorBoundry } from './components/error-boundry/ErrorBoundry'
import BookStoreService from './services/bookstore-service'
import { BookStoreServiceProvider } from './components/bookstore-service-context/'
import store from './store'
const bookstoreService = new BookStoreService();



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
