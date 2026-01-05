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
    payment: { cardNumber: "", expiry: "" },
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting full reservation:", formData); // TODO: send formData to server via fetch/axios
  };

  return (
    <>
      <section className="reservation">
        <div className="reservation-content">
          <div className="reservation-left">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <img src={Back} alt="back icon" style={{ width: "20px" }} />
              Back
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
                  prevStep={prevStep}
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
