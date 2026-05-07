/* global submitAPI */
import React, { useState } from "react";

import "./BookingForm.css";
import Back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

function BookingForm({ availableTimes, dispatch }) {

  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [diners, setDiners] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({ type: "UPDATE_TIMES", date: e.target.value }); // 👈 send date in the message
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = submitAPI({ date, time, diners, occasion });
    if (result) {
      navigate("/confirmed");
    } else {
      alert("Failed to submit reservation. Please try again.");
    }
  };


  return (
    <>
      <section className="reservation">
        <div className="reservation-content">
          <div className="reservation-left">
            <button className="back-btn" onClick={() => navigate("/")}>
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
            <form className="reservation-form" onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="welcome-text">
                  <h2>Welcome!</h2>
                  <p>Let's save you the perfect spot.</p>
                </div>

                {/* Date */}
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={handleDateChange}
                    required
                  />
                </div>

                {/* Time */}
                <div className="form-group">
                  <label htmlFor="time">Choose time</label>
                  <select
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  >
                    {availableTimes.length > 0 ? (
                      availableTimes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))
                    ) : (
                      <option disabled>No times available</option>
                    )}
                  </select>
                </div>

                {/* Diners */}
                <div className="form-group">
                  <label htmlFor="diners">Number of guests</label>
                  <input
                    type="number"
                    id="diners"
                    min="1"
                    max="10"
                    value={diners}
                    onChange={(e) => setDiners(e.target.value)}
                    required
                  />
                </div>

                {/* Occasion */}
                <div className="form-group-radio">
                  <legend>Occasion</legend>
                  <label>
                    <input
                      type="radio"
                      name="occasion"
                      value="birthday"
                      checked={occasion === "birthday"}
                      onChange={(e) => setOccasion(e.target.value)}
                    />
                    Birthday
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="occasion"
                      value="anniversary"
                      checked={occasion === "anniversary"}
                      onChange={(e) => setOccasion(e.target.value)}
                    />
                    Anniversary
                  </label>
                </div>

                <button type="submit">Submit reservation</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingForm;
