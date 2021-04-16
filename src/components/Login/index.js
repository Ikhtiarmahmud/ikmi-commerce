import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import useStyles from './style';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSignIn } from '../../containers/Account/action';
import { BASE_URL } from '../../utils/constants';

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

            // try {
            //     dispatch(userSignIn(signInData));
            //     history.push('/profile');
            // } catch(err) {
            //     setSignInFail(true);
            // }
            
            axios.post(`${BASE_URL}/signin`, signInData).then((res) => {
                const { userInfo } = res.data;
                sessionStorage.setItem('user', userInfo.user);
                sessionStorage.setItem('token', userInfo.token);
                sessionStorage.setItem('auth', true);
                history.push('/profile');
            }).catch((err) => {
                console.log(err.message);
                setSignInFail(true);
            });
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
                }/>
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
