import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      body: {
        margin: 0,
        padding: 0,
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
      }
    },
    logo: {
      maxWidth: "100%"
    },
    topMargin: {
      marginTop: theme.spacing(2)
    },
    bottomMargin: {
      marginBottom: theme.spacing(2)
    }
  })
);

export default useStyles;
