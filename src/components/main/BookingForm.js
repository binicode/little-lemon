/* global submitAPI */
import React, { useState, useCallback } from "react";
import "./BookingForm.css";
import Back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

// ─── Error types for categorized handling ───────────────────────────────────
const ERROR_TYPES = {
  VALIDATION: "validation",
  NETWORK: "network",
  SERVER: "server",
  UNKNOWN: "unknown",
};

const ERROR_MESSAGES = {
  date_required: "Please select a date.",
  date_past: "Please choose a future date.",
  time_required: "Please select an available time.",
  diners_required: "Please enter the number of guests.",
  diners_range: "Guest count must be between 1 and 10.",
  occasion_required: "Please select an occasion.",
  times_update_failed: "Could not load available times. Please try a different date.",
  submit_failed: "Reservation could not be completed. Please try again.",
  submit_error: "An unexpected error occurred. Please refresh and try again.",
};

// ─── Field-level validation ──────────────────────────────────────────────────
function validateFields({ date, time, diners, occasion }) {
  const fieldErrors = {};
  const today = new Date().toISOString().split("T")[0];

  if (!date) {
    fieldErrors.date = ERROR_MESSAGES.date_required;
  } else if (date < today) {
    fieldErrors.date = ERROR_MESSAGES.date_past;
  }

  if (!time) {
    fieldErrors.time = ERROR_MESSAGES.time_required;
  }

  if (diners === "" || diners === null) {
    fieldErrors.diners = ERROR_MESSAGES.diners_required;
  } else if (Number(diners) < 1 || Number(diners) > 10) {
    fieldErrors.diners = ERROR_MESSAGES.diners_range;
  }

  if (!occasion) {
    fieldErrors.occasion = ERROR_MESSAGES.occasion_required;
  }

  return fieldErrors;
}

// ─── ErrorMessage component ──────────────────────────────────────────────────
function FieldError({ message }) {
  if (!message) return null;
  return (
    <span className="field-error" role="alert" aria-live="polite">
      {message}
    </span>
  );
}

