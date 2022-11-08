import { ErrorMessage } from '../../components/ErrorMessage';
import { Loading } from '../../components/Loading';
import { MovieCard } from '../../components/MovieCard';
import { PageTitle } from '../../components/PageTitle';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import styles from "./style.module.css";

export const Home = () => {

  const { movies, loading, error } = useFetchMovies();


  return (
    <main>
      <div className="max-width">
        {error &&
          <ErrorMessage
            message={error}
          />
        }
        {loading ? (
          <Loading />
        ) : (
          <>
            <PageTitle
              title="Trending movies 🎬🔥"
            />
            <div className="movie-container">
              {movies?.results?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  banner={movie.poster_path}
                  votesAverage={movie.vote_average}
                  showMoreInfo={false}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </main >
  );
}