import React from 'react';
import BookStoreService from '../../services/bookstore-service';
import { Spinner } from './../spinner/Spinner'
const App = () => {
  return (
    <div className="App">
      <BookStoreService />
      <Spinner />
    </div>
  );
}

export default App;
