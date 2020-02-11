import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Zoom,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import React, { MouseEvent } from "react";

interface SuggestionFormProps {
  open: boolean;
  onClose: (
    event: MouseEvent<HTMLButtonElement, MouseEvent> | {},
    reason?: "backdropClick" | "escapeKeyDown"
  ) => void;
}

const SuggestionForm = ({ open, onClose }: SuggestionFormProps) => {
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      aria-labelledby="Suggestion-Form"
      TransitionComponent={Zoom}
    >
      <form name="suggestions" method="post">
        <DialogTitle id="Suggestion-Form">Make A Suggestion</DialogTitle>
        <DialogContent>
          <input type="hidden" name="form-name" value="suggestions" />
          <TextField
            name="reasonSuggestions"
            variant="outlined"
            fullWidth
            id="reasonSuggestions"
            label="Reason Suggestions"
            autoFocus
            multiline
            rows="4"
            helperText="Suggest additional reasons why D&D won't be happening any time soon."
          />
          <TextField
            name="otherSuggestions"
            variant="outlined"
            fullWidth
            id="otherSuggestions"
            label="Other Suggestions"
            multiline
            rows="4"
            helperText="Suggest features, improvements, or write a comment."
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SuggestionForm;
