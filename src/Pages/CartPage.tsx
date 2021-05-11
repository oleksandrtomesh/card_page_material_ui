import { Grid } from "@material-ui/core";
import React from "react";
import CartPageCard from "../Components/CartPageCard";
import { OrderForm } from "../Components/OrderForm";
import { useSelector } from "react-redux";
import { getCartProducts } from "../lib/selectors/selectors";

const CartPage: React.FC = () => {
  const cartProducts = useSelector(getCartProducts);
  return (
    <Grid container direction="row" spacing={3}>
      <Grid container item sm={8} spacing={2}>
        {cartProducts.map((dataConst, index) => (
          <Grid key={index} item xs={12}>
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
