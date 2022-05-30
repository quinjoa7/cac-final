import axios from "axios";
import { useEffect, useState } from "react"
import { createURL } from "../apiConfig";

const useApi = (entity) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(createURL.api(entity))
        .then((res) => setData(res.data.results));
    },[]);

    return data;
}

export default useApi