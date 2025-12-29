import React from "react";
import { Outlet } from "react-router-dom";
import Back from "../assets/back.svg";

function Reservation() {
  return (
    <div>
      <button>
        <img src={Back} alt="back icon" style={{ width: "20px" }} />
        Back
      </button>
      <h2>Reservation</h2>
      <Outlet />
    </div>
  );
}

export default Reservation;
