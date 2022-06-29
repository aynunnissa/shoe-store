import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const Layout = props => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const url = useLocation().pathname.split("/")[1];

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleNavHandler = () => {
    setMobileNavOpen(prev => !prev);
  };

  return (
    <Box sx={{ position: "relative", overflowX: "hidden" }}>
      <ThemeProvider theme={theme}>
        {url !== "" && <Navbar changeMobileNavState={toggleNavHandler} />}
        <Box
          sx={{
            height: `${mobileNavOpen ? "80vh" : "auto"}`,
            overflowY: `${mobileNavOpen ? "hidden" : "auto"}`,
          }}
        >
          {props.children}
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Layout;
