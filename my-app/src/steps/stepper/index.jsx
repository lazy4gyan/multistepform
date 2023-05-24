// Steps/Stepper.js

import { useLocation } from "react-router-dom";

export const Stepper = () => {
  const location = useLocation();

  const getLinkClass = (path) => {
    return (
      "nav-link disabled " + (path === location.pathname ? "active" : undefined)
    );
  };

  return (
    <nav className="stepper navbar navbar-expand-lg">
      <div className="collapse navbar-collapse">
        <ol className="navbar-nav">
          <li className="step nav-item">
            <span className={getLinkClass("/")}>Information</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/selectplan")}>Select Plan</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/addon")}>Add on</span>
          </li>
          <li className="step nav-item">
            <span className={getLinkClass("/summary")}>Summary</span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
