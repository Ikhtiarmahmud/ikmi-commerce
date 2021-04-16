import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Navbar from '../../components/Navbar';
import useStyles from './style';
import { useDispatch } from 'react-redux';
import { StoreProducts } from './action';
import Routes from '../../utils/routes';


const HomePage = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(StoreProducts());
  }, []);

  return (
    <>
      <CssBaseline />
        <Header />
        <Banner />
        <Navbar />
        <Routes />
        <Footer />
    </>
  );
}

export default HomePage;