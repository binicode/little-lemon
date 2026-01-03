import React from "react";

export default function PersonalInfo() {
  return (
    <div>
      <div className="form-container">
        <div className="welcome-text">
          <h3>{`Please provide your information here.`}</h3>
        </div>
        <form className="reservation-form">
          {/* First name */}
          <div className="form-group">
            <label for="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Enter your first name"
              className="custom-input"
              // value={formData.dinners}
              // onChange={handleChange}
              required
            />
          </div>

          {/* Last name */}
          <div className="form-group">
            <label for="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              placeholder="Enter your last name"
              className="custom-input"
              // value={formData.dinners}
              // onChange={handleChange}
              required
            />
          </div>

          {/* Number of dinners */}
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="custom-input"
              // value={formData.dinners}
              // onChange={handleChange}
              required
            />
          </div>

          {/* Number of dinners */}
          <div className="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter number"
              className="custom-input"
              // value={formData.dinners}
              // onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Reserve Table</button>
        </form>
      </div>
    </div>
  );
}
