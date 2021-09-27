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
      large: "as-thumb.webp",
    },
  };

  beforeEach(async () => {
    render(
      <div data-testid="user">
        <React.Suspense fallback={<p>loading</p>}>
          <User user={user} key={0} />
        </React.Suspense>
      </div>
    );

    // Wait for child component to lazyload
    await waitFor(() =>
      expect(screen.getAllByRole("img")[0].getAttribute("srcset")).toBe(
        user.picture.large
      )
    );
    testElement = screen.getByTestId("user");
  });

  test("single user element", () => {
    expect(testElement.textContent).toContain(
      `${user.name.first} ${user.name.last}`
    );
  });
});
