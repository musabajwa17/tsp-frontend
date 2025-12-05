import { useEffect, useState } from "react";

const BASE_URL =
    import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL;

export const useFetchHotels = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true; // Prevent state update after unmount

        const fetchHotels = async () => {
            try {
                setLoading(true);
                const response = await fetch(`${BASE_URL}/api/hotels`);

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const result = await response.json();

                if (isMounted) {
                    setData(result.data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setData([]);
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchHotels();

        return () => {
            isMounted = false; // Cleanup
        };
    }, []);
    return { data, loading, error };
};
