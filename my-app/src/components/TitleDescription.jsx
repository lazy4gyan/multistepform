/* eslint-disable react/prop-types */
import styles from "./style.module.scss";

export const TitelDescription = ({ children }) => {
  return (
      <p className={styles.form__description}>{children}</p>
  );
};