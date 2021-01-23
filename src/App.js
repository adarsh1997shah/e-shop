import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CartProductContextProvider } from './cart.context';

import Home from './pages/Home';
import { Loader } from './styles/styles';

const Categories = lazy(() => import('./pages/Categories'));
const Checkout = lazy(() => import('./pages/Checkout'));

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
              <Suspense fallback={<Loader>Loading...</Loader>}>
                <Categories />
              </Suspense>
            </Route>

            <Route path="/checkout">
              <Suspense fallback={<Loader>Loading...</Loader>}>
                <Checkout />
              </Suspense>
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
