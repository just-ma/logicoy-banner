import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";

const dropdownStyles = makeStyles(theme => ({
  title: {
    fontSize: 12,
  },
  item: {
    fontSize: 12
  }
}));

const Dropdown = ({ title, items }) => {
  const classes = dropdownStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const onMouseEnter = event => {
    setAnchorEl(event.currentTarget);
  };

  const onMouseLeave = event => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div onMouseLeave={onMouseLeave}>
      <Button color="inherit" onMouseEnter={onMouseEnter}>
        <Typography className={classes.title}>{title}</Typography>
      </Button>
      <Popper open={open} anchorEl={anchorEl}>
        <Paper>
          <MenuList>
            {items.map(i => (
              <MenuItem>
                <Typography className={classes.item}>{i}</Typography>
              </MenuItem>
            ))}
          </MenuList>
        </Paper>
      </Popper>
    </div>
  );
};

const headerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h6" className={classes.title}>
            Logicoy
          </Typography>
          <Dropdown title="Products" items={["PDMP", "...", "..."]} />
          <Dropdown
            title="Solutions"
            items={[
              "Master Data Management",
              "Health",
              "Cloud Solutions",
              "Data Integration"
            ]}
          />
          <Button color="inherit">Two</Button>
          <Button color="inherit">Three</Button>
          <Dropdown title="Four" items={["One", "Two", "Three"]} />
        </ToolBar>
      </AppBar>
    </div>
  );
}
