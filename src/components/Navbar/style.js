
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#fff",
        boxShadow: "0px 0px 0px 0px",
        borderBottom: `1px solid ${theme.palette.divider
            }`
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    item: {
        "& li": {
            color: "#999",
            lineHeight: "38px",
            display: "block",
            overflow: "hidden",
            padding: "12px 20px 10px 20px",
            margin: "0",
            fontSize: "14px",
            textDecoration: "none",
            textTransform: "uppercase",
            "& button": {

            },
            "& a": {
                textDecoration: "none",
                color: "#999",
            }
        },
        "& li:hover": {
            color: "#fff",
            backgroundColor: "#a8b324",
            "& a": {
                color: "#fff",
            }
        }
    },
    categoryMenu: {
        marginTop: "55px",
    }
}));