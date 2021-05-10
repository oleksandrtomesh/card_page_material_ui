import { Grid } from "@material-ui/core";
import React from "react";
import CartPageCard from "../Components/CartPageCard";

const CartPage: React.FC = () => {
  const items = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <Grid container direction="row" spacing={3}>
      <Grid container item sm={9} spacing={2}>
        {items.map((i) => (
          <Grid item xs={12}>
            <CartPageCard />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={3}>
        Order form
      </Grid>
    </Grid>
  );
};

export default CartPage;
