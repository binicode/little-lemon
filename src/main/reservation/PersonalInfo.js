import React, { useState } from "react";

export default function PersonalInfo({
  formData,
  handleChange,
  prevStep,
  nextStep,
}) {
  return (
    <div>
      <div className="form-container">
        <div className="welcome-text">
          <h3>{`Please provide your information here.`}</h3>
        </div>

        {/* First name */}
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your first name"
            className="custom-input"
            value={formData.personal.name}
            onChange={(e) => handleChange("personal", "name", e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="custom-input"
            value={formData.personal.email}
            onChange={(e) => handleChange("personal", "email", e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter number"
            className="custom-input"
            value={formData.personal.password}
            onChange={(e) =>
              handleChange("personal", "password", e.target.value)
            }
            required
          />
        </div>
        <div className="prev-next">
          <button type="button" onClick={prevStep}>
            Back
          </button>
          <button
            type="button"
            onClick={(e) => {
              const form = e.target.closest("form");
              if (form.checkValidity()) {
                nextStep();
              } else {
                form.reportValidity();
              }
            }}
          >
            Reserve Table
          </button>
        </div>
      </div>
    </div>
  );
}
