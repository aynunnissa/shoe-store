import { Grid, Box } from "@mui/material";
import CardItem from "../components/product/card";

export default function Products() {
  return (
    <Grid container>
      <Grid item xs={3}>
        <Box sx={{ height: "100vh", backgroundColor: "#E5E5E5" }}></Box>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ height: "100vh" }}>
          <Grid container spacing={2} p={2}>
            <Grid item xs={3}>
              <CardItem />
            </Grid>
            <Grid item xs={3}>
              <CardItem />
            </Grid>
            <Grid item xs={3}>
              <CardItem />
            </Grid>
            <Grid item xs={3}>
              <CardItem />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
