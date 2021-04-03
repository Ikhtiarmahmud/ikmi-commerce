import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import useStyles from './style';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const Header = () => {
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
                        <PermIdentityIcon className={classes.font30}/>
                    </Link>
                </nav>
            </Toolbar>
        </AppBar>
    </>)
}

export default Header;
