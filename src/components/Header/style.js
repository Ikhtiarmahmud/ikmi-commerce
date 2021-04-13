import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${
            theme.palette.divider
        }`
    },
    toolbar: {
        flexWrap: 'wrap'
    },
    toolbarTitle: {
        flexGrow: 1
    },
    link: {
        margin: theme.spacing(1, 1.5)
    },
    backgroundColor: {
      backgroundColor: "#fff"
    },
    font30 : {
      fontSize: "30px"
    },
    formControl: {
      marginTop: "-6px",
      display: "block",
      padding: "0.175rem .75rem",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight: "1.5",
      color: "#212529",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
      border: "1px solid #ced4da",
      appearance: "none",
      borderRadius: ".25rem",
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out"
    },
    routerLink: {
      textDecoration: "none",
      color: "black",
    }
}));

export default useStyles;
