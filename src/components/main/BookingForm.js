import React from "react";

function ReservationInfo({ formData, handleChange}) {
  return (
    <div className="form-container">
      <div className="welcome-text">
        <h2>Welcome!</h2>
        <p>{`Let's save you the perfect spot.`}</p>
      </div>
      {/* Date field */}
      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Select a date"
          className="custom-input"
          value={formData.reservation.date}
          onChange={(e) => handleChange("reservation", "date", e.target.value)}
          required
        />
      </div>

      {/* Number of dinners */}
      <div className="form-group">
        <label htmlFor="diners">Number of guests</label>
        <input
          type="number"
          name="diners"
          id="diners"
          placeholder="Enter number"
          className="custom-input"
          min="1"
          max="10"
          value={formData.reservation.diners}
          onChange={(e) =>
            handleChange("reservation", "diners", e.target.value)
          }
          required
        />
      </div>
      {/* Radio buttons for seating */}
      <div className="form-group-radio">
        <legend>Occasion</legend>
        <div className="radio">
          <label htmlFor="birthday">
            <input
              type="radio"
              name="occasion"
              value="birthday"
              id="birthday"
              checked={formData.reservation.seating === "birthday"}
              onChange={(e) =>
                handleChange("reservation", "seating", e.target.value)
              }
            />
            Birthday
          </label>
          <label htmlFor="anniversary">
            <input
              type="radio"
              name="occasion"
              value="anniversary"
              id="anniversary"
              checked={formData.reservation.seating === "anniversary"}
              onChange={(e) =>
                handleChange("reservation", "seating", e.target.value)
              }
            />
            Anniversary
          </label>
        </div>
      </div>
      <button
        type="button"
        /* onClick={(e) => {
          const form = e.target.closest("form");
          if (form.checkValidity()) {
            nextStep();
          } else {
            form.reportValidity();
          }
        }} */
      >
        Submit reservation
      </button>
    </div>
  );
}

export default ReservationInfo;
