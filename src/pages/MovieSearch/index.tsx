import { useLocation } from "react-router-dom";
import { useSearchMovies } from '../../hooks/useSearchMovies';
import { MovieCard } from "../../components/MovieCard";
import { BackHomeLink } from "../../components/BackHomeLink";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { ErrorMessage } from "../../components/ErrorMessage";

export const MovieSearch = () => {

  const parameter = useLocation().search;
  const queryValue = new URLSearchParams(parameter).get("q");

  const { movies, loading, error } = useSearchMovies(queryValue);

  return (
    <main>
      <div className="max-width">
        {error &&
          <ErrorMessage message={error} />
        }
        {loading ? (
          <Loading />
        ) : (
          <>
            <PageTitle
              title={`" ${queryValue} "`}
            />
            <div className="movie-container">
              {
                movies?.results.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    banner={movie.poster_path}
                    votesAverage={movie.vote_average}
                    showMoreInfo={false}
                  />
                ))
              }
            </div>
            <BackHomeLink />
          </>
        )}
      </div>
    </main>
  );
}