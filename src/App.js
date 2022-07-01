import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages";
import "./App.css";
import Products from "./pages/products";
import Layout from "./components/layout/layout";
import Cart from "./pages/cart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="shoe-store">
          <Route exact path="/" element={<Index />} />
          <Route path="products">
            <Route exact path="" element={<Products />} />
            <Route path=":type" element={<Products />} />
          </Route>
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
