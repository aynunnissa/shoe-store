import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../src/pages/index";

describe("Homepage", () => {
  test("renders call to action button", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test("renders call to action text", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    // getByTest can throw error by default, but this is better
    expect(screen.getAllByText("Shop now")).toHaveLength(2);
  });
});
