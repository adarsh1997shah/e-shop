import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/categories/:categoryId">
            <Categories />
          </Route>
          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route>
            <div>404 page</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
