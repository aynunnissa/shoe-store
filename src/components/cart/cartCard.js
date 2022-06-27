import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Stack, Box, Grid } from "@mui/material";
import { cartActions } from "../../store/cart";
import DefaultImg from "../../img/default.png";
import ClearIcon from "@mui/icons-material/Clear";

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

  const { id, title, totalPrice, quantity, link } = props.item;

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

  return (
    <Card sx={{ position: "relative" }}>
      <CardActions
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: 0,
        }}
      >
        <Button
          size="small"
          onClick={removeFromCartHandler}
          sx={{
            textTransform: "none",
            padding: "5px 0px",
            borderRadius: "0px 0px 0px 50px",
          }}
          variant="contained"
          color="error"
        >
          <ClearIcon />
        </Button>
      </CardActions>
      <Box sx={{ display: "flex", alignItems: "center" }} px={2}>
        <CardMedia
          component="img"
          height="auto"
          image={imgSrc}
          alt="shoes 1"
          sx={{ width: "80px", height: "80px" }}
        />
        <CardContent>
          <Typography variant="body1" fontWeight={600} component="p">
            {title}
          </Typography>
          <Typography variant="subtitle1">Qty: {quantity}</Typography>
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
