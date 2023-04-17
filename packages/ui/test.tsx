import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("works", () => {
    render(<Button>hello</Button>);

    screen.findByRole("button", {});

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
