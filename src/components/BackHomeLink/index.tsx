import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import styles from "./style.module.css";

export const BackHomeLink = () => {

  const scrollPageUp = () => {
    window.scrollTo(0, 0)
  }


  return (
    <div className={styles.container}>
      <Link to="/" onClick={scrollPageUp}>
        Back Home
        <AiFillHome />
      </Link>
    </div>
  )
}