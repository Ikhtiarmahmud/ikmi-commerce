import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import  useStyles  from './style';
import { Link, useHistory } from 'react-router-dom';

const Sidebar = () => {

    const classes = useStyles();
    const history = useHistory();

    const loadComponent = (slug) => {
        history.push(`/profile/${slug}`)
    }

    return (
        <div>
            <AppBar className={
                classes.root
            }
                position="static">
                <Toolbar variant="dense">
                    <Grid container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                        className={
                            classes.item
                        }>
                        <MenuItem onClick={() => loadComponent('dashboard')}>Dashboard</MenuItem>
                        <MenuItem onClick={() => loadComponent('category')}>Category</MenuItem>
                        <MenuItem>Product</MenuItem>
                        <MenuItem>Order</MenuItem>
                        <MenuItem>User</MenuItem>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Sidebar;
