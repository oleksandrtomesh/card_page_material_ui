import { Grid } from "@material-ui/core";
import React from "react";
import { constants, ConstantsType } from "../constants";
import { MyCard } from "./MyCard";

export const Content: React.FC<ConstantsType> = (props) => {
  const cardItem = (data: ConstantsType) => {
    const { title, price, description, avatarUrl, imageUrl } = data;
    return (
      <Grid item xs={12} sm={6}>
        <MyCard
          title={title}
          price={price}
          description={description}
          avatarUrl={avatarUrl}
          imageUrl={imageUrl}
        />
      </Grid>
    );
  };

  return (
    <Grid container direction="row" spacing={2}>
      {constants.map((items) => cardItem(items))}
    </Grid>
  );
};
