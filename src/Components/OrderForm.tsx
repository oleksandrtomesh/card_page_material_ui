import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { getTotalPrice } from "../lib/selectors/selectors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    padding: "16px"
  },
  textarea: {
    marginTop: "16px"
  }
}));

export const OrderForm: React.FC = () => {
  const classes = useStyles();
  const totalPrice = useSelector(getTotalPrice);
  return (
    <Paper className={classes.root} variant="outlined">
      <Typography variant="h6" align="center">
        Order Form
      </Typography>
      <TextField
        className={classes.textarea}
        id="fullName"
        name="fullName"
        label="Full Name"
        variant="outlined"
        size="small"
      />
      <TextField
        className={classes.textarea}
        id="email"
        name="email"
        label="Email"
        variant="outlined"
        size="small"
      />
      <TextField
        className={classes.textarea}
        id="city"
        name="city"
        label="City"
        variant="outlined"
        size="small"
      />
      <TextField
        className={classes.textarea}
        id="street"
        name="street"
        label="Street"
        variant="outlined"
        size="small"
      />
      <TextField
        className={classes.textarea}
        id="postCode"
        name="postCode"
        label="Post Code"
        variant="outlined"
        size="small"
      />
      <TextField
        className={classes.textarea}
        id="phone"
        name="phone"
        label="Phone"
        variant="outlined"
        size="small"
      />
      <Typography variant="overline" className={classes.textarea}>
        total price: {totalPrice}{" "}
      </Typography>
      <Button className={classes.textarea} variant="outlined">
        Order
      </Button>
    </Paper>
  );
};
