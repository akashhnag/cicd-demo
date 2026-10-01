import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the CI/CD demo heading", () => {
    render(<App />);
    expect(screen.getByText("React CI/CD Demo")).toBeTruthy();
  });
});