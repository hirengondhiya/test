import { fireEvent, waitFor } from "@testing-library/react";
import * as redux from "react-redux";

import { render, screen } from "../test-utils";
import ToggleLogging from "./ToggleLogging";

describe("Toggle Logging Button", () => {
  let button;
  beforeEach(() => {
    render(<ToggleLogging />);
    button = screen.getByTestId("toggle-logging-button");
  });
  test("renders Toggle logging button", () => {
    expect(button).toBeInTheDocument();
  });
  test("acts on click event", async () => {
    expect(["Pause Log", "Resume Log"].includes(button.textContent)).toBe(true);
    const nextButtonText =
      button.textContent === "Pause Log" ? "Resume Log" : "Pause Log";

    fireEvent.click(button);

    await waitFor(() => {
      screen.getByText(nextButtonText);
    });

    const resumeButton = screen.getByText(nextButtonText);
    expect(resumeButton).toBeInTheDocument();
  });
});

test("renders Pause Log when logging is enabled", () => {
  const useSelectorSpy = jest.spyOn(redux, "useSelector");
  useSelectorSpy.mockReturnValue(true);
  render(<ToggleLogging />);

  const button = screen.getByTestId("toggle-logging-button");
  expect(button).toHaveTextContent("Pause Log");
});

test("renders Resume Log when logging is disabled", () => {
  const useSelectorSpy = jest.spyOn(redux, "useSelector");
  useSelectorSpy.mockReturnValue(false);
  render(<ToggleLogging />);

  const button = screen.getByTestId("toggle-logging-button");
  expect(button).toHaveTextContent("Resume Log");
});
