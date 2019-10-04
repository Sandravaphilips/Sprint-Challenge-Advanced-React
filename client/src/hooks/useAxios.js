import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
    const [response, setResponse] = useState(null);
    useEffect(() => {
        const responseFromAxios = axios.get(url)
        setResponse(responseFromAxios.data)
    }, []);
    return response;
};

export default useAxios;