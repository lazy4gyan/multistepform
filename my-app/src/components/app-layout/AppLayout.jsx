import { useEffect, useState } from "react";
import { BREAK_POINT } from "../../utils/constants";
import styles from "./style.module.scss";
const AppLayout = ({ children }) => {
  const [windowSize, setWindowSize] = useState(getWindowDimensions());
  const [stepper, main] = children;

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  return (
    <>
      {windowSize.width >= BREAK_POINT ? (
        <section className={styles.layout}>{children}</section>
      ) : (
        <section className={styles.mobile__layoutConatiner}>
          <section className={styles.stepper__container}>{stepper}</section>
          <section className={styles.page__container}>{main}</section>
        </section>
      )}
    </>
  );
};

export default AppLayout;
