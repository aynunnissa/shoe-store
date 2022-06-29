import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

import CartCard from "../components/cart/cartCard";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Grid container p={4} spacing={2} columns={18}>
      {cartItems?.map(item => (
        <Grid item xs={18} sm={9} md={6} key={item}>
          <CartCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cart;
