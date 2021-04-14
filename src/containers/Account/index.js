import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './style';
import Register from '../../components/Register';
import Login from '../../components/Login';

const Account = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container
                className={
                    classes.grid
                }
                spacing={3}>

                {/* Login Part */}
                <Grid item
                    md={6}
                    xs={12}
                    sm={6}>
                    <Login />
                </Grid>

                {/* Registration Part */}
                <Grid item
                    md={6}
                    xs={12}
                    sm={6}>
                    <Register />
                </Grid>
            </Grid>
        </>
        )
    }
    
export default Account;
