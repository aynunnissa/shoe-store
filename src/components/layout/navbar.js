import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Box, Typography, Badge, Paper, Grid, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckIcon from "@mui/icons-material/Check";

import styles from "./navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const type = location.pathname.split("/").pop();
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
          <NavLink to="/">
            <CheckIcon sx={{ height: "100%", width: "100%" }} />
          </NavLink>
        </Box>
        <Box sx={{ flexGrow: "1" }}>
          <Stack direction="row" spacing={2} justifyContent="center">
            <NavLink
              className={`${styles.navlink} ${
                type === "lifestyle" ? styles.active : ""
              }`}
              to="/products/lifestyle"
            >
              Lifestyle
            </NavLink>
            <NavLink
              className={`${styles.navlink} ${
                type === "athletics" ? styles.active : ""
              }`}
              to="/products/athletics"
            >
              Athletics
            </NavLink>
            <NavLink
              className={`${styles.navlink} ${
                type === "basketball" ? styles.active : ""
              }`}
              to="/products/basketball"
            >
              Basketball
            </NavLink>
            <NavLink
              className={`${styles.navlink} ${
                type === "football" ? styles.active : ""
              }`}
              to="/products/football"
            >
              Football
            </NavLink>
            <NavLink
              className={`${styles.navlink} ${
                type === "gym-training" ? styles.active : ""
              }`}
              to="/products/gym-training"
            >
              Gym and Training
            </NavLink>
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
