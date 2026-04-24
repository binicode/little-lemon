import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import PaymentInfo from "./components/main/reservation/PaymentInfo";
import ReservationInfo from "./components/main/reservation/ReservationInfo";
import PersonalInfo from "./components/main/reservation/PersonalInfo";
import Reservation from "./components/main/Reservation";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="reservation" element={<Reservation />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
