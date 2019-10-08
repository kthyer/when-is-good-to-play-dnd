import React, { useState } from "react";
import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import SuggestionForm from "components/SuggestionForm";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  const [isSuggestionFormOpen, setIsSuggestionFormOpen] = useState(false);

  const handleOpenSuggestionForm = () => setIsSuggestionFormOpen(true);
  const handleCloseSuggestionForm = () => setIsSuggestionFormOpen(false);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">When Is Good To Play D&D?</Typography>
        <Button
          color="inherit"
          onClick={handleOpenSuggestionForm}
          className={classes.suggestionButton}
        >
          Make a suggestion
        </Button>
        <SuggestionForm
          open={isSuggestionFormOpen}
          onClose={handleCloseSuggestionForm}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
