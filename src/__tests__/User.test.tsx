import React from "react";
import User from "../components/User";
import { render, screen, waitFor } from "@testing-library/react";

describe("User", () => {
  let listElement;
  const users = [
    {
      name: {
        first: "Anakin",
        last: "Skywalker",
      },
      picture: {
        thumbnail: "as-thumb.webp",
      },
    },
    {
      name: {
        first: "Darth",
        last: "Vader",
      },
      picture: {
        thumbnail: "dv-thumb.webp",
      },
    },
  ];

  beforeEach(async () => {
    render(
      <ol data-testid="users-ol">
        {Array.from(users).map((user, index) => (
          <User user={user} key={index} />
        ))}
      </ol>
    );

    // Wait for child component to lazyload
    await waitFor(() =>
      expect(screen.getAllByRole("img")[0].getAttribute("srcset")).toBe(
        users[0].picture.thumbnail
      )
    );
    listElement = screen.getByTestId("users-ol");
  });

  test("renders ordered list", () => {
    expect(listElement.querySelectorAll("li").length).toEqual(users.length);
  });

  test("renders users", () => {
    users.map((user) => {
      expect(listElement.textContent).toContain(
        `${user.name.first} ${user.name.last}`
      );
    });
  });
});
