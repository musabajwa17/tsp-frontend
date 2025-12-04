import { Routes, Route } from "react-router-dom";
import About from "../pages/AboutUs";
// import Booking from "../pages/Booking";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<About />} />
            {/* <Route path="/booking" element={<Booking />} />
            <Route path="*" element={<NotFound />} /> */}
        </Routes>
    );
}
