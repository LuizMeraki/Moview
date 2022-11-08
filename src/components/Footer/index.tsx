import styles from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerArea} max-width`}>
        <p>&copy; 2022 - Mo<span>view</span></p>
      </div>
    </footer>
  );
}