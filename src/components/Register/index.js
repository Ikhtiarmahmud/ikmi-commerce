import React, {useState} from 'react';
import {Typography, TextField, Button} from '@material-ui/core';
import useStyles from './style';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../containers/Account/action';
import { BASE_URL } from '../../utils/constants';

const Register = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [signUpData, setSignUpData] = useState({
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        username: null
    });

    const [signUpErr, setSignUpErr] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const [signUpFail, setSignUpFail] = useState(false);

    const signUp = () => {
        if (!signUpData.firstname || !signUpData.lastname || !signUpData.email || !signUpData.password || !signUpData.username) {
            setSignUpErr(true);
        } else {
            setSignUpErr(false);

            // try {
            //     dispatch(userSignUp());
            //     setSignUpSuccess(true);
            // } catch (err) {
            //     setSignUpFail(true);
            // }

            axios.post(`${BASE_URL}/signup`, signUpData).then((res) => {
                setSignUpSuccess(true);
            }).catch((err) => {
                console.log(err.message);
                setSignUpFail(true)
            })
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
                <RadioButtonUncheckedIcon/>
                &nbsp;Register
            </Typography>
            <TextField id="standard-search" label="First Name" type="search"
                onChange={
                    (e) => setSignUpData(state => ({
                        ...state,
                        firstname: e.target.value
                    }))
                }/>
            <br/><br/>
            <TextField id="standard-search" label="Last Name" type="search"
                onChange={
                    (e) => setSignUpData(state => ({
                        ...state,
                        lastname: e.target.value
                    }))
                }/>
            <br/><br/>
            <TextField id="standard-search" label="User Name" type="search"
                onChange={
                    (e) => setSignUpData(state => ({
                        ...state,
                        username: e.target.value
                    }))
                }/>
            <br/><br/>
            <TextField id="standard-search" label="Email" type="search"
                onChange={
                    (e) => setSignUpData(state => ({
                        ...state,
                        email: e.target.value
                    }))
                }/>
            <br/><br/>
            <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password"
                onChange={
                    (e) => setSignUpData(state => ({
                        ...state,
                        password: e.target.value
                    }))
                }/>
            <br/>
            <br/> {
            signUpErr && <span style={
                {color: "red"}
            }>* All field are required</span>
        }
            {
            signUpSuccess && <span style={
                {color: "green"}
            }>* Sign up successful. Please login!</span>
        }
            {
            signUpFail && <span style={
                {color: "red"}
            }>
                failed. Please try again
            </span>
        }
            <br/>
            <Button onClick={signUp}
                className={
                    classes.cartBtn
                }
                variant="contained">Register</Button>
        </>
    )
}

export default Register;
