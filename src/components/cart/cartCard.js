import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const CartCard = id => {
  const dispatch = useDispatch();

  function removeFromCartHandler() {
    dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="shoes 1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={removeFromCartHandler}
          sx={{ textTransform: "none" }}
        >
          Remove from Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartCard;
