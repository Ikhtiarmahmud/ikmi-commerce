import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './style';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link as RouteLink } from 'react-router-dom';
const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();

    return (<>
        <AppBar position="static"
            elevation={0}
            className={
                classes.appBar,
                classes.backgroundColor
        }>
            <Toolbar className={
                classes.toolbar
            }>
                <Typography variant="h5" color="textPrimary" noWrap
                    className={
                        classes.toolbarTitle
                }>
                    IKMI
                </Typography>
                <input placeholder="Search" className={classes.formControl}/>
                <nav>
                    <Link variant="button" color="textPrimary" href="#"
                        className={
                            classes.link
                    }>
                        <FavoriteBorderIcon className={classes.font30} />
                    </Link>
                    <Link variant="button" color="textPrimary" href="#"
                        className={
                            classes.link
                    }>
                        <AddShoppingCartIcon className={classes.font30}/>
                    </Link>
                    <Link variant="button" color="textPrimary" href="#"
                        className={
                            classes.link
                    }>
                        <Button style={{minWidth: '0', padding: '0', marginTop: '-12px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <PermIdentityIcon className={classes.font30}/>
                        </Button>
                        <Menu style={{top: "55px", left:"-70px"}}
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem style={{width:"130px"}} onClick={handleClose}>Profile</MenuItem>
                            <RouteLink className={classes.routerLink} to="/account"><MenuItem onClick={handleClose}>Login</MenuItem></RouteLink>
                        </Menu>
                       
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    </>)
}

export default Header;
