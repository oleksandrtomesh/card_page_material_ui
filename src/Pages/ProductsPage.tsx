import React from "react";
import { constants, ConstantsType } from "../constants";
import { Grid } from "@material-ui/core";
import { ProductsPageCard } from "../Components/ProductsPageCard";

const ProductsPage: React.FC = () => {
  const cardItem = (data: ConstantsType, index: number) => {
    const { title, price, description, avatarUrl, imageUrl } = data;
    return (
      <Grid key={index} item xs={12} sm={6}>
        <ProductsPageCard
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
      {constants.map((items, index) => cardItem(items, index))}
    </Grid>
  );
};

export default ProductsPage;
