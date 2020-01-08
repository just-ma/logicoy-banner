import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h6" className={classes.title}>
            Logicoy
          </Typography>
          <Button color="inherit">One</Button>
          <Button color="inherit">Two</Button>
          <Button color="inherit">Three</Button>
        </ToolBar>
      </AppBar>
    </div>
  );
}
