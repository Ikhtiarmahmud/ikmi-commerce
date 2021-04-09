import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typoH4: {
        padding: "10px 40px",
        color: "#0a472e",
        marginTop: "15px",
        "& h4": {
            display: "inline",
            fontSize: "30px",
            fontWeight: "800",
            marginLeft: "15px"
        },
        "& svg": {
            display: "inline",
            fontSize: "18px"
        }
    },
    grid:{
        marginTop: "10px"
    },
    title:{
        fontSize: "30px",
        fontWeight: "700",
        color: "#0a472e",
        margin: "1rem 0",
        cursor: "pointer",
        "&:hover": {
            color: "#a8b324"
        }
    },
    dollar: {
        color: "#a8b324",
        fontWeight: "600",
        fontSize: "35px",
    },
    star: {
        margin: "2rem 0 0 0",   
        "& svg": {
            fontSize: "18px",
            color: "#ffbd42"
        }
    },
    media: {
        border: "1px solid",
        borderRadius: "3px",
        color: "#ebebeb",
        marginLeft: "40px"
    },
    img: {
        width : "500px",
        height: "480px"
    },
    inStock: {
        backgroundColor: "#b1b1b1",
        padding: "0px 15px",
        display: "inline-block",
        textTransform: "uppercase",
        fontSize: "10px",
        color : "#000"
    },
    cartInput: {
        width: "150px",
        marginRight: "10px",
        "& input":{
            padding: "9px 0px",
           
        },
        "&:before": {
            content: ""
        }
    },
    cartBtn: {
        backgroundColor: "#14472e",
        color: "white"
    }
}));

export default useStyles;