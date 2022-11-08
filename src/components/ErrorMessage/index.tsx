import styles from "./style.module.css";


interface IProps {
  message: string
}

export const ErrorMessage = ({ message }: IProps) => {
  return (
    <div className={styles.container}>
      <p>{message}</p>
    </div>
  );
}