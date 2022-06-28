import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";
import CardItem from "../components/product/card";
import Filter from "../products/filter";
import { productActions } from "../store/product";

const Products = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const { type } = useParams();

  const filterProduct = React.useCallback(() => {
    if (type) {
      dispatch(
        productActions.filterProducts({
          type: type,
        })
      );
    }
  }, [type, dispatch]);

  useEffect(() => {
    filterProduct();
  }, [filterProduct]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" component="h1">
          Men's {type ? type[0].toUpperCase() + type.slice(1) : ""} Shoes (
          {products.length})
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Grid container spacing={2}>
            {products.map(product => (
              <Grid item xs={6} sm={4} md={3}>
                <CardItem key={product.id} product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Products;
