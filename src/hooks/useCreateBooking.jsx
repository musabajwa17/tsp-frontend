import { useState } from "react";

const BASE_URL =
    import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL;

const API_URL = `${BASE_URL}/api/bookings/`;

export const useCreateBooking = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createBooking = async (bookingData) => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Error creating booking");
            }

            return result; // Return response to component

        } catch (err) {
            setError(err.message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { createBooking, loading, error };
};
