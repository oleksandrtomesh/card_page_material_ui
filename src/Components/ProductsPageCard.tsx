import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ConstantsType } from "../constants";
import { Avatar, CardHeader, CardMedia, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { headerActions } from "../lib/reducers/headerReducer";
import { cartActions } from "../lib/reducers/cartReducer";

export const ProductsPageCard: React.FC<ConstantsType> = (props) => {
  const { title, price, description, avatarUrl, imageUrl } = props;
  const dispatch = useDispatch();
  const changePathName = () => {
    dispatch(headerActions.pathChanged("/cart"));
  };
  const addProductToCart = (props: ConstantsType) => {
    dispatch(cartActions.productAdded(props));
  };
  const buyNow = () => {
    changePathName();
    addProductToCart(props);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <CardHeader
          avatar={<Avatar src={avatarUrl} />}
          action={
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
          }
          title={title}
          subheader={price}
        />
        <CardMedia image={imageUrl} style={{ height: "300px" }} />
        <Typography component="p">{description}</Typography>
      </CardContent>
      <CardActions>
        <NavLink to="/cart">
          <Button size="small" onClick={buyNow}>
            Buy Now
          </Button>
        </NavLink>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
};
