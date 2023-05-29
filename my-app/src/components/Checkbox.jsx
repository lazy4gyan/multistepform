import { forwardRef } from "react";
import styles from "./style.module.scss"

export const Checkbox = forwardRef((props, ref) => {
    const {label,id} = props;
  return (
    <div className="form-check">
      <input ref={ref} className={styles.form__checkbox} type="checkbox" {...props} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
});