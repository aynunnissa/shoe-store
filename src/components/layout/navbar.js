import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { Box, Typography, Badge, Paper, Grid, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { styled, createTheme } from "@mui/material/styles";

import styles from "./navbar.module.css";

const Navbar = ({ changeMobileNavState }) => {
  const location = useLocation();
  const type = location.pathname.split("/").pop();
  const cartQuantity = useSelector(state => state.cart.totalQuantity); // read values from store & subscribes to updates

  const [isOpenNav, setIsOpenNav] = useState(false);

  function handleOpenNav() {
    setIsOpenNav(prev => !prev);
    changeMobileNavState();
  }

  const theme = createTheme();

  const DesktopLink = styled(Box)(() => ({
    display: "block",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const Hamburger = styled(Box)(() => ({
    display: "none",
    height: "24px",
    width: "24px",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  return (
    <Box>
      <Box
        className={`${styles.layer} ${
          isOpenNav ? styles["layer--open"] : styles["layer--hidden"]
        }`}
      ></Box>
      <Box
        className={`${styles.mobileNav} ${
          isOpenNav ? styles["mobileNav--open"] : styles["mobileNav--close"]
        }`}
        px={4}
        py={10}
      >
        <Stack direction="column" spacing={2} onClick={handleOpenNav}>
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
      <Paper>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "60px",
          }}
          px={4}
        >
          <Box>
            <NavLink style={{ textDecoration: "none" }} to="/">
              <Typography
                variant="h6"
                component="p"
                color="black"
                fontWeight={700}
              >
                SEPATOO
              </Typography>
            </NavLink>
          </Box>
          <DesktopLink sx={{ flexGrow: "1" }}>
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
          </DesktopLink>
          <Box display="flex" alignItems="center" gap={2}>
            <NavLink to="/cart">
              <Badge badgeContent={cartQuantity} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </NavLink>
            <Hamburger onClick={handleOpenNav}>
              {isOpenNav ? (
                <CloseIcon sx={{ position: "fixed", zIndex: 1001 }} />
              ) : (
                <MenuIcon />
              )}
            </Hamburger>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Navbar;
