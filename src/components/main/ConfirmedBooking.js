// src/components/main/ConfirmedBooking.jsx

import { useNavigate } from "react-router-dom";

function ConfirmedBooking() {
  const navigate = useNavigate();

  return (
    <section style={{ textAlign: "center", padding: "50px" }}>
      <h1>Booking Confirmed! 🎉</h1>
      <p>Thank you! Your table has been successfully reserved.</p>
      <p>We look forward to seeing you at Little Lemon.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </section>
  );
}

export default ConfirmedBooking;