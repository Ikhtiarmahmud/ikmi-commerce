import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from './style';
import { Link} from 'react-router-dom';

const Navbar = () => {

    const classes = useStyles();

    return (
        <div>
            <AppBar className={
                classes.root
            }
                position="static">
                <Toolbar variant="dense">
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start"
                        className={
                            classes.item
                        }>
                        <Link to="/"><MenuItem>Home</MenuItem></Link>
                        <MenuItem>Shop</MenuItem>
                        <MenuItem>Category</MenuItem>
                        <MenuItem>Blog</MenuItem>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
