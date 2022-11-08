import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import styles from "./style.module.css";


interface IProps {
  id: number,
  title: string,
  banner?: string,
  votesAverage: number
  showMoreInfo: boolean
}

const bannerAPI = import.meta.env.VITE_BANNER_URL;


export const MovieCard = ({ id, title, banner, votesAverage, showMoreInfo }: IProps) => {

  const bannerURL = `${bannerAPI}${banner}`;

  const scrollPageUp = () => {
    window.scrollTo(0, 0);
  }


  return (
    <div className={styles.card}>
      <div className={styles.banner}>
        <img src={bannerURL} alt={title} />
      </div>
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.votes}>
        <AiFillStar />
        <p>{votesAverage}</p>
      </div>
      <div className={styles.seeMore}>
        {!showMoreInfo &&
          <Link to={`/movie-details/${id}`} onClick={scrollPageUp}>
            See more
          </Link>
        }
      </div>
    </div>
  );
}