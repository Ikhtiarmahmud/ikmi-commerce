import React, { useState, useEffect } from 'react';
import {
    TableContainer,
    Paper,
    Typography,
    Grid,
    Button,
    TextField
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { UPDATED_MESSAGE, ERROR_MESSAGE } from '../../../utils/constants';
import { UpdateCategory, GetSingleCategory } from './action';
import Message from '../../Message';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './style';

const EditUser = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const params = useParams();
    const [status, setStatus] = useState();
    const { category } = useSelector(state => state.categoryStore);
    const [categoryData, setCategoryData] = useState({})

    const SubmitHandler = () => {
        dispatch(UpdateCategory(categoryData))
            .then(() => setStatus(true))
            .catch(() => setStatus(false))
    }

    useEffect(() => {
        dispatch(GetSingleCategory(params.id));
    }, [])

    useEffect(() => {
        setCategoryData(category);
    }, [category])

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
                <div>
                    <TextField placeholder="Name" value={categoryData.name} onChange={(e) => setCategoryData(state => ({
                        ...state,
                        name: e.target.value
                    }))}/>
                </div>
                <div>
                    <TextField placeholder="Description" value={categoryData.description} type="search" onChange={(e) => setCategoryData(state => ({
                        ...state,
                        description: e.target.value
                    }))}/>
                </div>
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
