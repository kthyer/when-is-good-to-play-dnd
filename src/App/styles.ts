import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topMargin: {
      marginTop: theme.spacing(2)
    }
  })
);

export default useStyles;
