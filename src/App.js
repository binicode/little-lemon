import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import BookingForm from "./components/main/BookingForm";
import { useState } from "react";
import { useReducer } from "react";

export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// Runs whenever dispatch is called
export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, return same times regardless of date
      // Later: fetch real times based on action.date
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
}

function App() {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="reservation" element={<BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
           />} ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
