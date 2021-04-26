import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    title:{
      fontSize: "30px",
      fontWeight: "700",
      color: "#0a472e",
      margin: "1rem 5px",
      cursor: "pointer",
      "&:hover": {
          color: "#a8b324"
      }
  },
  cartBtn: {
    backgroundColor: "#14472e",
    color: "white",
  },
  link: {
    textDecoration: "none"
  },
  inputBox: {
    padding: "10px",
    "& input": {
      width: "330px",
    },
    "& div": {
      marginBottom: "10px"
    }
  }
  });

export default useStyles;