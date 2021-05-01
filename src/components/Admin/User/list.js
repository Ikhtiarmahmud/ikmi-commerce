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
import { Link, useHistory } from 'react-router-dom';
import { StoreUserList, DeleteUser } from './action';
import Message from '../../Message';
import { DELETED_MESSAGE, ERROR_MESSAGE } from './../../../utils/constants';

const UserList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [status, setStatus] = useState(null);

  const deleteHanlder = (id) => {
    dispatch(DeleteUser(id)).then(() => setStatus(true)).catch(() => setStatus(false))
  }

  useEffect(() => {
    dispatch(StoreUserList());
  }, [status])

  const editHandler = (id) => {
    history.push(`/profile/users/edit/${id}`);
  }

  const users = useSelector(state => state.usersStore.users)
 
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
              &nbsp;User List
          </Typography>
          <div style={{padding:"15px"}}><Link className={classes.link} to="/profile/users/create"><Button className={classes.cartBtn} variant="contained">Create</Button></Link></div>
        </Grid>
        <Message status={status} message={message}/>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { users.map((row, index) => (
            <TableRow>
              <TableCell component="th" scope="row">{index+1}</TableCell>
              <TableCell align="right">&nbsp;&nbsp;{row.role}</TableCell>
              <TableCell align="right">&nbsp;&nbsp;{`${row.firstname} ${row.lastname}`}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right"><Button onClick={() => editHandler(row._id)}>Edit</Button> | <Button onClick={() => deleteHanlder(row._id)}>Delete</Button></TableCell>
            </TableRow>
           ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserList;