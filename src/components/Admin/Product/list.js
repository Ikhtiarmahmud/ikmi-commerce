import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { DeleteProduct } from "./action";
import { Link } from 'react-router-dom';
import Message from '../../Message';

const ProductList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(state => state.productStore.products);
  const [status, setStatus] = useState(null)

  const deleteHandler = (id) => {
    dispatch(DeleteProduct(id))
            .then(() => setStatus(true))
            .catch(() => setStatus(false))
  }

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
              &nbsp;Product List
          </Typography>
          <div style={{padding:"15px"}}><Link className={classes.link} to="/profile/product/create"><Button className={classes.cartBtn} variant="contained">Create</Button></Link></div>
        </Grid>
        <Message status={status}/>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            products.map((product, index) => {
              return (
                <TableRow>
                  <TableCell component="th" scope="row">{index+1}</TableCell>
                  <TableCell align="right">&nbsp;&nbsp;{product.title}</TableCell>
                  <TableCell align="right">{product.description}</TableCell>
                  <TableCell align="right">{product.price}</TableCell>
                  <TableCell align="right"><Button  onClick={() => deleteHandler(product._id)}>Delete</Button></TableCell>
                </TableRow>
            )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ProductList;