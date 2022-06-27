import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { Box, Typography, Badge, Paper, Grid, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckIcon from "@mui/icons-material/Check";

const Navbar = () => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity); // read values from store & subscribes to updates

  return (
    <Paper>
      {/* <Box px={4} py={2}>
        <NavLink to="/cart">
          <Badge badgeContent={cartQuantity} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </NavLink>
      </Box> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          height: "60px",
        }}
        px={4}
      >
        <Box sx={{ height: "80%", width: "auto" }}>
          <NavLink to="/cart">
            <CheckIcon sx={{ height: "100%", width: "100%" }} />
          </NavLink>
        </Box>
        <Box sx={{ flexGrow: "1" }}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <NavLink to="/products/lifestyle">Lifestyle</NavLink>
            <NavLink to="/products/athletics">Athletics</NavLink>
            <NavLink to="/products/basketball">Basketball</NavLink>
            <NavLink to="/products/football">Football</NavLink>
            <NavLink to="/products/gym-training">Gym and Training</NavLink>
          </Stack>
        </Box>
        <Box>
          <NavLink to="/cart">
            <Badge badgeContent={cartQuantity} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </NavLink>
        </Box>
      </Box>
    </Paper>
  );
};

export default Navbar;
