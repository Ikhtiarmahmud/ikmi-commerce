import React from 'react';
import {
    Typography,
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import useStyles from './style';

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const Account = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container
                className={
                    classes.grid
                }
                spacing={3}>
                <Grid item
                    md={6}
                    xs={12}
                    sm={6}>
                    <Typography className={
                            classes.title
                        }
                        gutterBottom
                        variant="h3"
                        align="left">
                        <RadioButtonUncheckedIcon/>  Login
                    </Typography>
                    <TextField id="standard-search" label="Email" type="search" />
                    <br /><br />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <br /> <br />
                    <Button className={classes.cartBtn} variant="contained">Login</Button>
                </Grid>
                <Grid item
                    md={6}
                    xs={12}
                    sm={6}>
                         <Typography className={
                            classes.title
                        }
                        gutterBottom
                        variant="h3"
                        align="left">
                        <RadioButtonUncheckedIcon/>  Register
                    </Typography>
                    <TextField id="standard-search" label="First Name" type="search" />
                    <br /><br />
                    <TextField id="standard-search" label="Last Name" type="search" />
                    <br /><br />
                    <TextField id="standard-search" label="User Name" type="search" />
                    <br /><br />
                    <TextField id="standard-search" label="Email" type="search" />
                    <br /><br />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <br /> <br />
                    <Button className={classes.cartBtn} variant="contained">Register</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Account;
