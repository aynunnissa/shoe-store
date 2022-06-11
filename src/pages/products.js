import { Grid, Box } from "@mui/material";
import CardItem from "../components/product/card";

export default function Products() {
  const DUMMY_PRODUCT = [
    {
      id: 1,
      price: 700000,
      title: "Shoes 1",
      type: "Man's Shoes",
    },
    {
      id: 2,
      price: 800000,
      title: "Shoes 2",
      type: "Woman's Shoes",
    },
    {
      id: 3,
      price: 750000,
      title: "Shoes 3",
      type: "Man's Shoes",
    },
    {
      id: 4,
      price: 900000,
      title: "Shoes 4",
      type: "Woman's Shoes",
    },
    {
      id: 5,
      price: 700000,
      title: "Shoes 5",
      type: "Woman's Shoes",
    },
    {
      id: 6,
      price: 450000,
      title: "Shoes 6",
      type: "Man's Shoes",
    },
    {
      id: 7,
      price: 600000,
      title: "Shoes 7",
      type: "Man's Shoes",
    },
  ];

  return (
    <Grid container>
      <Grid item xs={3}>
        <Box sx={{ height: "100%", backgroundColor: "#E5E5E5" }}></Box>
      </Grid>
      <Grid item xs={9}>
        <Box sx={{ minHeight: "100vh" }}>
          <Grid container spacing={2} p={2}>
            {DUMMY_PRODUCT.map(product => (
              <Grid item xs={3}>
                <CardItem product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
