import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Grid,
    Button
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import useStyles from './style';
import { GetCartItems, UpdateCart } from "./action";
import {Link, useHistory} from 'react-router-dom';
import Message from './../../components/Message';
import {DELETED_MESSAGE, ERROR_MESSAGE} from './../../utils/constants';

const Cart = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [grandTotal, setGrandTotal] = useState(0);
    const cartItems   = useSelector(state => state.cartStore.cartItems);
    const [status, setStatus] = useState(null)

    useEffect(() => {
        dispatch(GetCartItems());
    }, []);

    // const viewHandler = (id) => {
    //      history.push(`/details/${id}`);
    // }

    let message = status === true ? DELETED_MESSAGE : ERROR_MESSAGE;

    return (
      <Grid className={classes.grid} container spacing={3}>
                <Grid item
            md={12}
            xs={12}
            sm={12}>
            <TableContainer component={Paper}>
                <Grid container direction="row" justify="space-between" alignItems="flex-start">
                    <Typography className={
                            classes.title
                        }
                        gutterBottom
                        variant="h3"
                        align="left">
                        <RadioButtonUncheckedIcon/>
                        &nbsp;Cart Items
                    </Typography>
                </Grid>
                <Message status={status}
                    message={message}/>
                <Table className={
                        classes.table
                    }
                    aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Sl</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody> 
                        {
                            Object.keys(cartItems).length !== 0 && cartItems.products.map(({productId, quantity}, index) => {
                                // setGrandTotal(grandTotal + quantity * productId.price)
                                return (
                                    <TableRow>
                                        <TableCell component="th" scope="row">{index++}</TableCell>
                                        <TableCell align="right">&nbsp;&nbsp;{productId.title}</TableCell>
                                        <TableCell align="right">{productId.price}</TableCell>
                                        <TableCell align="right">{quantity}</TableCell>
                                        <TableCell align="right">{quantity * productId.price}</TableCell>
                                    </TableRow>
                                )
                            })
                        }
                         <TableRow>
                            <TableCell component="th" scope="row"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">Grand Total</TableCell>
                            <TableCell align="right">{grandTotal}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
      </Grid>

    );
}

export default Cart;