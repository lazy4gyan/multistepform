/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
// /* eslint-disable react/prop-types */
import  { forwardRef } from 'react';
import styles from "./style.module.scss"
const Card = forwardRef(({ image, title, description, price,isYearly, ...props }, ref) => {
    return (
      <label className={styles.card}>
        <input type="radio" className={styles.radio__input} ref={ref} {...props} />
        <img src={image} className={styles.card__img} alt={title} />
        <div className={styles.card__body}>
          <h5 className={styles.card__title}>{title}</h5>
          <p className={`${styles.card__text} ${isYearly === false ? styles.mb : ''}`}>{isYearly ? `$${price * 10}/yr`:`$${price}/mo`}</p>
          {isYearly && <p className={styles.card__offer}>{description}</p>}
        </div>
      </label>
    );
  });
export default Card;
