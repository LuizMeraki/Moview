import { MovieCard } from '../../components/MovieCard';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import styles from "./style.module.css";

export const Home = () => {

  const { movies, loading, error } = useFetchMovies();

  
  return (
    <main>
      <div className="max-width">
        <div className="page-title-container">
          <h1>Filmes em alta</h1>
        </div>
        <div className="movie-container">
          {movies?.results.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              banner={movie.poster_path}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}