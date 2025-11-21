import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Home from "@/pages/Home";
import Scripts from "@/pages/Scripts";
import Booking from "@/pages/Booking";
import About from "@/pages/About";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scripts" element={<Scripts />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
