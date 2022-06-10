import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import "./App.css";
import Products from "./pages/products";
import Layout from "./components/layout/layout";
import Cart from "./pages/cart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
