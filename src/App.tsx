import { Grid } from "@material-ui/core";
import "./styles.css";
import { Header } from "./Components/Header";
import { Content } from "./Components/Content";

export default function App() {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </Grid>
  );
}
