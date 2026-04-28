import React, { useState } from "react";

import "./Reservation.css";
import Back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import ReservationInfo from "./BookingForm";

function Reservation() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reservation: { date: "", diners: "", Occasion: "" }
  });

  // Handle input changes
  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };


 /*  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setErrors({ cardNumber: cardError, expiry: expiryError, cvv: cvvError });
    if (!cardError && !expiryError && !cvvError) {
      console.log("Payment details valid:", formData.payment); // TODO: send to server
    }
  };
 */
  return (
    <>
      <section className="reservation">
        <div className="reservation-content">
          <div className="reservation-left">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <img src={Back} alt="back icon" style={{ width: "20px" }} />
              Home
            </button>
            <div className="main-title-container">
              <div className="main-title">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
              </div>
            </div>
          </div>

          <div className="reservation-right">
            <form className="reservation-form">
                <ReservationInfo
                  formData={formData}
                  handleChange={handleChange}
                />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reservation;
