import React from 'react';
import Product from '../components/Product';
import ProductDetails from '../components/ProductDetails'
import PageNotFound from '../components/PageNotFound';
import Account from '../containers/Account';
import ProtectedRoute from './ProtectedRoute';
import Profile from '../containers/Profile';
import { Route, Switch, Redirect} from 'react-router-dom';

const Routes = () => {
  return (
    <>
        <Switch>
            <Route exact path="/">
                <Product />
            </Route>

            <Route exact path="/details/:id">
              <ProductDetails />
            </Route>

            <Route exact path="/404">
              <PageNotFound />
            </Route>

            <Route exact path="/account">
              <Account />
            </Route>

            <ProtectedRoute exact path="/profile/:slug?/:subSlug?">
                <Profile />
            </ProtectedRoute>

            <Route path={'*'} render={() => <Redirect to={'/404'} />} />
        </Switch>
    </>
  );
}

export default Routes;