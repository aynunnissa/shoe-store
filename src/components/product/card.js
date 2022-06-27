import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import DefaultImg from "../../img/default.png";

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

  const { id, price, title, type, link } = props.product;

  const [imgSrc, setImgSrc] = useState(DefaultImg || link);

  useEffect(() => {
    const img = new Image();
    img.src = link;
    img.onload = () => {
      setImgSrc(link);
    };
  }, [link]);

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        price: price,
        quantity: 1,
        title: title,
        type: type,
        link: link,
      })
    );
  }

  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        width="100%"
        height="auto"
        image={imgSrc}
        alt={title}
        loading="eager"
        sizes="(max-width: 959px) 318px, (max-width: 959px) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) 592px, (min-width: 960px) 592px"
        sx={{ background: "rgb(245, 245, 245)" }}
      />
      <CardContent>
        <Typography variant="h6" component="h6">
          {title}
        </Typography>
        <Typography variant="caption" component="p" color="text.secondary">
          {type}
        </Typography>
        <Typography variant="subtitle1" component="p">
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
