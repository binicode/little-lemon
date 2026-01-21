import React, { useState } from "react";

import "./Reservation.css";
import Back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import ReservationInfo from "./reservation/ReservationInfo";
import PersonalInfo from "./reservation/PersonalInfo";
import PaymentInfo from "./reservation/PaymentInfo";

function Reservation() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reservation: { date: "", diners: "", seating: "" },
    personal: { name: "", email: "", password: "" },
    payment: { cardNumber: "", expiry: "", cvv: "" },
  });

  // Handle input changes
  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  // Navigation
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Final submit
  const validateCardNumber = (number) => {
    const sanitized = number.replace(/\D/g, "");
    if (sanitized.length < 13 || sanitized.length > 19) {
      return "Card number must be 13–19 digits";
    }
    // Luhn check
    let sum = 0,
      shouldDouble = false;
    for (let i = sanitized.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitized[i], 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    if (sum % 10 !== 0) return "Invalid card number";
    return "";
  };

  const validateExpiry = (expiry) => {
    if (!expiry) return "Expiry date is required";
    const [month, year] = expiry.split("/").map(Number);
    if (!month || !year || month < 1 || month > 12) return "Invalid month";
    const now = new Date();
    const expDate = new Date(`20${year}`, month - 1);
    if (expDate < now) return "Card has expired";
    return "";
  };

  const validateCVV = (cvv) => {
    if (!/^\d{3,4}$/.test(cvv)) return "CVV must be 3 or 4 digits";
    return "";
  };

  const [errors, setErrors] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const cardError = validateCardNumber(formData.payment.cardNumber);
    const expiryError = validateExpiry(formData.payment.expiry);
    const cvvError = validateCVV(formData.payment.cvv);
    setErrors({ cardNumber: cardError, expiry: expiryError, cvv: cvvError });
    if (!cardError && !expiryError && !cvvError) {
      console.log("Payment details valid:", formData.payment); // TODO: send to server
    }
  };

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
              <p>Step {step} of 3</p>

              {step === 1 && (
                <ReservationInfo
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                />
              )}
              {step === 2 && (
                <PersonalInfo
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {step === 3 && (
                <PaymentInfo
                  formData={formData}
                  handleChange={handleChange}
                  handleFinalSubmit={handleFinalSubmit}
                />
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reservation;
