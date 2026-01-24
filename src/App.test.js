import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("render Reserve a Table", () => {
  render(<App />);
  screen.getByText("Reserve a Table");
  expect("Reserve a Table").toBeInTheDocument();
  userEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(screen.getByText(/success/i)).toBeInTheDocument();
});
