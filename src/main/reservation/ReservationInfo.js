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
        <label>
          Date:
          <input
            type="date"
            name="date"
            placeholder="Select a date"
            className="custom-input"
            // value={formData.date}
            // onChange={handleChange}
            required
          />
        </label>

        {/* Number of dinners */}
        <label>
          Number of dinners:
          <input
            type="number"
            name="dinners"
            placeholder="Enter number"
            className="custom-input"
            min="1"
            // value={formData.dinners}
            // onChange={handleChange}
            required
          />
        </label>

        {/* Radio buttons for seating */}
        <fieldset>
          <legend>Seating option:</legend>
          <label>
            <input
              type="radio"
              name="seating"
              value="indoor"
              // checked={formData.seating === "indoor"}
              // onChange={handleChange}
            />
            Indoor
          </label>
          <label>
            <input
              type="radio"
              name="seating"
              value="outdoor"
              // checked={formData.seating === "outdoor"}
              // onChange={handleChange}
            />
            Outdoor
          </label>
        </fieldset>

        <button type="submit">Let's go</button>
      </form>
    </div>
  );
}

export default ReservationInfo;
