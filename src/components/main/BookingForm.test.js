import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

const renderBookingForm = () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={["17:00", "18:00"]} dispatch={() => {}} />
    </MemoryRouter>
  );
};

// --- Static text ---
test("renders static text in BookingForm", () => {
  renderBookingForm();
  expect(screen.getByText("Welcome!")).toBeInTheDocument();
  expect(screen.getByText("Let's save you the perfect spot.")).toBeInTheDocument();
});

// --- Submit button disabled by default ---
test("submit button is disabled when form is empty", () => {
  renderBookingForm();
  expect(screen.getByText("Submit reservation")).toBeDisabled();
});

// --- Date validation ---
test("submit button is still disabled when only date is filled", () => {
  renderBookingForm();
  fireEvent.change(screen.getByLabelText("Date"), {
    target: { value: "2026-06-01" },
  });
  expect(screen.getByText("Submit reservation")).toBeDisabled();
});

// --- Diners validation ---
test("submit button is still disabled when only diners is filled", () => {
  renderBookingForm();
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "3" },
  });
  expect(screen.getByText("Submit reservation")).toBeDisabled();
});

// --- Full valid form enables submit ---
test("submit button is enabled when all fields are filled correctly", () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText("Date"), {
    target: { value: "2026-06-01" },
  });
  fireEvent.change(screen.getByLabelText("Choose time"), {
    target: { value: "17:00" },
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "3" },
  });
  fireEvent.click(screen.getByLabelText("Birthday"));

  expect(screen.getByText("Submit reservation")).toBeEnabled();
});

// --- Diners out of range ---
test("submit button is disabled when diners is 0", () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText("Date"), {
    target: { value: "2026-06-01" },
  });
  fireEvent.change(screen.getByLabelText("Choose time"), {
    target: { value: "17:00" },
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "0" }, // invalid
  });
  fireEvent.click(screen.getByLabelText("Birthday"));

  expect(screen.getByText("Submit reservation")).toBeDisabled();
});

test("submit button is disabled when diners exceeds 10", () => {
  renderBookingForm();

  fireEvent.change(screen.getByLabelText("Date"), {
    target: { value: "2026-06-01" },
  });
  fireEvent.change(screen.getByLabelText("Choose time"), {
    target: { value: "17:00" },
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "11" }, // invalid
  });
  fireEvent.click(screen.getByLabelText("Birthday"));

  expect(screen.getByText("Submit reservation")).toBeDisabled();
});