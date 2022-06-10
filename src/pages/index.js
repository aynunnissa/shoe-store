import { NavLink } from "react-router-dom";
import { Container, Button } from "@mui/material";

const Index = () => {
  return (
    <Container
      fixed
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavLink to="/products">
        <Button variant="contained">View All Products</Button>
      </NavLink>
    </Container>
  );
};

export default Index;
