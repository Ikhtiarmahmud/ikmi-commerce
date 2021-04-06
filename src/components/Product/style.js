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
    card: {
        boxShadow: "none",
        marginTop: "5px",
        "& button":{
            cursor: "auto"
        },
        "& img": {
            height: "200px",
            cursor: "pointer",
        }
    },
    grid:{
        marginTop: "10px"
    },
    addCart: {
        fontWeight: "800",
        fontSize: "14px",
        cursor: "pointer",
        "&:hover": {
            color: "#a8b324"
        },
        "& svg": {
            fontSize: "12px",
            marginRight: "-5px",
            marginTop: "3px"
        }
    },
    title:{
        fontSize: "15px",
        fontWeight: "400",
        cursor: "pointer",
        "&:hover": {
            color: "#a8b324"
        }
    },
    dollar: {
        color: "#a8b324",
        fontWeight: "600"
    }
}));

export default useStyles;