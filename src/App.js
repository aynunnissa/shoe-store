import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages";
import "./App.css";
import ProductLayout from "./components/layout/productlayout";
import Products from "./pages/products";
import Layout from "./components/layout/layout";
import Cart from "./pages/cart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <ProductLayout>
          <Route path="products">
            <Route exact path="" element={<Products />} />
            <Route path=":type" element={<Products />} />
          </Route>
        </ProductLayout>
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
