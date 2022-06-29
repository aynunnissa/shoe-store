import { NavLink } from "react-router-dom";
import { Box, Button, Grid, Container, Typography } from "@mui/material";
import HomeImage from "../img/home.jpg";
import { styled, createTheme } from "@mui/material/styles";

const Index = () => {
  const theme = createTheme();

  const Text = styled(Box)(() => ({
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    boxSizing: "border-box",
  }));

  const TextDesktop = styled(Text)(() => ({
    display: "flex",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const TextMobile = styled(Text)(() => ({
    display: "none",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: "white",

    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  }));

  const Layer = styled(Box)(() => ({
    display: "none",
    backgroundColor: "black",
    opacity: 0.7,
    height: "100%",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const TextContent = () => {
    return (
      <Box>
        <Typography
          variant="h1"
          component="h1"
          fontWeight={700}
          sx={{ marginBottom: "20px" }}
        >
          JUST DO IT.
        </Typography>
        <NavLink to="/products" style={{ textDecoration: "none" }}>
          <Button variant="contained" size="large" sx={{ cursor: "pointer" }}>
            Shop now
          </Button>
        </NavLink>
      </Box>
    );
  };

  return (
    <Grid container sx={{ height: "100vh", backgroundColor: "black" }}>
      <Grid
        item
        xs={0}
        md={4}
        sx={{ height: "100%", backgroundColor: "white" }}
      >
        <TextDesktop px={4}>
          <TextContent />
        </TextDesktop>
      </Grid>
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundImage: "url(/home.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Layer />
          <TextMobile px={4}>
            <TextContent />
          </TextMobile>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Index;
