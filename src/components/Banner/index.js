import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import banner from '../../assets/images/kj2.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "350px",
    }
}));

const Banner = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <img src={banner} className={classes.image}/>
                </Grid>
            </Grid>
        </>
    )
}

export default Banner;