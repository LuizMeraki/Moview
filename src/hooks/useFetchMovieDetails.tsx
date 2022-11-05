import { useState, useEffect } from "react"
import { IResult } from '../interfaces/IMovies';


const APIKey = import.meta.env.VITE_API_KEY;
const API = import.meta.env.VITE_API_MOVIE_DETAILS;


export const useFetchMovieDetails = (id: string | undefined) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [movie, setMovie] = useState<IResult | null>(null);


  const fetchMovieDetails = async (url: string): Promise<void> => {

    const request = await fetch(url);
    const response = await request.json();

    setMovie(response);
  }

  useEffect(() => {

    const URL = `${API}${id}?${APIKey}`;

    fetchMovieDetails(URL);

  }, []);

  return ({ movie, loading, error });

}