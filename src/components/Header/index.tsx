import { Link } from "react-router-dom";
import { SearchBar } from "../SearchBar";
import { RiMovie2Line } from "react-icons/ri";
import styles from "./style.module.css";


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.headerArea} max-width`}>
        <div className={styles.title}>
          <RiMovie2Line />
          <Link to="/">
            <h1>Mo<span>view</span></h1>
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}