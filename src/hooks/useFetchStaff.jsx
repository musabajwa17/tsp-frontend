import { useEffect, useState } from "react";

const BASE_URL =
    import.meta.env.VITE_API_URL || process.env.REACT_APP_API_URL;

const API_URL = `${BASE_URL}/api/staff/`;

export const useFetchStaff = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchStaff = async () => {
            try {
                setLoading(true);

                const response = await fetch(API_URL);

                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }

                const result = await response.json();

                if (isMounted) {
                    setData(result.data);
                    setError(null)
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setData([]);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchStaff();

        return () => {
            isMounted = false;
        };
    }, []);

    return { data, loading, error };
};
