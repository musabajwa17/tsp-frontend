import { Routes, Route } from "react-router-dom";
import About from "../pages/AboutUs";
import Booking from "../pages/Booking";
import ErrorPage from "../pages/ErrorPage";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}
