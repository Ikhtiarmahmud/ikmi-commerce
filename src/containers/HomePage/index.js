import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import Product from '../../components/Product';
import ProductDetails from '../../components/ProductDetails'
import PageNotFound from '../../components/PageNotFound';
import useStyles from './style';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Router>
        <Header />
        <Banner />
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Product />
            </Route>

            <Route exact path="/details">
              <ProductDetails />
            </Route>

            <Route exact path="/404">
              <PageNotFound />
            </Route>

            <Route path={'*'} render={() => <Redirect to={'/404'} />} />
        </Switch>
        <Footer />
    </Router>
    </>
  );
}

export default HomePage;