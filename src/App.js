import * as React from "react";
import "./App.css";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  BrowserRouter as Router,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { useState, createContext, useContext, useEffect } from "react";
import Homepage from "./Component/Homepage/Homepage";
import Payment from "./Component/Payment/Payment";
import PaymentSuccess from "./Component/PaymentSuccess/PaymentSuccess";
import env from "react-dotenv";
import Careers from "./Component/Careers/Careers";
import Events from "./Component/Events/Events";
import ThriversDaily from "./Component/ThriversDaily/ThriversDaily";
import ContactUS from "./Component/ContactUS/ContactUS";
import ApplyInterns from "./Component/ApplyIntern/ApplyIntern";
import axios from "axios";
import EnterProject from "./Component/EnterProject/EnterProject";

export const TeamContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <TeamContext.Provider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/Career" element={<Careers />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Blogs" element={<ThriversDaily />} />
            <Route path="/EnterProject" element={<EnterProject />} />
            <Route path="/ApplyInterns" element={<ApplyInterns />} />
            <Route path="/Contact" element={<ContactUS />} />
            <Route path="Payment" element={<Payment />} />
            <Route path="success" element={<PaymentSuccess />} />
          </Routes>
        </BrowserRouter>
      </TeamContext.Provider>
    )
  );
}

export default App;
