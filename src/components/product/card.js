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

const CardItem = props => {
  const dispatch = useDispatch();

  const { id, price, title, type } = props.product;

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        price: price,
        quantity: 1,
        title: title,
        type: type,
      })
    );
  }

  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="shoes 1"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {type}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "red" }}>
          Rp{Number(price).toLocaleString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={addToCartHandler}
          sx={{ textTransform: "none" }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
