import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { isAdmin, isUser } from '../../../utils/auth';
import MenuItem from '@material-ui/core/MenuItem';
import  useStyles  from './style';
import { useHistory } from 'react-router-dom';

const Sidebar = () => {

    const classes = useStyles();
    const history = useHistory();

    const loadComponent = (slug) => {
        history.push(`/profile/${slug}`)
    }

    return (
        <div>
            <AppBar className={
                classes.root
            }
                position="static">
                <Toolbar variant="dense">
                    <Grid container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                        className={
                            classes.item
                        }>
                        <MenuItem onClick={() => loadComponent('')}>Dashboard</MenuItem>
                        {
                            isAdmin() && <>
                            <MenuItem onClick={() => loadComponent('category')}>Category</MenuItem>
                            <MenuItem onClick={() => loadComponent('product')}>Product</MenuItem>
                            <MenuItem onClick={() => loadComponent('orders')}>Order</MenuItem>
                            <MenuItem onClick={() => loadComponent('users')}>User</MenuItem>
                            </>
                        }
                        {
                            isUser() && <>
                            <MenuItem>Orders</MenuItem>
                            <MenuItem>My Details</MenuItem>
                            </>
                        }
                       
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Sidebar;
