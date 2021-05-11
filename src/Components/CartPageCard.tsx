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
import { ConstantsType } from "../constants";

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

const CartPageCard: React.FC<{ data: ConstantsType }> = ({ data }) => {
  const { title, price, description, imageUrl } = data;
  const classes = useStyles();
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
          <IconButton size="medium">
            <RemoveIcon />
          </IconButton>
          <Typography>quantity</Typography>
          <IconButton size="medium">
            <AddIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default CartPageCard;
