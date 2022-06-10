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

const CardItem = () => {
  const dispatch = useDispatch();

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        id: 1,
        price: 20000,
        quantity: 1,
        name: "Nike xxx",
        type: "Man's shoes",
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
