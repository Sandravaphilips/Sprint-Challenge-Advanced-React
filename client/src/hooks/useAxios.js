import { useState, useEffect } from "react";

const useAxios = (url) => {
    const [response, setResponse] = useState(null);
    useEffect(() => {
        const responseFromAxios = axios.get(url)
        setResponse(responseFromAxios.data)
    }, []);
    return response;
};

export default useAxios;