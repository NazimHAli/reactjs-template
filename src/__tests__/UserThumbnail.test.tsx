import React from "react";
import UserThumbnail from "../components/UserThumbnail";
import { render, screen } from "@testing-library/react";

describe("UserThumbnail", () => {
  test("renders image srcset", () => {
    const imgsrc = "https://www.interwebz.com/img/1.webp";
    render(<UserThumbnail image={imgsrc} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement.getAttribute("srcset")).toBe(imgsrc);
  });
});
