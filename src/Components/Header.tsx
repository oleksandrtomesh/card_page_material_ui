import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/styles";
import { NavLink, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { headerActions } from "../lib/reducers/headerReducer";
import { getPathName } from "../lib/selectors/selectors";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  },
  shopingCartStyles: {
    color: "white"
  }
}));

export const Header: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const pathName = useSelector(getPathName);
  console.log(pathName);
  //const [pathName, setPathName] = useState("");
  //useEffect(() => setPathName(history.location.pathname), [
  //  history.location.pathname
  //]);
  //const changePathName = () => setPathName(history.location.pathname);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>Header</Typography>
        {pathName === "/cart" ? (
          <IconButton
            onClick={() =>
              dispatch(headerActions.pathChanged(history.location.pathname))
            }
          >
            <NavLink to="/products">
              <ArrowBackIcon className={classes.shopingCartStyles} />
            </NavLink>
          </IconButton>
        ) : (
          <IconButton
            onClick={() =>
              dispatch(headerActions.pathChanged(history.location.pathname))
            }
          >
            <NavLink to="/cart">
              <ShoppingCartIcon className={classes.shopingCartStyles} />
            </NavLink>
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

//types

type PropsType = {
  pathName: string;
};
