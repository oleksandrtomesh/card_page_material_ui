import { Grid } from "@material-ui/core";
import React from "react";
import CartPageCard from "../Components/CartPageCard";
import { constants } from "../constants";
import { OrderForm } from "../Components/OrderForm";

const CartPage: React.FC = () => {
  return (
    <Grid container direction="row" spacing={3}>
      <Grid container item sm={8} spacing={2}>
        {constants.map((dataConst, index) => (
          <Grid item xs={12}>
            <CartPageCard data={dataConst} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={4}>
        <OrderForm />
      </Grid>
    </Grid>
  );
};

export default CartPage;
