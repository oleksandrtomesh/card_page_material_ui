import { AppBar, Grid, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

export const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Header</Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};
