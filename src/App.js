/*global fetchAPI */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import BookingForm from "./components/main/BookingForm";
import ConfirmedBooking from "./components/main/ConfirmedBooking";
import { useReducer } from "react";

export function initializeTimes() {
    return fetchAPI(new Date());
}

// Runs whenever dispatch is called
export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));
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
           <Route path="confirmed" element={<ConfirmedBooking />} ></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
