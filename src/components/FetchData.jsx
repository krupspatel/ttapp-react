// src/components/FetchData.jsx
import React, { useEffect, useState } from 'react';
import { API_URL } from '../config';

const FetchData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/users/`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => setError(err));
    }, []);

    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default FetchData;
