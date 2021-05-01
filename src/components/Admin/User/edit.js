import React, { useState, useEffect } from 'react';
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
import { UPDATED_MESSAGE, ERROR_MESSAGE } from '../../../utils/constants';
import { UpdateUserData, GetSingleUser } from './action';
import Message from '../../Message';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';

const EditUser = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const params = useParams();
    const [status, setStatus] = useState();
    const { user }  = useSelector(state => state.usersStore);
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

    const selectedUserId = params.id;

    const SubmitHandler = () => {
        dispatch(UpdateUserData(userData, selectedUserId))
            .then(() => setStatus(true))
            .catch(() => setStatus(false))
    }

    useEffect(() => {
        dispatch(GetSingleUser(selectedUserId));
    }, [])

    useEffect(() => {
        setUserData(user);
    }, [user])

    const handleChange = (event) => {
        setUserData(state => ({
            ...state,
            role: event.target.value,
        }));
      };

    let message = status === true ? UPDATED_MESSAGE : ERROR_MESSAGE;

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
                    &nbsp;Edit Category
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
                        <TextField placeholder="First Name" value={userData.firstname} onChange={(e) => setUserData(state => ({
                            ...state,
                            firstname: e.target.value
                        }))}/>
                    </div>
                    <div>
                        <TextField placeholder="Last Name" value={userData.lastname} onChange={(e) => setUserData(state => ({
                            ...state,
                            lastname: e.target.value
                        }))}/>
                    </div>
                </Grid>

            <Grid container direction="row" justify="flex-start" alignItems="center">
                    <div className={classes.ml2}>
                        <TextField placeholder="Email" value={userData.email} onChange={(e) => setUserData(state => ({
                            ...state,
                            email: e.target.value
                        }))}/>
                    </div>
                    <div>
                        <TextField placeholder="Username" value={userData.username} onChange={(e) => setUserData(state => ({
                            ...state,
                            username: e.target.value
                        }))}/>
                    </div>
                </Grid>

            <Grid container direction="row" justify="flex-start" alignItems="center">
                    <div className={classes.ml2}>
                        <TextField placeholder="Phone" value={userData.phone} onChange={(e) => setUserData(state => ({
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
                                <option key="user" value="user">User</option>
                                <option key="admin" value="admin">Admin</option>
                                </Select>
                            </FormControl>
                    </div>
               </Grid>

            <Grid container direction="row" justify="flex-start" alignItems="center">
                    <div className={classes.ml2}>
                        <TextField placeholder="City" onChange={(e) => setUserData(state => ({
                            ...state,
                            address: {
                                ...state.address,
                                city: e.target.value
                             }
                        }))}/>
                    </div>
                    <div>
                        <TextField placeholder="Street" onChange={(e) => setUserData(state => ({
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
                        <TextField placeholder="House Number" onChange={(e) => setUserData(state => ({
                            ...state,
                            address: {
                                ...state.address,
                                number: e.target.value
                             }
                        }))}/>
                    </div>
                    <div>
                        <TextField placeholder="Zip Code" onChange={(e) => setUserData(state => ({
                            ...state,
                            address: {
                                ...state.address,
                                zipcode: e.target.value
                             }
                        }))}/>
                    </div>
                </Grid>
            <div>
                <Button className={
                        classes.cartBtn
                    }
                    variant="contained" onClick={SubmitHandler}>Update</Button>
            </div>
         </div>
        </TableContainer>
    );
}

export default EditUser
