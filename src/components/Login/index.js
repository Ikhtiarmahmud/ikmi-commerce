import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import useStyles from './style';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSignIn } from '../../containers/Account/action';

const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const [signInData, setSignInData] = useState({ email: null, password: null })
    const [signInErr, setSignInErr] = useState(false);
    const [signInFail, setSignInFail] = useState(false);

    const signIn = () => {
        if (!signInData.email || !signInData.password) {
            setSignInErr(true);
        } else {
            setSignInErr(false);

            dispatch(userSignIn(signInData))
                .then(() => history.push('/profile'))
                .catch(() => setSignInFail(true));
        }
    }

    return (
        <>
            <Typography className={
                classes.title
            }
                gutterBottom
                variant="h3"
                align="left">
                <RadioButtonUncheckedIcon />
                &nbsp;Login
            </Typography>
            <TextField id="standard-search" label="Email" type="search"
                onChange={
                    (e) => setSignInData(state => ({
                        ...state,
                        email: e.target.value
                    }))
                } />
            <br /><br />
            <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password"
                onChange={
                    (e) => setSignInData(state => ({
                        ...state,
                        password: e.target.value
                    }))
                } />
            <br />
            <br /> {
                signInErr && <span style={
                    { color: "red" }
                }>* All field are required</span>
            }
            {
                signInFail && <span style={{ color: "red" }}>Email or Password doesn't match!</span>}
            <br />
            <Button onClick={signIn} className={classes.cartBtn} variant="contained">Login</Button>
        </>
    )
}

export default Login;
