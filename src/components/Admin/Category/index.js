import React from 'react';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import useStyles from './style';

const Category = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
        <Typography className={
            classes.title
        }
            gutterBottom
            variant="h3"
            align="left">
            <RadioButtonUncheckedIcon />
            &nbsp;Category
        </Typography>
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

export default Category;