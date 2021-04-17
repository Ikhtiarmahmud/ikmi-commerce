import React, { useEffect } from 'react';
import {
    Typography,
    CardMedia,
    Grid,
    TextField,
    Button
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import useStyles from './style';
import DetailTab from './../Tab/index';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StoreSelectedProduct } from './../../containers/HomePage/action';


const ProductDetails = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const params = useParams();
    const product = useSelector((state) => state.productStore.selectedProduct);

    useEffect(() => {
        dispatch(StoreSelectedProduct(params.id));
    }, [product]);

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
                            src={product.image} alt="product"/>
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
                        {product.title}
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
                        $ {product.price}
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" align="left">
                        Get 50% offer from your first order
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
                <Grid item xs={12} md={12} sm={12}>
                    <DetailTab description={product.description}/>
                </Grid>
            </Grid>
        </>
    )
}

export default ProductDetails;
