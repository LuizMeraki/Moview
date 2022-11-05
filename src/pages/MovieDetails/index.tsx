import { useParams } from "react-router-dom";
import { BackHomeLink } from "../../components/BackHomeLink";
import { MovieCard } from "../../components/MovieCard";
import { useFetchMovieDetails } from "../../hooks/useFetchMovieDetails";

export const MovieDetails = () => {

  const { id } = useParams();
  const { movie, loading, error } = useFetchMovieDetails(id);


  return (
    <main>
      <div className="max-width">
        <div className="page-title-container">
          <h1>Detalhes do filme</h1>
          <span>{movie && movie.title}</span>
        </div>
        <div className="movie-container">
          {
            movie && (
              <MovieCard
                title={movie.title}
                banner={movie.poster_path}
                id={movie.id}
              />
            )
          }
        </div>
        <BackHomeLink />
      </div>
    </main>
  )
}