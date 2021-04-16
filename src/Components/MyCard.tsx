import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ConstantsType } from "../constants";
import { Avatar, CardHeader, CardMedia, IconButton } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

export const MyCard: React.FC<ConstantsType> = (props) => {
  const { title, price, description, avatarUrl, imageUrl } = props;

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
        <Button size="small">Buy Now</Button>
        <Button size="small">Add to cart</Button>
      </CardActions>
    </Card>
  );
};
