import { NavLink, useLocation } from "react-router-dom";
import { useAppState } from "../../components/state";
import { useEffect, useState } from "react";
import "./stepper.scss";

export const Stepper = ({ onStepChange }) => {
  const [steps, setSteps] = useState([]);
  const [state] = useAppState();
  const location = useLocation();

  const isVisited = (step) =>
    steps.includes(step) && location.pathname !== step;
  const personalInfoMissing = !state.name || !state.email || !state.phoneNumber;

  const navLinks = [
    {
      url: "/",
      name: "Your info",
      state: {
        showWarning: isVisited("/") && personalInfoMissing,
      },
    },
    {
      url: "/selectplan",
      name: "Select plan",
      state: {},
    },
    {
      url: "/addon",
      name: "Add-ons",
      state: {},
    },
    {
      url: "/summary",
      name: "Summary",
      state: {},
    },
  ];

  useEffect(() => {
    setSteps((steps) => [...steps, location.pathname]);
  }, [location]);

  const currentStep = navLinks.find((link) => link.url === location.pathname);

  return (
    <nav className={"stepper__container"}>
      <ol className={"navbar__list"}>
        {navLinks.map(({ url, name, state }, index) => {
          return (
            <li className={`nav__item`} key={url}>
              <NavLink end to={url} onClick={onStepChange}>
                <div className={`step__container`}>
                  <span
                    className={`step__number ${
                      currentStep?.url === url ? "highlight" : ""
                    } ${state.showWarning && `warning-background`}`}
                  >
                    {state.showWarning ? (
                      <StepState showWarning={state.showWarning} />
                    ) : (
                      <>{index + 1}</>
                    )}
                  </span>
                  <span className={"step__name"}>
                    <p className={"step"}>STEP {index + 1}</p>
                    <p className={"name"}>{name.toUpperCase()}</p>
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

const StepState = ({ showWarning }) => {
  if (showWarning) {
    return <span className={"warning-sign"}>!</span>;
  }
};
