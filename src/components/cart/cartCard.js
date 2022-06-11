import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const CartCard = props => {
  const dispatch = useDispatch();

  const { id, title, totalPrice, quantity } = props.item;

  function removeFromCartHandler() {
    dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        height="auto"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="shoes 1"
        sx={{ width: "20%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1">{quantity}</Typography>
        <Typography variant="subtitle1" sx={{ color: "red" }}>
          Rp{Number(totalPrice).toLocaleString()}
        </Typography>
        <CardActions>
          <Button
            size="small"
            onClick={removeFromCartHandler}
            sx={{ textTransform: "none" }}
          >
            Remove from Cart
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CartCard;
