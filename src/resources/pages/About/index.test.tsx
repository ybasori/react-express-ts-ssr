import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import renderComponent from "../../utils/renderComponent";

describe("test about page", () => {
  test("render page", async () => {
    renderComponent({ router: "/about" });

    const aboutText = await screen.findByText("This is About");

    expect(aboutText).toBeInTheDocument();
  });
});
