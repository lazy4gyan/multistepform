/* eslint-disable react/prop-types */
// Steps/Stepper.js

import { NavLink, useLocation } from "react-router-dom";
import { useAppState } from "../../state";
import { useEffect, useState } from "react";
import styles from "./style.module.scss"

export const Stepper = ({ onStepChange }) => {
  const [state] = useAppState();

  const location = useLocation();
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    setSteps((steps) => [...steps, location.pathname]);
  }, [location]);

  const getLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : undefined}`;

  const personalInfoMissing = !state.name || !state.email || !state.phoneNumber;

  const isVisited = (step) =>
    steps.includes(step) && location.pathname !== step;

  const navLinks = [
    {
      url: "/",
      name: "Your info",
      state: {
        showWarning: isVisited("/") && personalInfoMissing,
        showSuccess: isVisited("/") && !personalInfoMissing,
      },
    },
    {
      url: "/selectplan",
      name: "Select plan",
      state: {
        showSuccess: isVisited("/selectplan"),
      },
    },
    {
      url: "/addon",
      name: "Add-ons",
      state: {
        showSuccess: isVisited("/addon"),
      },
    },
    {
      url: "/summary",
      name: "Summary",
      state: {},
    },
  ];

  return (
    <nav className={styles.stepper__container}>
        <ol className={styles.navbar__list}>
          {navLinks.map(({ url, name, state },index) => {
            return (
              <li className={styles.nav__item} key={url}>
                {/* <StepState
                  showWarning={state.showWarning}
                  showSuccess={state.showSuccess}
                /> */}
                <NavLink
                  end
                  to={url}
                  className={getLinkClass}
                  onClick={onStepChange}
                >
                  <div className={styles.step__container}>
                    <span className={styles.step__number}>{index+1}</span>
                    <span className={styles.step__name}>
                      <p>STEP {index+1}</p>
                      <p>{name.toUpperCase()}</p>
                    </span>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ol>
    </nav>
  );
};

const StepState = ({ showWarning, showSuccess }) => {
  if (showWarning) {
    return <span className={"warning-sign"}>!</span>;
  } else if (showSuccess) {
    return (
      <div className="checkmark">
        <div className="circle"></div>
        <div className="stem"></div>
        <div className="tick"></div>
      </div>
    );
  } else {
    return null;
  }
};
