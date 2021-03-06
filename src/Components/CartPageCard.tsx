import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
  makeStyles,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { cartActions, CartProductType } from "../lib/reducers/cartReducer";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    display: "flex",
    flexDirection: "column"
  },
  image: {
    minWidth: "200px"
  },
  description: {
    padding: "16px"
  },
  actions: {
    justifyContent: "center"
  }
}));

const CartPageCard: React.FC<{ data: CartProductType }> = ({ data }) => {
  const { title, price, description, imageUrl, quantity } = data;
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardMedia
        className={classes.image}
        image={imageUrl}
        style={{ minHeight: "200px" }}
      />
      <div className={classes.content}>
        <CardHeader title={title} subheader={price} />
        <Typography component="p" className={classes.description}>
          {description}
        </Typography>
        <CardActions className={classes.actions}>
          <IconButton
            size="medium"
            onClick={() =>
              dispatch(cartActions.changeQuantity(title, price, "decrease"))
            }
          >
            <RemoveIcon />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton
            size="medium"
            onClick={() =>
              dispatch(cartActions.changeQuantity(title, price, "increase"))
            }
          >
            <AddIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default CartPageCard;
