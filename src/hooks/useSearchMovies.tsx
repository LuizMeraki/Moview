import { useState, useEffect } from "react";
import { IMovieInfo } from "../interfaces/IMovies";


const searchAPI = import.meta.env.VITE_SEARCH_API;
const APIKey = import.meta.env.VITE_API_KEY;


export const useSearchMovies = (query: string | null) => {
  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [movies, setMovies] = useState<IMovieInfo | null>(null);


  const searchMovie = async (url: string): Promise<void> => {

    const request = await fetch(url);
    const response = await request.json();

    setMovies(response);
  }

  useEffect(() => {

    const URL = `${searchAPI}?${APIKey}&query=${query}`;

    searchMovie(URL);

  }, [query]);


  return ({ movies, loading, error });
}