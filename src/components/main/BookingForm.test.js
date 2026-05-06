import {render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "./BookingForm";

test("renders static text in BookingForm", () => {
  render(
    <MemoryRouter>
      <BookingForm availableTimes={["17:00", "18:00",]} dispatch={() => {}} />
    </MemoryRouter>
  );

  expect(screen.getByText("Welcome!")).toBeInTheDocument();
  expect(screen.getByText("Let's save you the perfect spot.")).toBeInTheDocument();
});