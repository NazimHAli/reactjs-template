import React from "react";
import LoadingSkeleton from "../components/LoadingSkeleton";
import { render, screen } from "@testing-library/react";

describe("LoadingSkeleton", () => {
  test("skeleton style rendered", () => {
    render(
      <div data-testid="skeleton">
        <LoadingSkeleton index={0} />
      </div>
    );

    const testElement = screen.getByTestId("skeleton");

    expect(testElement.querySelector("span").className).toContain(
      "MuiSkeleton-root MuiSkeleton-rectangular"
    );
    expect(testElement.querySelectorAll("span")[2].style.width).toBe("80%");
  });
});
