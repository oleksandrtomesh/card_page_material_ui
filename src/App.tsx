import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import { BrowserRouter, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Header } from "./Components/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Grid container direction="column" spacing={4}>
          <Grid item>
            <Header />
          </Grid>
          <Grid item container>
            <Grid item sm={2} />
            <Grid item xs={12} sm={8}>
              <Route path="/products" render={() => <ProductsPage />} />
              <Route path="/cart" render={() => <CartPage />} />
            </Grid>
            <Grid item sm={2} />
          </Grid>
        </Grid>
      </BrowserRouter>
    </>
  );
}
