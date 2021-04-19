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
import { Link } from 'react-router-dom';
import { StoreCategoryList, DeleteCategory } from './action';
import Message from '../../Message';
import { DELETED_MESSAGE, ERROR_MESSAGE } from './../../../utils/constants';

const CategoryList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(null);

  const deleteHanlder = (id) => {
    dispatch(DeleteCategory(id)).then(() => setStatus(true)).catch(() => setStatus(false))
  }

  useEffect(() => {
    dispatch(StoreCategoryList());
  }, [status])

  const categories = useSelector(state => state.categoryStore.categories)
 
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
              &nbsp;Category List
          </Typography>
          <div style={{padding:"15px"}}><Link className={classes.link} to="/profile/category/create"><Button className={classes.cartBtn} variant="contained">Create</Button></Link></div>
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
          { categories.map((row, index) => (
            <TableRow>
              <TableCell component="th" scope="row">{index+1}</TableCell>
              <TableCell align="right">&nbsp;&nbsp;{row.name}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right"><Button>Edit</Button> | <Button onClick={() => deleteHanlder(row._id)}>Delete</Button></TableCell>
            </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CategoryList;