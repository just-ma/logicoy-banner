import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";

const dropdownStyles = makeStyles(theme => ({
  title: {
    fontSize: 14,
    textTransform: "none",
    width: 100
  },
  item: {
    fontSize: 14,
    width: 120,
    whiteSpace: "wrap",
    margin: 5
  }
}));

export default function Dropdown({ title, items }) {
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
      <Popper open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom"
            }}
          >
            <Paper>
              <MenuList>
                {items.map(i => (
                  <MenuItem style={{ whiteSpace: "normal" }}>
                    <Typography className={classes.item}>{i}</Typography>
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
