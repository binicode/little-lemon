import React from "react";

function ReservationInfo({ formData, handleChange, nextStep }) {
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
        <label for="diners">Diners</label>
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
        <legend>Seating option</legend>
        <div className="radio">
          <label for="indoor">
            <input
              type="radio"
              name="seating"
              value="indoor"
              id="indoor"
              checked={formData.reservation.seating === "indoor"}
              onChange={(e) =>
                handleChange("reservation", "seating", e.target.value)
              }
            />
            Indoor
          </label>
          <label for="outdoor">
            <input
              type="radio"
              name="seating"
              value="outdoor"
              id="outdoor"
              checked={formData.reservation.seating === "outdoor"}
              onChange={(e) =>
                handleChange("reservation", "seating", e.target.value)
              }
            />
            Outdoor
          </label>
        </div>
      </div>

      <button type="button" onClick={nextStep}>
        Let's go
      </button>
    </div>
  );
}

export default ReservationInfo;
