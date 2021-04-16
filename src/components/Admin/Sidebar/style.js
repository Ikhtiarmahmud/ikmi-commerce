import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: "#fff",
          borderTop: `1px solid ${theme.palette.divider}`,
          paddingTop: theme.spacing(3),
          minHeight: "250px"
        },
        item: {
          "& a": {
              textDecoration: "none",
              color: "#999",
          },
          "& li": {
              color: "#999",
              lineHeight: "38px",
              display: "block",
              overflow: "hidden",
              padding: "5px 13px",
              margin: "0",
              fontSize: "14px",
              textDecoration: "none",
              textTransform: "uppercase",            
          },
          "& li:hover": {
              color: "#fff",
              backgroundColor: "#a8b324",
              "& a": {
                  color: "#fff",
              }
          }
      },
      }));

export default useStyles;
    