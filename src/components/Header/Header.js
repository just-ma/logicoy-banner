import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import Dropdown from "../Dropdown/Dropdown";

const menu = [
  { title: "Products", items: ["PDMP", "...", "..."] },
  {
    title: "Solutions",
    items: [
      "Master Data Management",
      "Health",
      "Cloud Solutions",
      "Data Integration"
    ]
  },
  {
    title: "Oracle SOA",
    items: [
      "Oracle SOA Suite Migration Services",
      "EAM to OTM Integration",
      "SuccessFactors to Oracle HRMS Integration",
      "Data Integration"
    ]
  },
  {
    title: "Services",
    items: ["Support", "Consulting", "Training", "QA Services"]
  },
  {
    title: "Mobility",
    items: ["Mobile App Development"]
  },
  {
    title: "Partners",
    items: []
  },
  {
    title: "Customers",
    items: []
  },
  {
    title: "About Us",
    items: ["About Logicoy", "Contact", "Blogs", "Careers"]
  }
];

const headerStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appbar: {
    padding: "0 40px"
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appbar}>
        <ToolBar>
          <Typography variant="h6" className={classes.title}>
            Logicoy
          </Typography>
          {menu.map(e => (
            <Dropdown title={e.title} items={e.items} />
          ))}
        </ToolBar>
      </AppBar>
    </div>
  );
}
