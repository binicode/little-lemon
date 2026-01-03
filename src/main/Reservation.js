import React from "react";
import "./Reservation.css";
import { Outlet } from "react-router-dom";
import Back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const navigate = useNavigate();
  return (
    <>
      <section className="reservation">
        <div className="reservation-content">
          <div className="reservation-left">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <img src={Back} alt="back icon" style={{ width: "20px" }} />
              Back
            </button>
            <div className="main-title-container">
              <div className="main-title">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
              </div>
            </div>
          </div>

          <div className="reservation-right">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}

export default Reservation;
