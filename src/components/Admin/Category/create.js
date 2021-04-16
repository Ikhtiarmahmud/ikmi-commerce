import React from 'react';
import {
    TableContainer,
    Paper,
    Typography,
    Grid,
    Button,
    TextField
} from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import useStyles from './style';
import {Link} from 'react-router-dom';

const CreateCategory = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Grid container direction="row" justify="space-between" alignItems="flex-start">
                <Typography className={
                        classes.title
                    }
                    gutterBottom
                    variant="h3"
                    align="left">
                    <RadioButtonUncheckedIcon/>
                    &nbsp;Add Category
                </Typography>
                <div style={
                    {padding: "15px"}
                }>
                    <Link className={
                            classes.link
                        }
                        to="/profile/category">
                        <Button className={
                                classes.cartBtn
                            }
                            variant="contained">List</Button>
                    </Link>
                </div>
            </Grid>
            <div className={
                    classes.table
                }
                aria-label="simple table"
                className={
                    classes.inputBox
            }>
                <div>
                    <TextField id="standard-search" label="name" type="search"/>
                </div>
                <div>
                    <TextField id="standard-search" label="description" type="search"/>
                </div>
                <div>
                    <Button className={
                            classes.cartBtn
                        }
                        variant="contained">Create</Button>
                </div>
            </div>
        </TableContainer>
    );
}

export default CreateCategory;
