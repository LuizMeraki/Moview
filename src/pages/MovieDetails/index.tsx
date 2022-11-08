import { useParams } from "react-router-dom";
import { BackHomeLink } from "../../components/BackHomeLink";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/Loading";
import { MovieCard } from "../../components/MovieCard";
import { PageTitle } from "../../components/PageTitle";
import { useFetchMovieDetails } from "../../hooks/useFetchMovieDetails";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { TbFileDescription } from "react-icons/tb";
import { BiTimeFive } from "react-icons/bi";
import styles from "./style.module.css";

export const MovieDetails = () => {

  const { id } = useParams();
  const { movie, loading, error } = useFetchMovieDetails(id);

  const formatMoney = (number: number | undefined): string | undefined => {
    if (number) {
      return number.toLocaleString("en-Us", {
        style: "currency",
        currency: "USD"
      })
    } else {
      return "No information"
    }
  }


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
              title={movie && movie.title}
            />
            <div className="movie-container">
              {
                movie && (
                  <MovieCard
                    id={movie.id}
                    title={movie.title}
                    banner={movie.poster_path}
                    votesAverage={movie.vote_average}
                    showMoreInfo={true}
                  />
                )
              }
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <div className={styles.iconAndLabel}>
                  <GiPayMoney />
                  <h4>Budget:</h4>
                </div>
                <p>{formatMoney(movie?.budget)}</p>
              </div>
              <div className={styles.info}>
                <div className={styles.iconAndLabel}>
                  <GiReceiveMoney />
                  <h4>Revenue:</h4>
                </div>
                <p>{formatMoney(movie?.revenue)}</p>
              </div>
              <div className={styles.info}>
                <div className={styles.iconAndLabel}>
                  <BiTimeFive />
                  <h4>Duration:</h4>
                </div>
                <p>{movie?.runtime} minutes</p>
              </div>
              <div className={`${styles.info} ${styles.description}`}>
                <div className={styles.iconAndLabel}>
                  <TbFileDescription />
                  <h4>Description: </h4>
                </div>
                <p>{movie?.overview}</p>
              </div>
            </div>
            <BackHomeLink />
          </>
        )}
      </div>
    </main>
  )
}