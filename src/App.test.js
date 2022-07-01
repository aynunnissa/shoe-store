import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import store from "./store";
import Navbar from "./components/layout/navbar";

describe("navigation bar", () => {
  test("hamburger nav", () => {
    const theme = createTheme();
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
    );

    const hamburger = screen.getByRole("button");
    expect(hamburger).toBeInTheDocument();
  });
});
