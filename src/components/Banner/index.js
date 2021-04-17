import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../assets/images/kj2.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "350px",
    },
    gridItem: {
        marginBottom: "-6px"
    }
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid item xs={12} className={classes.gridItem}>
                    <img src={banner} className={classes.image} alt="banner"/>
                </Grid>
            </Grid>
        </>
    )
}

export default Banner;