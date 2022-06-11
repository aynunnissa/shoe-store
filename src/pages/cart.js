import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

import CartCard from "../components/cart/cartCard";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Grid container p={4} spacing={2}>
      {cartItems?.map(item => (
        <Grid item xs={6} md={12}>
          <CartCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cart;
