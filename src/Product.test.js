/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Products from "./pages/products";
import Layout from "./components/layout/layout";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/products",
  }),
}));

describe("Test Products Page", () => {
  test("renders navbar", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Products />
          </Layout>
        </Provider>
      </BrowserRouter>
    );
    const navbar = screen.queryByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });
  test("renders add to cart buttons", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Products />
          </Layout>
        </Provider>
      </BrowserRouter>
    );
    const initialProductsTotal = store.getState().products.products.length;
    const Buttons = screen.getAllByRole("button");
    expect(Buttons).toHaveLength(initialProductsTotal);
  });
  test("click add to cart button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Products />
          </Layout>
        </Provider>
      </BrowserRouter>
    );
    const Button = screen.getAllByRole("button")[0];
    userEvent.click(Button);
    let cartTotal = store.getState().cart.totalQuantity;
    expect(cartTotal).toBe(1);
    userEvent.dblClick(Button);
    cartTotal = store.getState().cart.totalQuantity;
    expect(cartTotal).toBe(3);
  });
  test("renders image with alternative text", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Products />
          </Layout>
        </Provider>
      </BrowserRouter>
    );
    const images = screen.getAllByRole("img");
    images.forEach(img => expect(img).toHaveAccessibleName());
  });
});
