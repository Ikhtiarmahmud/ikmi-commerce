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
import { Link, useHistory } from 'react-router-dom';
import { StoreCategory } from './action';
import { useDispatch } from 'react-redux';

const CreateCategory = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [status, setStatus] = useState();
    const [categoryData, setCategoryData] = useState({ name: null, description: null})

    const SubmitHandler = () => {
        dispatch(StoreCategory(categoryData))
            .then(() => {
                setStatus(true)
            })
            .catch(() => setStatus(false))
    }

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
            {
                status == true && <span style={
                    { backgroundColor: "green", padding: "10px", color: "white" }
                }>Category Added Successfully :) </span>
            }
            {
                status == false &&  <span style={
                    { backgroundColor: "red", padding: "10px", color: "white" }
                }>Something went wrong! Please try again -_- </span>
            }
            <div className={
                    classes.table
                }
                aria-label="simple table"
                className={
                    classes.inputBox
            }>
                <div>
                    <TextField id="standard-search" label="name" type="search" onChange={(e) => setCategoryData(state => ({
                        ...state,
                        name: e.target.value
                    }))}/>
                </div>
                <div>
                    <TextField id="standard-search" label="description" type="search" onChange={(e) => setCategoryData(state => ({
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