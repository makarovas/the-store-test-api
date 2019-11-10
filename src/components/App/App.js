import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { HomePage, CardPage } from '../pages';
const App = () => {
  return (
    <div >
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact
        />
        <Route
          path='/Cart'
          component={CardPage}
        />
      </Switch>
    </div>
  );
}

export default App;
