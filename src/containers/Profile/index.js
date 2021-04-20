import React from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import Category from '../../components/Admin/Category';
import Dashboard from '../../components/Admin/Dashboard';
import Product from '../../components/Admin/Product';
import {
    Grid
} from '@material-ui/core';
import { Route } from 'react-router-dom';

const Profile = () => {

    return (
        <Grid style={{
        marginTop: "20px", padding: "0 35px"}} container spacing={3}>
            <Grid item
                    md={2}
                    xs={6}
                    sm={4}>
                <Sidebar />
            </Grid>
           <Grid item
                 md={10}
                 xs={12}
                 sm={8}>
                <Route exact path="/profile">
                    <Dashboard />
                </Route>
                <Route path="/profile/category">
                    <Category />
                </Route>
                <Route path="/profile/product">
                    <Product />
                </Route>
           </Grid>
        </Grid>
       
    )
}

export default Profile;