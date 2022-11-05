import { useLocation } from "react-router-dom";
import { useSearchMovies } from '../../hooks/useSearchMovies';
import { MovieCard } from "../../components/MovieCard";
import { BackHomeLink } from "../../components/BackHomeLink";

export const MovieSearch = () => {

  const parameter = useLocation().search;
  const queryValue = new URLSearchParams(parameter).get("q");

  const { movies, loading, error } = useSearchMovies(queryValue);

  return (
    <main>
      <div className="max-width">
        <div className="page-title-container">
          <h1>Resultados da pesquisa</h1>
        </div>
        <div className="movie-container">
          {
            movies?.results.map((movie) => (
              <MovieCard
                title={movie.title}
                banner={movie.poster_path}
                id={movie.id}
              />
            ))
          }
        </div>
        <BackHomeLink />
      </div>
    </main>
  );
}