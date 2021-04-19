import React, { useState } from 'react';
import {
    TableContainer,
    Paper,
    Typography,
    Grid,
    Button,
    TextField
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import useStyles from './style';
import { Link } from 'react-router-dom';
import { StoreCategory } from './action';
import { useDispatch } from 'react-redux';
import Message from '../../Message';
import { ADDED_MESSAGE, ERROR_MESSAGE } from './../../../utils/constants';

const CreateCategory = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [status, setStatus] = useState();
    const [categoryData, setCategoryData] = useState({ name: null, description: null})

    const SubmitHandler = () => {
        dispatch(StoreCategory(categoryData))
            .then(() => setStatus(true))
            .catch(() => setStatus(false))
    }

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
                    &nbsp;Add Category
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
                <div>
                    <TextField label="name"  onChange={(e) => setCategoryData(state => ({
                        ...state,
                        name: e.target.value
                    }))}/>
                </div>
                <div>
                    <TextField label="description" type="search" onChange={(e) => setCategoryData(state => ({
                        ...state,
                        description: e.target.value
                    }))}/>
                </div>
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

export default CreateCategory;
