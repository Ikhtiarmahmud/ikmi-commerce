import React from 'react';
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

const CategoryList = () => {
  const classes = useStyles();

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
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((row) => ( */}
            <TableRow>
              <TableCell component="th" scope="row">1</TableCell>
              <TableCell align="right">&nbsp;&nbsp;Electronics</TableCell>
              <TableCell align="right">Lorem ipsum Simply</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">1</TableCell>
              <TableCell align="right">&nbsp;&nbsp;Electronics</TableCell>
              <TableCell align="right">Lorem ipsum Simply</TableCell>
            </TableRow>
          {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CategoryList;