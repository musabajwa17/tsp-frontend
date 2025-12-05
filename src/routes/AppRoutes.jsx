import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load route components for code splitting
const About = lazy(() => import("../pages/AboutUs"));
const Booking = lazy(() => import("../pages/Booking"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

// Loading fallback component
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
        </div>
    </div>
);

export default function AppRoutes() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Suspense>
    );
}
