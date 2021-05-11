import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/styles";
import { NavLink, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  },
  shopingCartStyles: {
    color: "white"
  }
}));

export const Header: React.FC = React.memo(() => {
  const classes = useStyles();
  const history = useHistory();
  const [pathName, setPathName] = useState("");
  useEffect(() => setPathName(history.location.pathname), []);

  const changePathName = () => setPathName(history.location.pathname);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Header</Typography>
        {pathName === "/cart" ? (
          <IconButton onClick={changePathName}>
            <NavLink to="products">
              <ArrowBackIcon className={classes.shopingCartStyles} />
            </NavLink>
          </IconButton>
        ) : (
          <IconButton onClick={changePathName}>
            <NavLink to="cart">
              <ShoppingCartIcon className={classes.shopingCartStyles} />
            </NavLink>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
});
