import "./style.scss"
// export default ToggleSwitch;
/* eslint-disable react/display-name */
import { forwardRef } from "react";

const ToggleSwitch = forwardRef((props, ref) => {
  return (
    <>
      <label className="switch">
        <input ref={ref} type="checkbox" className="toggle-switch-input" {...props} />
        <span className="slider round"></span>
      </label>
    </>
  );
});

export default ToggleSwitch
