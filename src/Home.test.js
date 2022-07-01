/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./pages/index";
import Layout from "./components/layout/layout";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
}));

describe("Test Homepage", () => {
  test("renders all call to action button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Home />
          </Layout>
        </Provider>
      </BrowserRouter>
    );
    const AllButton = screen.getAllByRole("button");
    expect(AllButton).toHaveLength(1);
  });
  test("renders call to action text", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Home />
          </Layout>
        </Provider>
      </BrowserRouter>
    );
    const Button = screen.getByRole("button");
    expect(Button).toBeInTheDocument();
    expect(Button).toHaveTextContent(/Shop now/gi);
  });
  test("should not render navbar", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Home />
          </Layout>
        </Provider>
      </BrowserRouter>
    );
    const navbar = screen.queryByRole("navigation");
    expect(navbar).toBeNull();
  });
});
