import React from "react";
import Thumbnail from "../components/Thumbnail";
import { render, screen } from "@testing-library/react";

describe("Thumbnail", () => {
  test("renders image srcset", () => {
    const imgsrc = "https://www.moomoo.com/img/1.webp";
    render(<Thumbnail image={imgsrc} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement.getAttribute("srcset")).toBe(imgsrc);
  });
});
