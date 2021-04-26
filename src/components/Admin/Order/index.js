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
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import useStyles from './style';
import { StoreOrderList } from './action';
import Message from '../../Message';
import { DELETED_MESSAGE, ERROR_MESSAGE } from './../../../utils/constants';

const OrderList = () => {
  console.log('dsaf')
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
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* { categories.map((row, index) => (
            <TableRow>
              <TableCell component="th" scope="row">{index+1}</TableCell>
              <TableCell align="right">&nbsp;&nbsp;{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right"><Button>Edit</Button> | <Button onClick={() => deleteHanlder(row._id)}>Delete</Button></TableCell>
            </TableRow>
           ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderList;