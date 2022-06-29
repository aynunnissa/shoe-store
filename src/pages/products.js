import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation, NavLink } from "react-router-dom";
import { Grid, Box, Typography, Breadcrumbs } from "@mui/material";
import CardItem from "../components/product/card";
import { productActions } from "../store/product";
import styles from "../components/layout/navbar.module.css";

const Products = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();
  const { type } = useParams();
  const urls = useLocation().pathname.split("/");

  useEffect(() => {
    dispatch(
      productActions.filterProducts({
        type: type,
      })
    );
  }, [type, dispatch]);

  return (
    <Grid container sx={{ minHeight: "100vh" }} px={4} py={4} spacing={2}>
      <Grid item xs={12}>
        {urls.length > 2 && (
          <Breadcrumbs aria-label="breadcrumb">
            <NavLink className={styles.breadLink} to={`/${urls[1]}`}>
              <Typography variant="caption" component="p">
                {urls[1]}
              </Typography>
            </NavLink>
            <NavLink className={styles.breadLink} to={`/${urls[1]}/${urls[2]}`}>
              <Typography variant="caption" component="p">
                {urls[2]}
              </Typography>
            </NavLink>
          </Breadcrumbs>
        )}
        <Typography variant="h5" component="h1">
          Men's {type ? type[0].toUpperCase() + type.slice(1) : ""} Shoes (
          {products.length})
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Grid container spacing={2}>
            {products.map(product => (
              <Grid item xs={6} sm={4} md={3} key={product.id}>
                <CardItem product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Products;