// ─── Banner for global/submit errors ────────────────────────────────────────
function ErrorBanner({ error, onDismiss }) {
  if (!error) return null;
  return (
    <div
      className={`error-banner error-banner--${error.type}`}
      role="alert"
      aria-live="assertive"
    >
      <span className="error-banner__icon" aria-hidden="true">⚠</span>
      <p className="error-banner__message">{error.message}</p>
      <button
        className="error-banner__dismiss"
        onClick={onDismiss}
        aria-label="Dismiss error"
      >
        ✕
      </button>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
function BookingForm({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [diners, setDiners] = useState("");
  const [occasion, setOccasion] = useState("");

  const [fieldErrors, setFieldErrors] = useState({});   // per-field inline errors
  const [globalError, setGlobalError] = useState(null); // banner-level error
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});            // track which fields were visited

  const today = new Date().toISOString().split("T")[0];

  // ── Clear a single field error when the user corrects it ──────────────────
  const clearFieldError = (field) => {
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  // ── Mark field as touched on blur, validate immediately ───────────────────
  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errors = validateFields({ date, time, diners, occasion });
    if (errors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: errors[field] }));
    } else {
      clearFieldError(field);
    }
  };

  // ── Date change: update times, handle failure gracefully ──────────────────
  const handleDateChange = useCallback(
    async (e) => {
      const selectedDate = e.target.value;
      setDate(selectedDate);
      clearFieldError("date");
      setGlobalError(null);
      setTime(""); // reset time when date changes

      try {
        dispatch({ type: "UPDATE_TIMES", date: selectedDate });
      } catch (err) {
        console.error("Failed to update times:", err);
        setGlobalError({
          type: ERROR_TYPES.NETWORK,
          message: ERROR_MESSAGES.times_update_failed,
        });
      }
    },
    [dispatch]
  );

  // ── Form submission with full validation pass ─────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setGlobalError(null);

    // Mark all fields as touched so errors show
    setTouched({ date: true, time: true, diners: true, occasion: true });

    const errors = validateFields({ date, time, diners, occasion });
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      // Focus first invalid field for accessibility
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const result = submitAPI({ date, time, diners: Number(diners), occasion });
      if (result) {
        navigate("/confirmed");
      } else {
        setGlobalError({
          type: ERROR_TYPES.SERVER,
          message: ERROR_MESSAGES.submit_failed,
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setGlobalError({
        type: ERROR_TYPES.UNKNOWN,
        message: ERROR_MESSAGES.submit_error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = Object.keys(validateFields({ date, time, diners, occasion })).length === 0;

  return (
    <section className="reservation">
      <div className="reservation-content">
        {/* ── Left panel ── */}
        <div className="reservation-left">
          <button
            className="back-btn"
            onClick={() => navigate("/")}
            aria-label="Go back to home"
            type="button"
          >
            <img src={Back} alt="" aria-hidden="true" style={{ width: "20px" }} />
            Home
          </button>
          <div className="main-title-container">
            <div className="main-title">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </div>
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="reservation-right">
          <form
            className="reservation-form"
            onSubmit={handleSubmit}
            aria-label="Reservation form"
            noValidate
          >
            <div className="form-container">
              <div className="welcome-text">
                <h2>Welcome!</h2>
                <p>Let&apos;s save you the perfect spot.</p>
              </div>

              {/* Global error banner */}
              <ErrorBanner
                error={globalError}
                onDismiss={() => setGlobalError(null)}
              />

              {/* ── Date ── */}
              <div className={`form-group ${fieldErrors.date ? "form-group--error" : ""}`}>
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={handleDateChange}
                  onBlur={() => handleBlur("date")}
                  min={today}
                  aria-invalid={!!fieldErrors.date}
                  aria-describedby={fieldErrors.date ? "date-error" : undefined}
                  required
                />
                <FieldError message={touched.date && fieldErrors.date} />
              </div>

              {/* ── Time ── */}
              <div className={`form-group ${fieldErrors.time ? "form-group--error" : ""}`}>
                <label htmlFor="time">Choose time</label>
                <select
                  id="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                    clearFieldError("time");
                  }}
                  onBlur={() => handleBlur("time")}
                  aria-invalid={!!fieldErrors.time}
                  aria-describedby={fieldErrors.time ? "time-error" : undefined}
                  required
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  {availableTimes && availableTimes.length > 0 ? (
                    availableTimes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No times available for this date
                    </option>
                  )}
                </select>
                <FieldError message={touched.time && fieldErrors.time} />
              </div>

              {/* ── Diners ── */}
              <div className={`form-group ${fieldErrors.diners ? "form-group--error" : ""}`}>
                <label htmlFor="diners">Number of guests</label>
                <input
                  type="number"
                  id="diners"
                  min="1"
                  max="10"
                  value={diners}
                  onChange={(e) => {
                    setDiners(e.target.value);
                    clearFieldError("diners");
                  }}
                  onBlur={() => handleBlur("diners")}
                  aria-invalid={!!fieldErrors.diners}
                  aria-describedby={fieldErrors.diners ? "diners-error" : undefined}
                  required
                />
                <FieldError message={touched.diners && fieldErrors.diners} />
              </div>

              {/* ── Occasion ── */}
              <fieldset
                className={`form-group-radio ${fieldErrors.occasion ? "form-group--error" : ""}`}
                role="radiogroup"
                aria-label="Select occasion"
                aria-invalid={!!fieldErrors.occasion}
              >
                <legend>Occasion</legend>
                {["birthday", "anniversary"].map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="occasion"
                      value={value}
                      checked={occasion === value}
                      onChange={(e) => {
                        setOccasion(e.target.value);
                        clearFieldError("occasion");
                      }}
                      onBlur={() => handleBlur("occasion")}
                    />
                    {value.charAt(0).toUpperCase() + value.slice(1)}
                  </label>
                ))}
                <FieldError message={touched.occasion && fieldErrors.occasion} />
              </fieldset>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                aria-label={isSubmitting ? "Submitting reservation…" : "Submit reservation"}
                aria-busy={isSubmitting}
              >
                {isSubmitting ? "Submitting…" : "Submit reservation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;