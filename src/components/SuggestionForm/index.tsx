import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import useStyles from "./styles";

interface SuggestionFormProps {
  open: boolean;
  onClose: any;
}

const SuggestionForm = ({ open, onClose }: SuggestionFormProps) => {
  const theme = useTheme();
  const classes = useStyles();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      aria-labelledby="Suggestion-Form"
    >
      <DialogTitle id="Suggestion-Form">Make A Suggestion</DialogTitle>
      <DialogContent>
        <form name="suggestions" netlify className={classes.form}>
          <DialogContentText>
            Suggest additional reasons why D&D won't be happening any time soon.
          </DialogContentText>
          <TextField
            name="reasonSuggestions"
            variant="outlined"
            required
            fullWidth
            id="reasonSuggestions"
            label="Reason Suggestions"
            autoFocus
            multiline
          />
          <DialogContentText className={classes.textMargin}>
            Suggest features, improvements, or write a comment.
          </DialogContentText>
          <TextField
            name="otherSuggestions"
            variant="outlined"
            fullWidth
            id="otherSuggestions"
            label="Other Suggestions"
            multiline
          />
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SuggestionForm;
