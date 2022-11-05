import { Link } from "react-router-dom";
import styles from "./style.module.css";


interface IProps {
  title: string,
  banner?: string,
  id: number,
}

const bannerUrl = import.meta.env.VITE_BANNER_URL;

export const MovieCard = ({title, banner, id} : IProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.banner}>
        <img src={`${bannerUrl}${banner}`} alt={title} />
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.seeMore}>
        <Link to={`/movie-details/${id}`}>See more</Link>
      </div>
    </div>
  );
}