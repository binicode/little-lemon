// src/components/main/ConfirmedBooking.jsx

import { Form, useNavigate } from "react-router-dom";
import "./ConfirmedBooking.css"

function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <section className="confirmed-booking">
      <h1>Booking Confirmed! 🎉</h1>
      <p>Thank you! Your table has been successfully reserved.</p>
      <p>We look forward to seeing you at Little Lemon.</p>
      <button onClick={() => navigate("/")} className="btn">Back to Home</button>
    </section>
  );
}

export default ConfirmedBooking;