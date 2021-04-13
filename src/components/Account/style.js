import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grid:{
        marginTop: "10px",
        padding: "0 0 0 100px",
        "& input":{
            width: "330px",
        }
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
    cartBtn: {
        backgroundColor: "#14472e",
        color: "white"
    }
}));

export default useStyles;