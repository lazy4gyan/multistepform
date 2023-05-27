/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
// /* eslint-disable react/prop-types */
import  { forwardRef } from 'react';
import "./card-style.scss"
const Card = forwardRef(({ image, title, description, price,isYearly,className, ...props }, ref) => {
    return (
      <label className={`card ${className}`}>
        <div>
        <input type="radio" className="radio__input" ref={ref} {...props} />
        <img src={image} className="card__img" alt={title} />
        </div>
        
        <div className="card__body">
          <h5 className="card__title">{title}</h5>
          <p className={`card__text ${isYearly === false ?  "mb" : ''}`}>{isYearly ? `$${price * 10}/yr`:`$${price}/mo`}</p>
          {isYearly && <p className="card__offer">{description}</p>}
        </div>
      </label>
    );
  });
export default Card;
