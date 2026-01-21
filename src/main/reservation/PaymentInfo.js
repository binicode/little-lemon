import React, { useState } from "react";
import "../Reservation.css";
import CreditCard from "../../assets/creditcard.svg";

export default function PaymentInfo({
  formData,
  handleChange,
  handleFinalSubmit,
}) {
  return (
    <div>
      <div className="form-container">
        <div className="welcome-text">
          <h3>{`Please provide your information here.`}</h3>
        </div>

        {/* Card number */}
        <div className="form-group">
          <label for="card-number">Card Number</label>
          <input
            type="number-number-number-number"
            name="card-number"
            id="card-number"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            className="custom-input"
            value={formData.payment.cardNumber}
            onChange={(e) =>
              handleChange("payment", "cardNumber", e.target.value)
            }
            required
          />
        </div>

        <div className="card-details">
          <div className="form-group">
            <label for="exp-date">Exp Date</label>
            <input
              type="number/number"
              name="exp-date"
              id="exp-date"
              placeholder="MM/YY"
              className="custom-input"
              value={formData.payment.expiry}
              onChange={(e) =>
                handleChange("payment", "expiry", e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label for="cvv">CVV</label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              placeholder="123"
              className="custom-input"
              minLength={3}
              maxLength={3}
              value={formData.payment.cvv}
              onChange={(e) => handleChange("payment", "cvv", e.target.value)}
              required
            />
          </div>
          <button className="credit-card-icon">
            <img src={CreditCard} alt="credit card icon" />
          </button>
        </div>

        <button type="submit">Confirm Reservation</button>
      </div>
    </div>
  );
}
