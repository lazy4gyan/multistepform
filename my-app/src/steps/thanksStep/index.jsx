import { TitelDescription, Title } from "../../components";
import styles from "./style.module.scss";
const ThanksPage = () => {
  return (
    <section className="form__container">
      <section className={styles.thanks__container}>
        <img src="../../assets/images/icon-thank-you.svg" alt="thank-you" />
        <Title>Thank you!</Title>
        <TitelDescription alignCenter={true}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </TitelDescription>
      </section>
    </section>
  );
};

export default ThanksPage;
