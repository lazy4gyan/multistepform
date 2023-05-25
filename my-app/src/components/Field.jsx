/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import React from "react";
import styles from "./style.module.scss"
 
export const Field = ({ children, label, error }) => {
  const id = getChildId(children);
 
  return (
    <div>
      <label htmlFor={id} className={styles.form__label}>
        {label}
      </label>
      {children}
      {error && <small className="error">{error.message}</small>}
    </div>
  );
};
 
// Get id prop from a child element
export const getChildId = (children) => {
  const child = React.Children.only(children);
 
  if ("id" in child?.props) {
    return child.props.id;
  }
};