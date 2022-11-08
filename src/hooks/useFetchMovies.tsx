import { useState, useEffect } from "react";
import { IMovieInfo } from '../interfaces/IMovies';


const APIKey = import.meta.env.VITE_API_KEY;
const API = import.meta.env.VITE_API;

export const useFetchMovies = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [movies, setMovies] = useState<IMovieInfo | null>(null);


  const fetchMovies = async (url: string): Promise<void> => {

    setLoading(true);
    setError(null);

    try {

      const request = await fetch(url);
      const response = await request.json();

      setMovies(response);

    } catch (error) {
      setLoading(false);
      setError("Houve um erro, tente novamente mais tarde.");
    }

    setLoading(false);
  }

  useEffect(() => {

    const URL = `${API}top_rated?${APIKey}`;

    fetchMovies(URL);

  }, []);


  return ({ movies, loading, error })
}