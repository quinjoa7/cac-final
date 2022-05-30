import { useEffect, useState } from "react";
import randomIndex from "./randomIndex";
import { API } from "../apiConfig";
import useApi from "../hooks/useApi";

const GetRandomMovie =  () => {
    const movies = useApi(API.entity.popularMovies);

    const [randomMovie, setRandomMovie] = useState([]);

    useEffect(() => {
        const random = movies[randomIndex(0, movies.length - 1)];
        setRandomMovie(random);
    }, [movies]);
  
    return randomMovie;
}  



export default GetRandomMovie;