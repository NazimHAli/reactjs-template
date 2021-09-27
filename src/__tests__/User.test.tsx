import React from "react";
import User from "../components/User";
import { render, screen, waitFor } from "@testing-library/react";

describe("User", () => {
  let testElement;
  const user = {
    name: {
      first: "Anakin",
      last: "Skywalker",
    },
    picture: {
      thumbnail: "as-thumb.webp",
    },
  };

  beforeEach(async () => {
    render(
      <ol data-testid="user">
        <User user={user} key={0} />
      </ol>
    );

    // Wait for child component to lazyload
    await waitFor(() =>
      expect(screen.getAllByRole("img")[0].getAttribute("srcset")).toBe(
        user.picture.thumbnail
      )
    );
    testElement = screen.getByTestId("user");
  });

  test("renders ordered list", () => {
    expect(testElement.querySelectorAll("li").length).toEqual(1);
  });

  test("single user element", () => {
    expect(testElement.textContent).toContain(
      `${user.name.first} ${user.name.last}`
    );
  });
});
