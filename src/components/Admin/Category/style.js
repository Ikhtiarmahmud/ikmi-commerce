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
  });

export default useStyles;