import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Stack, Box, Grid, Divider } from "@mui/material";
import { cartActions } from "../../store/cart";
import DefaultImg from "../../img/default.png";
import ClearIcon from "@mui/icons-material/Clear";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

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

  const { id, title, totalPrice, quantity, link, price } = props.item;

  const [imgSrc, setImgSrc] = useState(DefaultImg || link);

  useEffect(() => {
    const img = new Image();
    img.src = link;
    img.onload = () => {
      setImgSrc(link);
    };
  }, [link]);

  function removeFromCartHandler() {
    dispatch(cartActions.removeItemFromCart(id));
  }

  function removeAllFromCartHandler() {
    dispatch(
      cartActions.removeAllItemFromCart({
        id: id,
        quantity: quantity,
      })
    );
  }

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        price: price,
      })
    );
  }

  return (
    <Card sx={{ position: "relative" }}>
      <Button
        size="small"
        onClick={removeAllFromCartHandler}
        sx={{
          textTransform: "none",
          padding: "5px 0px",
          minWidth: "fit-content",
          position: "absolute",
          top: 0,
          right: "10px",
        }}
      >
        <ClearIcon color="error" />
      </Button>
      <Box sx={{ display: "flex", alignItems: "center" }} px={2}>
        <CardMedia
          component="img"
          image={imgSrc}
          alt={title}
          sx={{ width: "80px", height: "80px" }}
        />
        <CardContent>
          <Typography variant="body1" fontWeight={600} component="p">
            {title}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" my={1}>
            <Button
              sx={{ padding: 0, minWidth: 0 }}
              onClick={removeFromCartHandler}
            >
              <RemoveCircleOutlineIcon sx={{ color: "#D5D5D5" }} />
            </Button>
            <Typography variant="subtitle1">{quantity}</Typography>
            <Button sx={{ padding: 0, minWidth: 0 }} onClick={addToCartHandler}>
              <AddCircleOutlineIcon sx={{ color: "#D5D5D5" }} />
            </Button>
          </Stack>
          <Typography variant="subtitle1">
            Rp{Number(totalPrice).toLocaleString()}
          </Typography>
        </CardContent>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        px={4}
      >
        
        
      </Box> */}
    </Card>
  );
};

export default CartCard;
