import React from "react";
// import React, { useState } from "react";

function ReservationInfo() {
  // { const [formData, setFormData] = useState({ date: "", dinners: 1, seating: "indoor", }); const handleChange = (e) => { const { name, value } = e.target; setFormData((prev) => ({ ...prev, [name]: value, })); }; const handleSubmit = (e) => { e.preventDefault(); console.log("Form submitted:", formData); };
  return (
    <div className="form-container">
      <div className="welcome-text">
        <h2>Welcome!</h2>
        <p>{`Let's save you the perfect spot.`}</p>
      </div>
      <form className="reservation-form">
        {/* Date field */}
        <div className="form-group">
          <label for="date"></label>
          Date
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Select a date"
            className="custom-input"
            // value={formData.date}
            // onChange={handleChange}
            required
          />
        </div>

        {/* Number of dinners */}
        <div className="form-group">
          <label for="dinners">Dinners</label>
          <input
            type="number"
            name="dinners"
            id="dinners"
            placeholder="Enter number"
            className="custom-input"
            min="1"
            max="10"
            // value={formData.dinners}
            // onChange={handleChange}
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
                // checked={formData.seating === "indoor"}
                // onChange={handleChange}
              />
              Indoor
            </label>
            <label for="outdoor">
              <input
                type="radio"
                name="seating"
                value="outdoor"
                id="outdoor"
                // checked={formData.seating === "outdoor"}
                // onChange={handleChange}
              />
              Outdoor
            </label>
          </div>
        </div>

        <button type="submit">Let's go</button>
      </form>
    </div>
  );
}

export default ReservationInfo;
