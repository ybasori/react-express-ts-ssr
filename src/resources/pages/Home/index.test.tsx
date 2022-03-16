import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import renderComponent from "../../utils/renderComponent";

describe("test home page", () => {
  test("render page", async () => {
    renderComponent({ router: "/" });

    const homeText = await screen.findByText("This is Home");

    expect(homeText).toBeInTheDocument();
  });
});
