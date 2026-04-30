import React, { useState } from "react";

import "./BookingPage.css";
import Back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [diners, setDiners] = useState("");
  const [occasion, setOccasion] = useState("");

  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log({
        date,
        time,
        diners,
        occasion
      });
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
                  onChange={(e) => setDate(e.target.value)}
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
                  {availableTimes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
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

export default BookingPage;
