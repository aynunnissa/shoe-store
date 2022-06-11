import { Grid } from "@mui/material";
import CartCard from "../components/cart/cartCard";

const Cart = () => {
  return (
    <Grid container p={4} spacing={2}>
      <Grid item xs={6} md={12}>
        <CartCard />
      </Grid>
      <Grid item xs={6} md={12}>
        <CartCard />
      </Grid>
      <Grid item xs={6} md={12}>
        <CartCard />
      </Grid>
    </Grid>
  );
};

export default Cart;
