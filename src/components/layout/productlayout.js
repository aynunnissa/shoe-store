import Filter from "./filter";
import { Grid, Box, Typography } from "@mui/material";

const ProductLayout = props => {
  return (
    <Grid container sx={{ minHeight: "100vh" }} px={2} py={4} spacing={2}>
      <Grid item xs={3}>
        <Box sx={{ height: "100%", backgroundColor: "#E5E5E5" }}>
          <Filter />
        </Box>
      </Grid>
      <Grid item xs={12}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default ProductLayout;
