import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./style.module.scss";

export const Button = forwardRef(
  ({ children, variant = "primary", ...props }, ref) => {
    const buttonRef = useRef();

    useImperativeHandle(ref, () => ({
      click: () => {
        buttonRef.current?.click();
      },
    }));

    const className = styles[`btn-${variant}`];

    return (
      <button
        className={`${styles.btn} ${className}`}
        {...props}
        ref={buttonRef}
      >
        {children}
      </button>
    );
  }
);
