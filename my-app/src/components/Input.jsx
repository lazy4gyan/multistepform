import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef((props, ref) => {
  return <input ref={ref} className={styles.form__input} {...props} />;
});