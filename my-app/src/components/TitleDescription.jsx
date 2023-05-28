/* eslint-disable react/prop-types */
import styles from "./style.module.scss";

export const TitelDescription = ({ children,alignCenter }) => {
  return (
      <p className={`${styles.form__description} ${alignCenter? `${styles.center}`:""}`}>{children}</p>
  );
};