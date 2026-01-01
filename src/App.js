import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./main/Main";
import Footer from "./components/footer/Footer";
import PaymentInfo from "./main/reservation/PaymentInfo";
import ReservationInfo from "./main/reservation/ReservationInfo";
import PersonalInfo from "./main/reservation/PersonalInfo";
import Reservation from "./main/Reservation";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="reservation" element={<Reservation />}>
            <Route path="paymentInfo" element={<PaymentInfo />} />
            <Route path="personalInfo" element={<PersonalInfo />} />
            <Route path="" element={<ReservationInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
