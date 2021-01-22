import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Checkout from './pages/Checkout';
import { CartProductContextProvider } from './cart.context';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <CartProductContextProvider>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/categories/:categoryId">
              <Categories />
            </Route>

            <Route path="/checkout">
              <Checkout />
            </Route>
          </CartProductContextProvider>
          <Route>
            <div>404 page</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
