import styles from "./style.module.scss";

export const Title = ({ children }) => {
  return (
    <header className={styles.form__title}>
      <h2>{children}</h2>
    </header>
  );
};

// export default Title;