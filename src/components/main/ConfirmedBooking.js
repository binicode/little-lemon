// src/components/main/ConfirmedBooking.jsx

import { Form, useNavigate } from "react-router-dom";
import "./ConfirmedBooking.css"

function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <section className="confirmed-booking" aria-label="Booking confirmation">
      <h1>
        Booking Confirmed!{" "}
        <span role="img" aria-label="Celebration">
          🎉
        </span>
      </h1>

      <p role="status">Thank you! Your table has been successfully reserved.</p>
      <p>We look forward to seeing you at Little Lemon.</p>
      <button onClick={() => navigate("/")} className="btn" aria-label="Back to home">
        Back to Home
      </button>
    </section>
  );
}

export default ConfirmedBooking;