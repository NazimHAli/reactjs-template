import React from "react";
import GalleryList from "../components/GalleryList";
import { render, screen, waitFor } from "@testing-library/react";

describe("GalleryList", () => {
  let testElement;
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
      <div data-testid="gallery">
        <GalleryList loading={false} users={users} />
      </div>
    );

    // Wait for child components to lazyload
    await waitFor(() =>
      expect(screen.getAllByRole("img")[0].getAttribute("srcset")).toBe(
        users[0].picture.thumbnail
      )
    );

    testElement = screen.getByTestId("gallery");
  });

  test("renders styled items", () => {
    expect(testElement.querySelectorAll(".MuiPaper-root").length).toEqual(
      users.length
    );
  });

  test("renders list of users", () => {
    users.map((user) => {
      expect(testElement.textContent).toContain(
        `${user.name.first} ${user.name.last}`
      );
    });
  });
});
