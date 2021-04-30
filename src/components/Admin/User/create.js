import React, { useState } from 'react';
import {
    TableContainer,
    Paper,
    Typography,
    Grid,
    Button,
    TextField,
    FormControl,
    InputLabel, Select
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import useStyles from './style';
import { Link } from 'react-router-dom';
import { StoreUser } from './action';
import { useDispatch } from 'react-redux';
import Message from '../../Message';
import { ADDED_MESSAGE, ERROR_MESSAGE } from './../../../utils/constants';

const CreateUser = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [status, setStatus] = useState();
    const [userData, setUserData] = useState({
            firstname: null, 
            lastname: null,
            email: null,
            username: null,
            phone: null,
            role: null,
            password: null,
            address: {
                getLocation: {
                    lat: 0,
                    long: 0,
                },
                city: null,
                street: null,
                number: null,
                zipcode: null
            }
        })

    const SubmitHandler = () => {
        dispatch(StoreUser(userData))
            .then(() => setStatus(true))
            .catch(() => setStatus(false))
    }

    const handleChange = (event) => {
        setUserData(state => ({
            ...state,
            role: event.target.value,
        }));
      };

    let message = status === true ? ADDED_MESSAGE : ERROR_MESSAGE;

    return (
        <TableContainer component={Paper}>
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
                <Typography className={
                        classes.title
                    }
                    gutterBottom
                    variant="h3"
                    align="left">
                    <RadioButtonUncheckedIcon/>
                    &nbsp;Add User
                </Typography>
                <div style={
                    {padding: "15px"}
                }>
                    <Link className={
                            classes.link
                        }
                        to="/profile/category">
                        <Button className={
                                classes.cartBtn
                            }
                            variant="contained">List</Button>
                    </Link>
                </div>
            </Grid>
            <br /> 

            <Message status={status} message={message}/>

            <div className={
                    classes.table
                }
                aria-label="simple table"
                className={
                    classes.inputBox
            }>
                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <div className={classes.ml2}>
                        <TextField label="First Name"  onChange={(e) => setUserData(state => ({
                            ...state,
                            firstname: e.target.value
                        }))}/>
                    </div>
                    <div>
                        <TextField label="Last Name"  onChange={(e) => setUserData(state => ({
                            ...state,
                            lastname: e.target.value
                        }))}/>
                    </div>
                </Grid>

                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <div className={classes.ml2}>
                        <TextField label="Email"  onChange={(e) => setUserData(state => ({
                            ...state,
                            email: e.target.value
                        }))}/>
                    </div>
                    <div>
                        <TextField label="Username"  onChange={(e) => setUserData(state => ({
                            ...state,
                            username: e.target.value
                        }))}/>
                    </div>
                </Grid>

                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <div className={classes.ml2}>
                        <TextField label="Phone"  onChange={(e) => setUserData(state => ({
                            ...state,
                            phone: e.target.value
                        }))}/>
                    </div>
                    <div>
                        <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="outlined-age-native-simple">Category</InputLabel>
                                <Select
                                native
                                onChange={handleChange}
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                >
                                <option>Select One</option>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                                </Select>
                            </FormControl>
                    </div>
               </Grid>

               <Grid container direction="row" justify="flex-start" alignItems="center">
                    <div className={classes.ml2}>
                        <TextField label="City"  onChange={(e) => setUserData(state => ({
                            ...state,
                            address: {
                                ...state.address,
                                city: e.target.value
                             }
                        }))}/>
                    </div>
                    <div>
                        <TextField label="Street"  onChange={(e) => setUserData(state => ({
                            ...state,
                            address: {
                                ...state.address,
                                street: e.target.value
                             }
                        }))}/>
                    </div>
                </Grid>

                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <div className={classes.ml2}>
                        <TextField label="House Number"  onChange={(e) => setUserData(state => ({
                            ...state,
                            address: {
                                ...state.address,
                                number: e.target.value
                             }
                        }))}/>
                    </div>
                    <div>
                        <TextField label="Zip Code"  onChange={(e) => setUserData(state => ({
                            ...state,
                            address: {
                                ...state.address,
                                zipcode: e.target.value
                             }
                        }))}/>
                    </div>
                </Grid>

                <Grid container direction="row" justify="flex-start" alignItems="center">
                    <div className={classes.ml2}>
                        <TextField type="password" label="Password"  onChange={(e) => setUserData(state => ({
                            ...state,
                            password: e.target.value
                        }))}/>
                    </div>
                </Grid>

                <div>
                    <Button className={
                            classes.cartBtn
                        }
                        variant="contained" onClick={SubmitHandler}>Create</Button>
                </div>
            </div>
        </TableContainer>
    );
}

export default CreateUser
