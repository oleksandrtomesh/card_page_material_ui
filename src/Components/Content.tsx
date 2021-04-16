import { Grid } from "@material-ui/core";
import React from "react";
import { MyCard } from "./MyCard";

export const Content: React.FC = (props) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={6} sm={4}>
        <MyCard />
      </Grid>
      <Grid item xs={6} sm={4}>
        <MyCard />
      </Grid>
      <Grid item xs={6} sm={4}>
        <MyCard />
      </Grid>
    </Grid>
  );
};
