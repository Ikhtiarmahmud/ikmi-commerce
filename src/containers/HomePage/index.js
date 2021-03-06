import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/Header';
import Footer from '../../components/Footer/index';
import Banner from '../../components/Banner/index';
import Navbar from '../../components/Navbar';
import Product from '../../components/Product';
import ProductDetails from '../../components/ProductDetails'
import useStyles from './style';


const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Header />
      <Banner />
      <Navbar />
      <ProductDetails />
      <Footer />
    </>
  );
}

export default HomePage;