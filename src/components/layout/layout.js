import { Box } from "@mui/material";
import Navbar from "./navbar";

const Layout = props => {
  return (
    <>
      <Navbar />
      <Box>{props.children}</Box>
    </>
  );
};

export default Layout;
