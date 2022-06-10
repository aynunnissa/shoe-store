import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { Box, Typography, Badge, Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <Paper>
      <Box px={4} py={2}>
        <NavLink to="/cart">
          <Badge badgeContent={cartQuantity} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </NavLink>
      </Box>
    </Paper>
  );
};

export default Navbar;
