import styles from "./style.module.css";


interface IProps {
  title: string | null
}

export const PageTitle = ({ title }: IProps) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  );
}