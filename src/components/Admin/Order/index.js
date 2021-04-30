import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { StoreOrderList } from './action';
import Message from '../../Message';
import { DELETED_MESSAGE, ERROR_MESSAGE } from './../../../utils/constants';

const OrderList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    dispatch(StoreOrderList());
  }, [status])

  const orders = useSelector(state => state.orderStore.products)
 
  let message = status === true ? DELETED_MESSAGE : ERROR_MESSAGE

  return (
    <TableContainer component={Paper}>
        <Grid container
              direction="row"
              justify="space-between"
              alignItems="flex-start" >
          <Typography className={
              classes.title
          }
              gutterBottom
              variant="h3"
              align="left">
              <RadioButtonUncheckedIcon />
              &nbsp;Order List
          </Typography>
        </Grid>
        <Message status={status} message={message}/>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Total Product</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { orders.map((row, index) => (
            <TableRow>
              <TableCell component="th" scope="row">{index+1}</TableCell>
              <TableCell align="right">&nbsp;&nbsp;{row.date}</TableCell>
              <TableCell align="right">{row.products.length}</TableCell>
              <TableCell align="right"><Button>View</Button></TableCell>
            </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderList;