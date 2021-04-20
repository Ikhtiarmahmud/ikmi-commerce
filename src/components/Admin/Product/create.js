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
import useStyles from './style';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Message from '../../Message';
import { GetCategories, StoreProduct } from './action';
import { ADDED_MESSAGE, ERROR_MESSAGE } from './../../../utils/constants';

const CreateProduct = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [status, setStatus] = useState();
    const [productData, setProductData] = useState({})
    const [categories, setCategories] = useState([]);

    const SubmitHandler = () => {
        dispatch(StoreProduct(productData))
            .then(() => setStatus(true))
            .catch(err => setStatus(false))
    }

    useEffect(() => {
        dispatch(GetCategories())
            .then((res) => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleChange = (event) => {
        setProductData(state => ({
            ...state,
            category: {
                _id : event.target.value,
            }
        }));
      };

    const encodeImageFileAsURL = (element) => {
        var file = element.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            setProductData(state => ({
                ...state,
                image: reader.result
            }));
        }
        reader.readAsDataURL(file);
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
                    &nbsp;Add Product
                </Typography>
                <div style={
                    {padding: "15px"}
                }>
                    <Link className={
                            classes.link
                        }
                        to="/profile/product">
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
                    <TextField label="name" onChange={(e) => setProductData(state => ({
                        ...state,
                        title: e.target.value
                    }))}/>
                </div>
                <div>
                    <TextField label="price" onChange={(e) => setProductData(state => ({
                        ...state,
                        price: Number(e.target.value)
                    }))}/>
                </div>
                <div>
                    <TextField label="description" onChange={(e) => setProductData(state => ({
                        ...state,
                        description: e.target.value
                    }))}/>
                </div>
                <div>
                    <TextField label="stock" onChange={(e) => setProductData(state => ({
                        ...state,
                        stock: Number(e.target.value)
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
                    <option aria-label="None" value="" />
                    {
                        categories.map(category => {
                            return (
                                <option value={category._id}>{category.name}</option>
                            )
                        })
                    }
                    </Select>
                </FormControl>
                </div>
                <div>
                    <input type="file" onChange={encodeImageFileAsURL}/>
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

export default CreateProduct;
