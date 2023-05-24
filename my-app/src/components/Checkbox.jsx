/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Checkbox = forwardRef((props, ref) => {
    const {label,id} = props;
  return (
    <div className="form-check">
      <input ref={ref} className="form-check-input" type="checkbox" {...props} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
});