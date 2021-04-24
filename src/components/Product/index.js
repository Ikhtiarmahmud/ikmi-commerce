import React from 'react';
import {
    Typography,
    Card,
    CardActionArea,
    CardContent,
    Grid
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import banner from '../../assets/images/kj2.jpg';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useStyles from './style';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Product = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productStore.products);

    const getProductDetails = (id) => {
        history.push(`/details/${id}`);
    }

    return (
        <>
            <div className={
                classes.typoH4
            }>
                <RadioButtonUncheckedIcon/>
                <Typography variant="h4">
                    Featured Products
                </Typography>
                <Grid container
                    className={
                        classes.grid
                    }
                    spacing={3}>
                    {
                    products.map((product) => {
                        return (
                            <Grid item
                                md={3}
                                xs={12}
                                sm={6}>
                                <Card className={
                                    classes.card
                                }>
                                    <CardActionArea>
                                        <img className={
                                                classes.media
                                            }
                                            src={product.image}
                                            title="Contemplative Reptile"/>
                                        <CardContent>
                                            <Typography gutterBottom variant="body1" align="center">
                                                <StarIcon/>
                                                <StarIcon/>
                                                <StarIcon/>
                                                <StarIcon/>
                                                <StarBorderIcon/>
                                            </Typography>
                                            <Typography className={
                                                    classes.title
                                                }
                                                gutterBottom
                                                variant="h3"
                                                align="center">
                                                {product.title = product.title.length > 10 ? product.title.substring(0, 10)
                            : product.title}
                                            </Typography>
                                            <Typography className={
                                                    classes.dollar
                                                }
                                                gutterBottom
                                                variant="subtitle1"
                                                align="center">
                                                $ {product.price}
                                            </Typography>
                                            <Typography className={
                                                    classes.addCart
                                                }
                                                gutterBottom
                                                variant="subtitle2"
                                                align="center" onClick={() => getProductDetails(product._id)}>
                                                ADD TO CART
                                                <span><ArrowForwardIosIcon/><ArrowForwardIosIcon/></span>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                } </Grid>
            </div>
        </>
    )
}

export default Product;
