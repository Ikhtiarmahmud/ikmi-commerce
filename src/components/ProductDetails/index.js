import React from 'react';
import {
    Typography,
    CardMedia,
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import productImage from '../../assets/images/39.jpg';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import useStyles from './style';


const ProductDetails = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container
                className={
                    classes.grid
                }
                spacing={3}>
                <Grid item
                    md={6}
                    xs={12}
                    sm={6}>
                    <CardMedia className={
                        classes.media
                    }>
                        <img className={
                                classes.img
                            }
                            src={productImage}/>
                    </CardMedia>
                </Grid>
                <Grid item
                    md={6}
                    xs={12}
                    sm={6}>
                    <Typography className={
                            classes.inStock
                        }
                        gutterBottom
                        variant="body1"
                        align="left">
                        In Stock
                    </Typography>
                    <Typography className={
                            classes.title
                        }
                        gutterBottom
                        variant="h3"
                        align="left">
                        Heavy Duty Paper Computer
                    </Typography>
                    <Typography className={
                            classes.star
                        }
                        gutterBottom
                        variant="body1"
                        align="left">
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarIcon/>
                        <StarBorderIcon/>
                    </Typography>
                    <Typography className={
                            classes.dollar
                        }
                        gutterBottom
                        variant="subtitle1"
                        align="left">
                        $ 600
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" align="left">
                        Vel atque et quis excepturi id nihil eligendi. Id illo fuga distinctio nesciunt qui sunt. Aut ullam tenetur ea atque.
                    </Typography>
                    <Grid style={{marginTop:"2rem"}} container
                            direction="row"
                            justify="flex-start"
                            alignItems="center">
                        <Grid>
                            <TextField className={classes.cartInput} id="outlined-basic"  variant="filled" placeholder="Total Item"/>
                        </Grid>
                        <Grid>
                             <Button className={classes.cartBtn} variant="contained">ADD TO CART</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default ProductDetails;
