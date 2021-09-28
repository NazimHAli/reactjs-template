import React from "react";
import GalleryList from "../components/gallery/GalleryList";
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
        large: "as-thumb.webp",
      },
    },
    {
      name: {
        first: "Darth",
        last: "Vader",
      },
      picture: {
        large: "dv-thumb.webp",
      },
    },
  ];

  beforeEach(async () => {
    render(
      <div data-testid="gallery">
        <React.Suspense fallback={<p>loading</p>}>
          <GalleryList loading={false} users={users} />
        </React.Suspense>
      </div>
    );

    // Wait for child components to lazyload
    await waitFor(() =>
      expect(screen.getAllByRole("img")[0].getAttribute("srcset")).toBe(
        users[0].picture.large
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
