import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowDownTwoToneIcon from '@material-ui/icons/KeyboardArrowDownTwoTone';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#fff",
        boxShadow: "0px 0px 0px 0px",
        borderBottom: `1px solid ${theme.palette.divider
            }`
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    item: {
        "& li": {
            color: "#999",
            lineHeight: "38px",
            display: "block",
            overflow: "hidden",
            padding: "12px 20px 10px 20px",
            margin: "0",
            fontSize: "14px",
            textDecoration: "none",
            textTransform: "uppercase",
            "& button": {

            }
        },
        "& li:hover": {
            color: "#fff",
            backgroundColor: "#a8b324;"
        }
    },
    categoryMenu: {
        marginTop: "55px",
        // "ul": {
            width: "150px"
        // }
    }
}));

const Navbar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        console.log(anchorEl);
    };

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
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Shop</MenuItem>
                       
                        <Button style={{padding:"0px 0px"}} aria-controls="simple-menu" aria-haspopup="true" onMouseOver={handleClick}> 
                            <MenuItem>Category<KeyboardArrowDownTwoToneIcon style={{marginTop:"5px"}}/></MenuItem>
                         </Button>
                           
                        <Menu className={classes.categoryMenu} id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={
                                Boolean(anchorEl)
                            }
                            onClose={handleClose}
                            >
                            <MenuItem onClick={handleClose}>Mobile</MenuItem>
                            <MenuItem onClick={handleClose}>Watch</MenuItem>
                            <MenuItem onClick={handleClose}>Laptp</MenuItem>
                        </Menu>
                       
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
