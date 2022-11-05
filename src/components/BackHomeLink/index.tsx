import { Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import styles from "./style.module.css";

export const BackHomeLink = () => {
  return (
    <div className={styles.container}>
      <Link to="/">
        Back Home
        <AiFillHome />
      </Link>
    </div>
  )
}