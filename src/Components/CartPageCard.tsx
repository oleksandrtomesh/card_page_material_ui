import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from "@material-ui/core";
import React from "react";
import ShareIcon from "@material-ui/icons/Share";

const CartPageCard: React.FC = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <CardHeader
          avatar={<Avatar />}
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title={"title"}
          subheader={"price"}
        />
        <CardMedia image={"imageUrl"} style={{ height: "300px" }} />
        <Typography component="p">{"description"}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default CartPageCard;
